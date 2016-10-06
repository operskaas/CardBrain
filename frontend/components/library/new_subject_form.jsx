import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class NewSubjectForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      subjectName: ''
    };
    this.handleSubjectNameChange = this.handleSubjectNameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleSubjectNameChange(e) {
    this.setState({
      subjectName: e.currentTarget.value
    });
  }

  handleFormSubmit() {
    this.props.createSubject(this.state)
  }

  render () {
    return (
      <form onSubmit={this.handleFormSubmit} className='new-subject-form'>
        <h4 className='form-header'>New Subject</h4>
        <input
          className='form-input'
          placeholder='subject name'
          value={this.state.subjectName}
          type='text'
          onChange={this.handleSubjectNameChange}
          autoFocus
        />
        <button className='blue-button'>Create Subject</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createSubject: (subject) => dispatch(createSubject(subject))
});

const mapStateToProps = state => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewSubjectForm);
