import React, { useContext } from 'react';
import { SettingsContext } from '../context/settings';
import { ThemeContext } from '../context/theme';
export default function Content(props) {
  // when we have 2 contexts we can use 2 useContext
  const siteContext = useContext(SettingsContext);
  const themeContext = useContext(ThemeContext);
  return (
    <div>
      <h1>function Component</h1>

      <h2>{siteContext.title}</h2>
      <a href={`http://www.twitter.com/${siteContext.twitter}`}>
        @{siteContext.twitter}
      </a>

      <hr />

      <h2>Current Mode: {themeContext.mode}</h2>
    </div>
  );
}
