import React, { Component } from 'react';
import List from '../list';
import superagent from 'superagent';
import Home from '../home';
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
    };
  }
  componentDidMount() {
    console.log('Only run one time');
    // superagent
    //   .get('https://pokeapi.co/api/v2/pokemon')
    //   .then((response) => this.setState({ pokemons: response.body.results }));
  }
  render() {
    return (
      <main>
        <Home />
        <List pokemons={this.state.pokemons} />
      </main>
    );
  }
}
