import React from 'react';
import ReactDOM from 'react-dom';
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

  componentDidMount () {
    setTimeout(() => ReactDOM.findDOMNode(this.refs.un).focus(), 0);
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      hashHistory.push("/");
    }
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
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

  guestLogin() {
    // const username = 'porkchop';
    // const interval = 240;
    // for (var i = 1; i <= username.length; i++) {
    //   let delay = interval * i;
    //   setTimeout(() => this.setState({username: username.substring(0,i)}), delay);
    // }
    // const password = 'porkchop';
    // for (var i = 1; i <= password.length; i++) {
    //   setTimeout(() => this.setState({password: password.substring(0,i)}), (interval*i));
    // }

    this.setState({username: 'porkchop', password: 'porkchop'});

    setTimeout(() => this.props.processForm(this.state), 150);
  }

  render () {
    let header = 'Sign up';
    let guestLogin = <noscript />
    if (this.props.formType === 'login') {
      header = 'Login';
      guestLogin = <button onClick={this.guestLogin} className='guest-login'>Login as Guest</button>;
    }
    let errors = <noscript />
    if (this.props.errors.length > 0) {
      errors = this.props.errors.map((error, idx) => <li key={idx}>{error}</li>);
      errors = <ul className='errors-list'>{errors}</ul>
    }
    return (
      <div className='session-form'>
        <h4 className='form-header'>{header}</h4>
        {errors}
        <form onSubmit={this.handleSubmit}>
            <input
              className='form-input'
              ref='un'
              placeholder='username'
              value={this.state.username}
              onChange={this.handleChange('username')}
            />
            <input
              className='form-input'
              placeholder='password'
              type='password'
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
          <button className='blue-button'>{header}</button>
        </form>
        {guestLogin}
      </div>
    );
  }
}

export default SessionForm;
