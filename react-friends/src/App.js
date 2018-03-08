import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people.js';
import { PeopleList } from './PeopleList.js'

class App extends Component {
  constructor() {
    super();
    this.state= {
      People: [],
      Location: "place"
    };
  }

  componentDidMount() {
    this.setState({People: people});
  }

  render(){
    console.log(this.state);
    return(
      <div className = "App">
        <h1>The People: </h1>
        <PeopleList list={this.state.People} place={this.state.Location} />
      </div>
    );
  }
}

export default App;
