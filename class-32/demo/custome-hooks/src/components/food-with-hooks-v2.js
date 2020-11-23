import React from 'react';
import useFormInput from '../hooks/form-input';

export default function Food(props) {
  // we still can have a component level state if needed
  // const [state, setState] = useState({});
  const nameInput = useFormInput('', 'Enter Food');
  const caloriesInput = useFormInput('', 'Enter Calories');
  function handleSubmit(e) {
    e.preventDefault();
    console.log(
      'Hello State from component???',
      nameInput.value,
      caloriesInput.value
    );
  }

  return (
    <section>
      <h2>function Component with hooks v2</h2>
      <form onSubmit={handleSubmit}>
        <input {...nameInput} />
        <input type="text" {...caloriesInput} />
        <button>add food</button>
      </form>
      <p> my food? {nameInput.value}</p>
      <p>my calories? {caloriesInput.value}</p>
    </section>
  );
}
