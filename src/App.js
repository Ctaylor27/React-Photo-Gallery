import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Image from './Image/Image';
import './App.css';

class App extends Component {
  state = {
    pictures: [
      { link: 'https://images.unsplash.com/photo-1551986782-74b48e9c3175?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', desc: 'A Big Fat Walrus!'},
      { link: 'https://images.unsplash.com/photo-1551897628-d053c089e823?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', desc: 'Two Cute Ducks!'},
      { link: 'https://images.unsplash.com/photo-1551350952-b53990fa38b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', desc: 'What! Ellos!'},
      { link: 'https://images.unsplash.com/photo-1551473985-274d7ed1356e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', desc: 'Big Scary Rhinos!'}
    ]
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <div className="image-display">
          <Image link={this.state.pictures[0].link} desc={this.state.pictures[0].desc} />
          <Image link={this.state.pictures[1].link} desc={this.state.pictures[1].desc} />
          <Image link={this.state.pictures[2].link} desc={this.state.pictures[2].desc} />
          <Image link={this.state.pictures[3].link} desc={this.state.pictures[3].desc} />
        </div>
      </div>
    );
  }
}

export default App;
