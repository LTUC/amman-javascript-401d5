import React, { useState, useEffect } from 'react';

export default function Effect() {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date().toDateString());
  const addPerson = (e) => {
    e.preventDefault();
    // const x = people.slice()
    // x.push(name)
    // setPeople(x);
    // people = [1,2,3,4], name = 5
    // [...people, name] => [1,2,3,4,5]
    name && setPeople([...people, name]);
    console.log('hii');
    e.target.reset();
    setDate(new Date().toDateString());
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  // this will run on Component Did Mount (only one time)
  useEffect(() => {
    console.log('Component Did Mount?');
  }, []);

  // this will run everytime the state change
  useEffect(() => {
    // component Did Update
    console.log('Name Changed to', name);
  }, [name]);
  // only run when a person is added to the people array
  useEffect(() => {
    // component Did Update
    console.log('Name added');
  }, [people]);

  useEffect(() => {
    // component Did Update
    console.log('both', name, people);
  }, [name, people]);
  // component will mount
  useEffect(() => {
    return () => {
      console.log('component will unmounted');
    };
  }, []);
  return (
    <>
      <form onSubmit={addPerson}>
        <input onChange={changeName} placeholder="enter your name" />
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button>Submit</button>
      </form>
      {people.map((person) => {
        return <p key={person}>{person}</p>;
      })}
    </>
  );
}
