import React, { useContext } from 'react';
import { SettingsContext } from '../context/settings';
//3 consume
function SettingsEditor() {
  const context = useContext(SettingsContext);
  return (
    <>
      <h2>Site Settings</h2>
      <label>
        <span>Site Title</span>
        <input
          placeholder="Title"
          onChange={(e) => context.setTitle(e.target.value)}
        />
      </label>
      <label>
        <span>Twitter</span>
        <input
          placeholder="Twitter"
          onChange={(e) => context.setTwitter(e.target.value)}
        />
      </label>
    </>
  );
}

export default SettingsEditor;
