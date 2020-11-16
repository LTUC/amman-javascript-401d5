import React from 'react';
import Form from './form';
import People from './people.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      num: 0,
    };
  }
  handleForm = (results) => {
    console.log('Hi from the App', results);
    this.setState({ people: results });
  };
  handleDelete = (name) => {
    const newPeople = this.state.people.filter(
      (person) => person.name !== name
    );
    console.log(newPeople);
    this.setState({ people: newPeople });
  };
  // PROPS
  // it helps us to send data and functions to components
  // it sent using normal html attribute format (x={y})
  render() {
    // console.log(this);
    return (
      <>
        <button
          data-testid="button"
          onClick={() => this.setState({ num: this.state.num + 1 })}
        ></button>
        <p data-testid="output">{this.state.num}</p>
        <Form title={'Get Star Wars People'} handler={this.handleForm} />
        <People people={this.state.people} handler={this.handleDelete} />
      </>
    );
  }
}

export default App;
