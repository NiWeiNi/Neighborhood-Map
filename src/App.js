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
  clientSecret: 'XAPJ4WFMBJELMWUTGEDOWDHP35QSZL1E43ANJC42HWTXNSFI'  
});

// var params = {
//   'll': '40.496251, -3.593332',
//   'query': 'Barajas Airport',
//   'limit': '1'
// };

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
    places: dataPlaces.markers,
    filteredPlaces: dataPlaces.markers,
    openInfoWindow: false,
    infoWindowPlace: '',
    items: []
  }

  componentDidMount() {
    for (let i = 0; i< params.length; i++) {
      foursquare.venues.getVenue(params[i])
      .then(res => {
        arrayRes.push(res.response);
        this.setState({ items: arrayRes });
      });
    }
    // Uncoment to check info from the place stored in variable 
    // let placeToCheck = {
    //     "ll": "40.411341,-3.693528",
    //     "query": 'caixa'
    // }
    // foursquare.venues.getVenues(placeToCheck)
    //   .then(res=> {
    //     console.log(res.response.venues) });
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

  // fetchPlaceInfo() {
  //   fetch({
  //       url: 'https://api.foursquare.com/v2/venues/explore',
  //       method: 'GET',
  //       qs: {
  //         client_id: 'SUD01OL3D3SNAY2F24URWTTZQVXTGQFD3GV40ASTZDATLQLO',
  //         client_secret: 'XAPJ4WFMBJELMWUTGEDOWDHP35QSZL1E43ANJC42HWTXNSFI',
  //         ll: '40.7243,-74.0018',
  //         query: 'coffee',
  //         v: '20180323',
  //         limit: 1
  //       }
  //     }, function(err, res, body) {
  //       if (err) {
  //         console.error(err);
  //       } else {
  //         console.log(body);
  //       }
  //     });
  // }

  render() {
    console.log(this.state.items)
    console.log(arrayRes)
    return (

      <div className="App">
        <div>
          <div>Items:</div>
          {/* { this.state.items.map(item=> { return <div key={item.id}>{item.name}</div>}) } */}
        </div>
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