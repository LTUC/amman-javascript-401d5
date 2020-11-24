import React, { Component } from 'react';
export const ThemeContext = React.createContext();
export default class ThemeProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'dark',
      toggleMode: this.toggleMode,
    };
  }

  toggleMode = () => {
    const newMode = this.state.mode === 'dark' ? 'light' : 'dark';
    this.setState({ mode: newMode });
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
