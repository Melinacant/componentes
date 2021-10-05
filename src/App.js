import React from 'react'
import { Card } from 'semantic-ui-react';
import './App.css';
import Landing from './components/Landing/Landing';
import {NavBar} from './components/NavBar/NavBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    }
  }

  handleCounterUp = () => {
    this.setState({counter: this.state.counter + 1})
  }

  handleCounterDown = () => {
    this.setState({counter: this.state.counter - 1})
  }

  render() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <div>
        <Card />
      </div>
      <div className="counterSection">
        <h3>{this.state.counter}</h3>
      <div className="btn-section">
        <button onClick={this.handleCounterDown}>Quitar</button>
      <div className="btn-section">
        <button onClick={this.handleCounterUp}>Añadir</button>
      </div>
      </div>
      </div>
    </div>
  )
  }
}

export default App;
