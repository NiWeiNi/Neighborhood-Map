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
    filteredPlaces: [],
    openInfoWindow: false,
    infoWindowPlace: '',
  }

  clickOpenInfoWindow = (id) => {
    this.setState({
      openInfoWindow: true,
      infoWindowPlace: id
    })
  }

  clickCloseInfoWindow = () => {
    this.setState({
      openInfoWindow: false
    })
  }

  updateListOfPlaces = (results) => {
    this.setState({
      filteredPlaces: results
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
                places={this.state.places}
                filteredPlaces={this.state.filteredPlaces}
                clickOpenInfoWindow={this.clickOpenInfoWindow}
                updateListOfPlaces={this.updateListOfPlaces}
              />
            </div>
            <div className="map-container">
              <Map
                googleMapURL= "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: 'calc(100vh - 80px)'}} />}
                mapElement={<div style={{ height: '100%' }} />}
                filteredPlaces={this.state.filteredPlaces}
                openInfoWindow={this.state.openInfoWindow}
                clickOpenInfoWindow={this.clickOpenInfoWindow}
                clickCloseInfoWindow={this.clickCloseInfoWindow}
                currentPlace={this.state.infoWindowPlace}
              />
            </div>
          </div>
      </div>
 
    );
  }
}

export default App;