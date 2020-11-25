import React from 'react';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';
import cookie from 'react-cookies';
dotenv.config();
const API = process.env.API_SERVER || 'https://auth-server-401.herokuapp.com';
const SECRET = process.env.JWT_SECRET || 'supersecret';

export const LoginContext = React.createContext();
class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      login: this.login,
      logout: this.logout,
      user: {},
    };
  }
  componentDidMount() {
    const token = cookie.load('auth');
    this.validateToken(token);
  }
  validateToken = (token) => {
    try {
      // const user = jwt.verify(token, SECRET);
      const user = jwt.decode(token);
      console.log('hi', user);
      this.setLoginState(true, token, user);
    } catch (e) {
      console.log(`TOKEN validation ERROR ${e.message}`);
      this.setLoginState(false, null, {});
    }
  };
  setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    this.setState({ loggedIn, user });
  };

  login = async (username, password) => {
    try {
      const response = await superagent
        .post(`${API}/signin`)
        .set('authorization', `Basic ${btoa(`${username}:${password}`)}`);
      console.log(response.body);
      this.validateToken(response.body.token);
    } catch (e) {
      console.error(e.message);
    }
  };
  logout = () => {
    this.setLoginState(false, null, {});
  };
  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginProvider;
