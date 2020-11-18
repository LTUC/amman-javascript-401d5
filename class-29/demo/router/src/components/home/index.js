import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Home extends Component {
  componentDidMount() {
    console.log('HELLLLLLLLLLO');
  }
  componentWillUnmount() {
    console.log('NOOOOOOOOOOOOOOO');
  }
  render() {
    return (
      <>
        <h2>Home Page</h2>
        <Link
          to={{ pathname: '/details', user: { name: 'test', page: 'test1' } }}
        >
          Go To Details
        </Link>
      </>
    );
  }
}
