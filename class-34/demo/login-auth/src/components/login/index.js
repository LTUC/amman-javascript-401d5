import React from 'react';
import { LoginContext } from '../../context/auth';
import { If, Else, Then } from 'react-if';

class Login extends React.Component {
  static contextType = LoginContext;
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.context.login(this.state.username, this.state.password);
  };

  render() {
    return (
      <If condition={this.context.loggedIn}>
        <Then>
          <button onClick={this.context.logout}>Logout</button>
        </Then>
        <Else>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
            <button>Login</button>
          </form>
        </Else>
      </If>
    );
  }
}

export default Login;
