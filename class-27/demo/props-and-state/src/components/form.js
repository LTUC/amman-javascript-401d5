import React from 'react'; // in react 17.* we can remove this line

function Form(props) {
  // if we dont want to use props here we can have it destructed directly {title,handler}
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props);
    fetch('https://swapi.dev/api/people/')
      .then((raw) => raw.json())
      .then((data) => {
        const results = data.results.reduce((list, person) => {
          list.push({ name: person.name, url: person.url });
          return list;
        }, []);
        props.handler(results);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <button>{props.title}</button>
    </form>
  );
}

export default Form;
