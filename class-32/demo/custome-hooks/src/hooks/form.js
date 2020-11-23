import { useState } from 'react';
// CUSTOME HOOKS START WITH "use"
const useForm = (cb) => {
  const [state, setState] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hello from submit');
    cb(state);
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return [state, handleChange, handleSubmit];
};

export default useForm;
