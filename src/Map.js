import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// Import styles
import Marker from './Marker.js'
import {mapStyle} from './mapStyle.js';
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
        lat: 40.415363,
        lng: -3.707398
    },
    zoom: 14    
  };
 
  render() {
    return (
      // Set the container height explicitly
      <div style={{ height: 'calc(100vh - 80px)', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCfY3HXBDwnMmSYZD9vzl8dTs1shDnXj6c' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            options={mapStyle}
        >
            <Marker
                lat={40.415363}
                lng={-3.707398}
            />
            <Marker
                lat={40.496251}
                lng={-3.593332}
            />
            <Marker
                lat={40.447974}
                lng={-3.691719}
            />
            <Marker
                lat={40.464608}
                lng={-3.671434}
            />
             <Marker
                lat={40.408790}
                lng={-3.694479}
            />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;