import React, { Component } from 'react';
import marker from './marker.png';
import './App.css';

class App extends Component {
  // Change title to app
  componentDidMount(){
    document.title = "Architecture in Madrid"
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={marker} className="App-logo" alt="logo" />
          <h1 className="App-title">Architecure in Madrid</h1>
        </header>
      </div>
 
    );
  }
}

export default App;
