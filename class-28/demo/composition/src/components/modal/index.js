import React from 'react';
import './modal.scss';
export default function Modal(props) {
  console.log('children', props.children);
  return (
    <div className="overlay">
      <div className="modal">
        <div className="header">
          <span className="title">{props.title}</span>
          <button onClick={props.close}>X</button>
        </div>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
}
