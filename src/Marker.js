import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import {markerStyle} from './markerStyle.js';
import marker from './marker.png';

class Marker extends Component {

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div style={markerStyle}>
            <img src={marker} className="marker" alt="marker" />
          {this.props.text}
       </div>
    );
  }
}
export default Marker;