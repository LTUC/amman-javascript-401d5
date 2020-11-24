import React, { Component } from 'react';
import { ThemeContext } from '../context/theme';
export default class ThemeEditor extends Component {
  static contextType = ThemeContext;
  // when we do this we get context attached to `this`
  render() {
    const text = this.context.mode === 'dark' ? 'light' : 'dark';
    return (
      <>
        <h2>Theme Settings</h2>
        <button onClick={this.context.toggleMode}>{text}</button>
      </>
    );
  }
}
