import React from 'react';
import ReactDOM from 'react-dom';

class NewSubjectForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      subject: {title: ''},
      empty: false
    };
    this.handleSubjectNameChange = this.handleSubjectNameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleSubjectNameChange(e) {
    this.setState({
      subject: {title: e.currentTarget.value},
      empty: (e.currentTarget.value === '')
    })
  }

  handleFormSubmit() {
    if (this.state.subject.title === '') {
      this.setState({empty: true});
    } else {
      this.props.handleSubmit(this.state.subject)
    }
  }

  render () {
    let errors = <noscript />;
    if (this.state.empty) {
      errors = (
        <ul className='errors-list'>
          <li>subject can't be empty</li>
        </ul>
      )
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
          onChange={this.handleSubjectNameChange}
          autoFocus
        />
        <button className='blue-button'>Create Subject</button>
      </form>
    )
  }
}

export default NewSubjectForm;
