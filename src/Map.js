import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.415363,
      lng: -3.707398
    },
    zoom: 16
  };
 
  render() {
    return (
      // Set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCfY3HXBDwnMmSYZD9vzl8dTs1shDnXj6c' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.415363}
            lng={-3.707398}
            text={'Plaza mayor'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;