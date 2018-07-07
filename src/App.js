import React, { Component } from 'react';

// Import styles
import './App.css';
import markerLogo from './img/marker.png'

// Import data, places to render
import params from './data/buildings.js'

// Import components
import Map from './components/Map.js'
import ListView from './components/ListView';

// Access to foursquare API
const foursquare = require('react-foursquare')({
  clientID: 'SUD01OL3D3SNAY2F24URWTTZQVXTGQFD3GV40ASTZDATLQLO',
  clientSecret: 'VXI1IVXQMQLVO2GLMBXAZUGKN3HKILW0FZANH1JDZXDRSUQG'  
});

let arrayRes = []

class App extends Component {

  state = {
    filteredPlaces: [],
    openInfoWindow: false,
    infoWindowPlace: '',
    itemPlaces: []
  }

  componentDidMount() {
    // Change document title in browser
    document.title = "Amazing places in Madrid"
    this.getData()
    // Uncoment to check info from the place stored in variable 
    // let placeToCheck = {
    //     "ll": "40.417955,-3.697572",
    //     "query": 'fundacion telefonica'
    // }
    // foursquare.venues.getVenues(placeToCheck)
    //   .then(res=> {
    //     console.log(res.response) });
  }

  // Fecth data from the foursquare API
  getData() {
    for (let i = 0; i< params.length; i++) {
      foursquare.venues.getVenue(params[i])
      .then(res => {
        arrayRes.push(res.response);
        this.setState({ itemPlaces: arrayRes, filteredPlaces: arrayRes});
      });
    }
  }

  // Function to open infowindow if flag is true and the clicked place has the same id than the infowindow
  clickOpenInfoWindow = (id) => {
    this.setState({
      openInfoWindow: true,
      infoWindowPlace: id
    })
  }

  // Function to open infowindow by changing the flag to false
  clickCloseInfoWindow = () => {
    this.setState({
      openInfoWindow: false
    })
  }

  // Function to filter the initial list down to the matches
  updateListOfPlaces = (results) => {
    this.setState({
      filteredPlaces: results
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="hamburger">
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
          <div className="title">
            <img src={markerLogo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Amazing places in Madrid</h1>
          </div>
        </header>
        {/* Create a container for the map and list to style */}
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