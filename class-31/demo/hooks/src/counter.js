import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [isOdd, setIsOdd] = useState(false);
  const updateCounter = () => {
    const newCount = count + 1;
    setCount(newCount);
    setIsOdd(newCount % 2 !== 0);
  };
  return (
    <>
      <h2>Count = {count}</h2>
      <h3>isOdd {isOdd.toString()}</h3>
      <button onClick={updateCounter}>Click</button>
    </>
  );
}

export default Counter;
