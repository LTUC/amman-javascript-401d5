import React from 'react';

const render = (condition = false, children = null) => {
  return condition ? children : null;
};

export const If = (props) => {
  return React.Children.map(props.children, (child) => {
    return React.cloneElement(child, { condition: props.condition });
  });
};

export const Then = (props) => {
  return render(props.condition, props.children);
};

export const Else = (props) => render(!props.condition, props.children);
