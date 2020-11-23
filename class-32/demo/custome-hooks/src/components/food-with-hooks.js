import React from 'react';
import useForm from '../hooks/form';

export default function Food(props) {
  // we still can have a component level state if needed
  // const [state, setState] = useState({});
  const [values, handleChange, handleSubmit] = useForm(handleForm);
  function handleForm(newValues) {
    console.log('Hello State from component???', newValues);
  }

  return (
    <section>
      <h2>function Component with hooks</h2>
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
      <p> my food? {values.food}</p>
      <p>my calories? {values.calories}</p>
    </section>
  );
}
