import React from 'react';

// Import react-google-maps and its utilities
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

// Import styles and personalized marker
import { mapStyle } from './mapStyle.js';

// IMport customized marker
import markerLogo from '../img/marker.png'

const Map = withScriptjs(withGoogleMap(props => {
    console.log(props.itemsPlaces);
    
    return (
        <GoogleMap
            defaultCenter={{lat: 40.415363, lng: -3.707398}}
            defaultZoom={12}
            defaultOptions={{styles: mapStyle.styles}}
        >
            {props.itemPlaces.map(place => (
                <Marker
                    icon={markerLogo}
                    key={place.venue.id}
                    onClick={() => props.clickOpenInfoWindow(place.venue.id)}
                    position={{"lat": place.venue.location.lat, "lng": place.venue.location.lng}}
                >
                    {props.openInfoWindow && place.venue.id === props.currentPlace &&
                        <InfoWindow
                            onCloseClick={() => props.clickCloseInfoWindow()}
                        >
                            <div className="infowindow">
                                <a href={place.venue.canonicalUrl} className="place-link">{place.venue.name}</a>
                                <div className="place-image">
                                    <img className="place-photo" src={place.venue.bestPhoto.prefix + "200" + place.venue.bestPhoto.suffix} alt={place.venue.name}></img>
                                </div>
                                <div className="place-rating">{place.venue.rating ? place.venue.rating : "-"}</div>
                                <div className="place-direction">{place.venue.location.address}</div>
                            </div>
                        </InfoWindow>}
                </Marker>
            ))
            }

        </GoogleMap>
    )}
))

export default Map