import React, { Component } from 'react';

// Import styles
import './App.css';
import markerLogo from './img/marker.png'

// Import data
import dataPlaces from './data/buildings.json'

// Import components
import Map from './components/Map.js'
import ListView from './components/ListView';

class App extends Component {

  state = {
    places: dataPlaces.markers,
    openInfoWindow: false
  }

  clickOpenInfoWIndow = () => {
    this.setState({
      openInfoWindow: true
    })
  }

  render() {
    
    return (

      <div className="App">
        <header className="App-header">
          <img src={markerLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Architecure in Madrid</h1>
        </header>
        <div className="main-content">
            <div className="view-list">
              <ListView
              />
            </div>
            <div className="map-container">
              <Map
                googleMapURL= "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: 'calc(100vh - 80px)'}} />}
                mapElement={<div style={{ height: '100%' }} />}
                dataPlaces={this.state.places}
                openInfoWindow={this.state.openInfoWindow}
                onOpenInfoWindow={this.openInfoWindow}
              />
            </div>
          </div>
      </div>
 
    );
  }
}

export default App;