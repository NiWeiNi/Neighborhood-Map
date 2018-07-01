import React, { Component } from 'react';
import scriptLoader from 'react-async-script-loader';
import marker from './marker.png';
import './App.css';
import { mapStyle } from './components/mapStyle.js'
import placesData from './data/buildings.json'
import ListView from './components/listView.js'


class App extends Component {

  render() {
    const style = {
      width: '100vw',
      height: 'calc(100vh - 80px)'
    }
    return (

      <div className="App">
        <header className="App-header">
          <img src={marker} className="App-logo" alt="logo" />
          <h1 className="App-title">Architecure in Madrid</h1>
        </header>
        <div id="map" style={style} role="application">
        </div>
      </div>
 
    );
  }
}

export default App;