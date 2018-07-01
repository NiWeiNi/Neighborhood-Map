import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, } from 'react-google-maps';
import { mapStyle } from './mapStyle.js';

const Map = withScriptjs(withGoogleMap(props => {
    
    return (
        <GoogleMap
            defaultCenter={{lat: 40.415363, lng: -3.707398}}
            defaultZoom={13}
            defaultOptions={{styles: mapStyle.styles}}
        >
        </GoogleMap>
    )}
))

export default Map