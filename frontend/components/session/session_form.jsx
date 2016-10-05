import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class SessionForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  handleChange(property) {
    return (e) => {
      this.setState({[property]: e.currentTarget.value});
    };
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      hashHistory.push("/");
    }
  }

  guestLogin() {
    this.setState({username: 'porkchop', password: 'porkchop'})
    setTimeout(() => this.props.processForm(this.state), 1000);
  }

  render () {
    let header = 'Sign up';
    if (this.props.formType === 'login') {
      header = 'Login';
    }

    const errors = this.props.errors.map((error, idx) => <li key={idx}>{error}</li>);
    return (
      <div className='session-form'>
        <h4>{header}</h4>
        <ul className="errors-list">
          {errors}
        </ul>
        <form onSubmit={this.handleSubmit}>
            <input
              placeholder='username'
              value={this.state.username}
              onChange={this.handleChange('username')}
            />
            <input
              placeholder='password'
              type='password'
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
          <button className='blue-button'>{header}</button>
        </form>
        <button onClick={this.guestLogin} className='guest-login'>Login as Guest</button>
      </div>
    );
  }
}

export default SessionForm;
