import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class NewSubjectForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      subject: {title: ''},
      empty: false,
      exists: false
    };
    this.handleSubjectNameChange = this.handleSubjectNameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    setTimeout(() => ReactDOM.findDOMNode(this.refs.input).focus(), 0);
  }

  handleSubjectNameChange(e) {
    const currentSubjectFollows = this.props.currentSubjectFollows;
    const currentTitles = Object.keys(currentSubjectFollows).map(
      (key) => currentSubjectFollows[key].title
    )
    if (currentTitles.includes(e.currentTarget.value)){
      this.setState({exists: true});
    } else {
      this.setState({exists: false});
    }

    this.setState({
      subject: {title: e.currentTarget.value},
      empty: (e.currentTarget.value === '')
    })
  }

  handleFormSubmit() {
    if (this.state.subject.title === '') {
      this.setState({empty: true});
    } else if (!this.state.exists){
      this.props.handleSubmit(this.state.subject)
    }
  }

  render () {
    let errors = [];
    if (this.state.empty) {
      errors.push("subject can't be empty");
    }
    if (this.state.exists) {
      errors.push("can't duplicate subject")
    }
    if (errors.length > 0) {
      errors = errors.map((error, idx) => <li key={idx}>{error}</li>);
      errors = <ul className='errors-list'>{errors}</ul>
    } else {
      errors = <noscript />
    }
    return (
      <form onSubmit={this.handleFormSubmit} className='new-subject-form'>
        <h4 className='form-header'>New Subject</h4>
        {errors}
        <input
          className='form-input'
          placeholder='subject name'
          value={this.state.title}
          type='text'
          ref='input'
          onChange={this.handleSubjectNameChange}
          autoFocus
        />
        <button className='blue-button'>Create Subject</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  currentSubjectFollows: state.subjectFollows.current
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewSubjectForm);
