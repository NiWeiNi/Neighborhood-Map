import React, { Component } from 'react';

// Import styles
import './App.css';
import markerLogo from './img/marker.png'

// Import data
import dataPlaces from './data/buildings.json'

// Import components
import Map from './components/Map.js'
import ListView from './components/ListView';

// Access to foursquare API
var foursquare = require('react-foursquare')({
  clientID: 'SUD01OL3D3SNAY2F24URWTTZQVXTGQFD3GV40ASTZDATLQLO',
  clientSecret: 'VXI1IVXQMQLVO2GLMBXAZUGKN3HKILW0FZANH1JDZXDRSUQG'  
});

// Places to render with venue_id
var params = [
  {'venue_id': "4afde737f964a520e72b22e3"},
  {'venue_id': "4b74fd33f964a5204cfa2de3"},
  {'venue_id': "4b4ddd13f964a520b6d926e3"},
  {'venue_id': "4da6dab08154fe28a8d91eb3"},
  {'venue_id': "4b0015c0f964a520b43a22e3"}
]

var arrayRes = []

class App extends Component {

  state = {
    filteredPlaces: [],
    openInfoWindow: false,
    infoWindowPlace: '',
    itemPlaces: []
  }

  componentDidMount() {
    this.getData()
    // Uncoment to check info from the place stored in variable 
    // let placeToCheck = {
    //     "ll": "40.411341,-3.693528",
    //     "query": 'caixa'
    // }
    // foursquare.venues.getVenues(placeToCheck)
    //   .then(res=> {
    //     console.log(res.response.venues) });
  }

  getData() {
    for (let i = 0; i< params.length; i++) {
      foursquare.venues.getVenue(params[i])
      .then(res => {
        arrayRes.push(res.response);
        this.setState({ itemPlaces: arrayRes, filteredPlaces: arrayRes});
      });
    }

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
    console.log(this.state.itemPlaces)
    console.log(arrayRes)
    return (

      <div className="App">
        <header className="App-header">
          <img src={markerLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Amazing places</h1>
        </header>
        <div className="main-content">
            <div className="view-list">
              <ListView
                places={this.state.places}
                filteredPlaces={this.state.filteredPlaces}
                clickOpenInfoWindow={this.clickOpenInfoWindow}
                updateListOfPlaces={this.updateListOfPlaces}
                itemPlaces={this.state.itemPlaces}
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
                itemPlaces={this.state.itemPlaces}
              />
            </div>
          </div>
      </div>
 
    );
  }
}

export default App