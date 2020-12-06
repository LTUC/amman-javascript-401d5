import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export default DismissKeyboard = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );
};
