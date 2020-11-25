import React from 'react';
import { LoginContext } from '../../context/auth';
import { If } from 'react-if';

class Auth extends React.Component {
  static contextType = LoginContext;
  render() {
    let okToRender =
      this.context.loggedIn && this.props.capability
        ? this.context.user.capabilities.includes(this.props.capability)
        : false;
    return <If condition={okToRender}>{this.props.children}</If>;
  }
}

export default Auth;
