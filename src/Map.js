import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import myData from './data/buildings.json';

// Import styles
import Marker from './Marker.js'
import {mapStyle} from './mapStyle.js';
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
        lat: 40.415363,
        lng: -3.707398
    },
    zoom: 13    
  };
 
  render() {
    return (
      // Set the container height explicitly
      <div style={{ height: 'calc(100vh - 80px)', width: '80%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCfY3HXBDwnMmSYZD9vzl8dTs1shDnXj6c' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            options={mapStyle}
        >
            { myData.markers.map(marker =>
                <Marker 
                    lat={marker.location[0]}
                    lng={marker.location[1]}
                />
            )

            }
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;