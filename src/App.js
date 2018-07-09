import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import styles
import './App.css';
import markerLogo from './img/marker.png';

// Import data, places to render
import params from './data/buildings.js';

// Import components
import Map from './components/Map.js';
import ListView from './components/ListView';

// Access to foursquare API
const foursquare = require('react-foursquare')({
  clientID: 'SUD01OL3D3SNAY2F24URWTTZQVXTGQFD3GV40ASTZDATLQLO',
  clientSecret: 'VXI1IVXQMQLVO2GLMBXAZUGKN3HKILW0FZANH1JDZXDRSUQG'  
});

let arrayRes = []

class App extends Component {

  // Check for proptypes
  static propTypes = {
    filteredPlaces: PropTypes.array,
    infoWindowPlace: PropTypes.string,
    itemPlaces: PropTypes.array,
    openInfoWindow: PropTypes.bool,
    menuActive: PropTypes.bool,
  }

  state = {
    filteredPlaces: [],
    openInfoWindow: false,
    infoWindowPlace: '',
    itemPlaces: [],
    menuActive: false
  }

  componentDidMount() {
    // Change document title in browser
    document.title = "Amazing places in Madrid"
    this.getData()    
  }

  // Fecth data from the foursquare API
  getData() {
    params.forEach(param => foursquare.venues.getVenue(param)
    .then(res => {
      arrayRes.push(res.response);
      this.setState({ itemPlaces: arrayRes, filteredPlaces: arrayRes});
    }))
  }

  // Function to open viewList in small screens by switching flag in state
  clickOpenViewList = () => {
    this.setState({menuActive: !this.state.menuActive})
  }

  // Function to open infowindow if flag is true and the clicked place has the same id than the infowindow
  clickOpenInfoWindow = (id) => {
    this.setState({
      openInfoWindow: true,
      infoWindowPlace: id,
      menuActive: false,
    })
  }

  // Function to open infowindow by changing the flag to false and desactivate animation on marker
  clickCloseInfoWindow = () => {
    this.setState({
      openInfoWindow: false,
      infoWindowPlace: ''
    })
  }

  // Function to filter the initial list down to the matches
  updateListOfPlaces = (results) => {
    this.setState({
      filteredPlaces: results
    })
  }

  render() {

    // Variable to store position of the ViewList acordding to flag in state
    const openMenu = this.state.menuActive ? "0" : "calc(-100% - 160px)";

    return (
      <div className="App">
        <header className="App-header">
          {/* Hamburger container and click function to open/close */}
          <div className="hamburger" onClick={this.clickOpenViewList.bind(this)}>
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
            <div className="view-list" style={{left:openMenu}}>
              <ListView
                filteredPlaces={this.state.filteredPlaces}
                clickOpenInfoWindow={this.clickOpenInfoWindow}
                updateListOfPlaces={this.updateListOfPlaces}
                itemPlaces={this.state.itemPlaces}
              />
            </div>
            <div className="map-container">
            { this.state.filteredPlaces ?
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
              : <div className="error-map">
                  <p>
                    Error: 
                  </p>
                  <p>
                    This is a little embarrassing, we cannot connect to the site at the moment
                  </p>
                  <p>
                    Please, stay tunned as we will back asap
                  </p>  
                </div>
            }
            </div>
          </div>
      </div>
 
    );
  }
}

export default App