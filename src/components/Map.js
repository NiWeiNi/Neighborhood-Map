import React from 'react';

// Import react-google-maps and its utilities
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

// Import styles and personalized marker
import { mapStyle } from './mapStyle.js';

// IMport customized marker
import markerLogo from '../img/marker.png'

const Map = withScriptjs(withGoogleMap(props => {
    return (
        <GoogleMap
            defaultCenter={{lat: 40.415363, lng: -3.707398}}
            defaultZoom={12}
            defaultOptions={{styles: mapStyle.styles}}
        >
            {props.filteredPlaces.map(place => (
                <Marker
                    animation={place.id === props.currentPlace ? 1 : 2}
                    icon={markerLogo}
                    key={place.id}
                    onClick={() => props.clickOpenInfoWindow(place.id)}
                    position={{"lat": place.location.lat, "lng": place.location.lng}}
                    tabIndex="0"
                >
                    {props.openInfoWindow && place.id === props.currentPlace &&
                        <InfoWindow
                            onCloseClick={() => props.clickCloseInfoWindow()}
                        >
                            <div className="infowindow">
                                <a href={place.canonicalUrl} className="place-link">{place.name}</a>
                                <div className="place-image">
                                    <img className="place-photo" src={place.bestPhoto.prefix + "200" + place.bestPhoto.suffix} alt={place.name}></img>
                                </div>
                                <div className="place-rating">{place.rating ? place.rating : "-"}</div>
                                <div className="place-direction">{place.location.address}</div>
                            </div>
                        </InfoWindow>}
                </Marker>
            ))
            }

        </GoogleMap>
    )}
))

export default Map