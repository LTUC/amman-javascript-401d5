import React, { useState } from 'react';

// 1 create a context and export it to be used for consuming
export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  const [title, setTitle] = useState('test');
  const [twitter, setTwitter] = useState('testTwitter');
  const state = {
    title,
    twitter,
    setTitle,
    setTwitter,
  };

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
