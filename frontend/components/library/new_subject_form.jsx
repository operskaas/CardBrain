import React from 'react';
import ReactDOM from 'react-dom';

class NewSubjectForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.handleSubjectNameChange = this.handleSubjectNameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleSubjectNameChange(e) {
    this.setState({
      title: e.currentTarget.value
    });
  }

  handleFormSubmit() {
    this.props.handleSubmit(this.state)
  }

  render () {
    return (
      <form onSubmit={this.handleFormSubmit} className='new-subject-form'>
        <h4 className='form-header'>New Subject</h4>
        <input
          className='form-input'
          placeholder='subject name'
          value={this.state.title}
          type='text'
          onChange={this.handleSubjectNameChange}
          autoFocus
        />
        <button className='blue-button'>Create Subject</button>
      </form>
    )
  }
}

export default NewSubjectForm;
