import React from 'react'
import { withScriptjs, GoogleMap, Marker, withGoogleMap } from "react-google-maps"
import myData from '../data/buildings.json'

// Import styles
import mapStyle from './mapStyle.json'

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 40.415363, lng: -3.707398 }}
    defaultOptions={{ styles: mapStyle }}
  > 

    {/* Render custom markers */}
    {props.isMarkerShown && myData.markers.map(marker =>
        <Marker
            key={marker.id}
            position={marker.location} 
        />)}
        
  </GoogleMap>
))

export default MyMapComponent;