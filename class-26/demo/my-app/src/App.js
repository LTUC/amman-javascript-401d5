import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>My header</h1>
    </header>
  );
};
const Footer = () => <footer>&copy; 2020</footer>;

class Main extends React.Component {
  constructor(props) {
    super(props);
    // init state
    this.state = { words: 'nothing to see here' };
    // we cant directly change the state
    // if you dont create arrow functions you would have to bind
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    console.log('hi', this.state);
    this.setState({ words: e.target.value });
    /// DONT UPDATE THE STATE DIRECTLY
    // this.state.words = e.target.value;
    console.log('helloooooo', this.state);
  };
  handleClick = () => {
    const words = this.state.words.split('').reverse().join('');
    this.setState({ words }); /// {words:"reverse"}
    console.log('hello');
  };
  render() {
    return (
      <main>
        <h3>{this.state.words}</h3>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Click</button>
      </main>
    );
  }
}
//functional component | stateless component
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
