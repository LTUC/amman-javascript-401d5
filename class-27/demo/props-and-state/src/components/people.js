import React from 'react';

export default function People({ people, handler }) {
  return (
    <ul>
      {people.map((person, index) => {
        return (
          <li key={person.name} onClick={() => handler(person.name)}>
            {person.name}
            {/* <a href={person.url} target="_blank">
              {person.name}
            </a> */}
          </li>
        );
      })}
    </ul>
  );
}
