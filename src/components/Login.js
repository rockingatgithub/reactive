import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    //uncontrolled form component handeled by dom...
    // this.emailInputRef = React.createRef;
    // this.passwordInputRef = React.createRef;
    this.state = {
      email: '',
      password: '',
    };
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log('working');
  };
  render() {
    return (
      <form className="Login-form">
        <span className="Login-signup-header">Log In</span>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            // ref={this.emailInputRef}
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            // ref={this.passwordInputRef}
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
        </div>
        <div className="field">
          <button onClick={this.handleFormSubmit}>Log In</button>
        </div>
      </form>
    );
  }
}

export default Login;
