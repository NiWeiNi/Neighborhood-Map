import React, { Component } from 'react';


class ListView extends Component {
    state = {
        places: []
    }

    console.log(this.state.places);
    this.state.places.map(marker =>
      new window.google.maps.Marker({
        position: marker.location,
        id: marker.id
      })
    )
}

export default ListView;