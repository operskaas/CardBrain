import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createDeck } from '../../../actions/deck_actions';

class NewDeckForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      objective: '',
      subject_id: props.subjectId,
      empty: false
    };
    this.handleDeckNameChange = this.handleDeckNameChange.bind(this);
    this.handleDeckObjectiveChange = this.handleDeckObjectiveChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    setTimeout(() => ReactDOM.findDOMNode(this.refs.title).focus(), 0);
  }

  handleDeckNameChange(e) {
    this.setState({
      title: e.currentTarget.value,
      empty: (e.currentTarget.value === '')
    });
  }

  handleDeckObjectiveChange(e) {
    this.setState({
      objective: e.currentTarget.value
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    if (this.state.title === '') {
      this.setState({empty: true});
    } else {
      let title, objective, subject_id;
      ({ title, objective, subject_id } = this.state)
      this.props.createDeck({ title, objective, subject_id });
      this.props.closeModal();
    }
  }

  render () {
    let errors = [];
    if (this.state.empty) {
      errors.push("deck name can't be empty");
    }
    // if (this.state.exists) {
    //   errors.push("can't duplicate deck")
    // }
    if (errors.length > 0) {
      errors = errors.map((error, idx) => <li key={idx}>{error}</li>);
      errors = <ul className='errors-list'>{errors}</ul>
    } else {
      errors = <noscript />
    }
    return (
      <form onSubmit={this.handleFormSubmit} className='modal-form new-deck-form'>
        <h4 className='form-header'>New Deck</h4>
        {errors}
        <input
          className='form-input'
          placeholder='deck name'
          value={this.state.title}
          type='text'
          ref='title'
          onChange={this.handleDeckNameChange}
          autoFocus
        />
        <input
          className='form-input'
          placeholder='objective (optional)'
          value={this.state.objective}
          type='text'
          onChange={this.handleDeckObjectiveChange}
        />
      <button className='blue-button'>Create Deck</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  decks: state.decks
});

const mapDispatchToProps = dispatch => ({
  createDeck: (deck) => dispatch(createDeck(deck))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDeckForm);
