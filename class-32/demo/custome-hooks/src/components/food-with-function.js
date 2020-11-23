import React, { useState } from 'react';

export default function Food(props) {
  const [state, setState] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hello State???', state);
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <section>
      <h2>function Component</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="food"
          onChange={handleChange}
          placeholder="add food"
        />
        <input type="text" name="calories" onChange={handleChange} />
        <button>add food</button>
      </form>
      <p> my food? {state.food}</p>
      <p>my calories? {state.calories}</p>
    </section>
  );
}
