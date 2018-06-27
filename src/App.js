import React, { Component } from 'react';
import marker from './marker.png';
import './App.css';

// Import map component
import MyMapComponent from './components/Map.js'

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
        <MyMapComponent 
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `calc(100vh - 80px)` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
 
    );
  }
}

export default App;
