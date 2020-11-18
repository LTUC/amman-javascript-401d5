import React from 'react';

export default function Details(props) {
  const { name, page } = props.location.user;
  console.log(props.history);
  return (
    <div>
      <h2>{name}</h2>
      <p>{page}</p>
      <button onClick={() => props.history.push('/')}>Go Home</button>
    </div>
  );
}
