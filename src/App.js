import React, { Component } from 'react';
import scriptLoader from 'react-async-script-loader';
import marker from './marker.png';
import './App.css';
import { mapStyle } from './components/mapStyle.js'


class App extends Component {

  state = {
    map: {},
  }

  // Change title to app
  componentDidMount(){
    document.title = "Architecture in Madrid"
  }

  componentWillReceiveProps() {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: {lat: 40.415363, lng: -3.707398},
      styles: mapStyle.styles
    });

    this.setState({
      map: map
    })
  }

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

export default scriptLoader(
  ["https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg"]
)(App);