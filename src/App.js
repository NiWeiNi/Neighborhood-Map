import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleMap from './Map.js'

class App extends Component {
  render() {
    return (
      <body>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>

        <SimpleMap />

      </body>
    );
  }
}

export default App;
