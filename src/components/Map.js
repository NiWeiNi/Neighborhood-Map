import React from 'react';

// Import react-google-maps and its utilities
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

// Import styles and personalized marker
import { mapStyle } from './mapStyle.js';

const Map = withScriptjs(withGoogleMap(props => {
    
    return (
        <GoogleMap
            defaultCenter={{lat: 40.415363, lng: -3.707398}}
            defaultZoom={13}
            defaultOptions={{styles: mapStyle.styles}}
        >
            {props.dataPlaces.map(place => (
                <Marker
                    position={place.location}
                    key={place.id}
                >
                    {<InfoWindow>
                        <div className="infowindow">
                            <div className="place-name">{place.name}</div>
                            <div className="place-direction"></div>
                            <div className="place-image"></div>
                        </div>
                    </InfoWindow>}

                </Marker>
            ))}

        </GoogleMap>
    )}
))

export default Map