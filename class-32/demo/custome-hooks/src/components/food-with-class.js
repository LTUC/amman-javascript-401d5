import React, { Component } from 'react';

export default class Food extends Component {
  constructor(props) {
    super(props);

    this.state = {
      food: '',
      calories: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFoodChange = this.handleFoodChange.bind(this);
    this.handleCaloriesChange = this.handleCaloriesChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Hello State???', this.state);
  }
  handleFoodChange(e) {
    this.setState({ food: e.target.value });
  }
  handleCaloriesChange(e) {
    this.setState({ calories: e.target.value });
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <section>
        <h2>Class Component</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="food"
            onChange={this.handleChange}
            placeholder="add food"
          />
          <input type="text" name="calories" onChange={this.handleChange} />
          <button>add food</button>
        </form>
        <p> my food? {this.state.food}</p>
        <p>my calories? {this.state.calories}</p>
      </section>
    );
  }
}
