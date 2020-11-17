import React, { Component } from 'react';
import Modal from '../modal';
import { If, Then, Else } from '../if';
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    console.log('WHAT IS THIS????');
    return (
      <section>
        <If condition={this.state.isOpen}>
          <Then>
            <Modal title="Pop Up" close={this.toggleModal}>
              <h2>hello</h2>
              <div>THis is my dynamic modal!</div>
              <button onClick={() => console.log('hi')}>click me</button>
            </Modal>
          </Then>
          <Else>
            <button onClick={this.toggleModal}>Open Modal</button>
          </Else>
        </If>
      </section>
    );
  }
}
