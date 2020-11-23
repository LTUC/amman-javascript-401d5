import { useState } from 'react';
function useFormInput(initValue, placeholder) {
  const [value, setValue] = useState(initValue);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return { value, onChange: handleChange, placeholder };
}
export default useFormInput;
