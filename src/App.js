import React, { Component } from 'react';
import marker from './marker.png';
import './App.css';
import SimpleMap from './Map.js'

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={marker} className="App-logo" alt="logo" />
          <h1 className="App-title">Architecure in Madrid</h1>
        </header>
        <SimpleMap />
      </div>
 
    );
  }
}

export default App;
