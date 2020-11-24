import React, { Component } from 'react';
import { SettingsContext } from '../context/settings';
import { ThemeContext } from '../context/theme';
export default class Content extends Component {
  // when we have 2 contexts we cant use static contextType
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <SettingsContext.Consumer>
          {(siteContext) => (
            <>
              <h2>{siteContext.title}</h2>
              <a href={`http://www.twitter.com/${siteContext.twitter}`}>
                @{siteContext.twitter}
              </a>
            </>
          )}
        </SettingsContext.Consumer>

        <hr />
        <ThemeContext.Consumer>
          {(context) => <h2>Current Mode: {context.mode}</h2>}
        </ThemeContext.Consumer>
      </div>
    );
  }
}
