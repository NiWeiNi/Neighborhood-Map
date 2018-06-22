import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import {markerStyle} from './markerStyle.js';

class Marker extends Component {

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div style={markerStyle}>
          {this.props.text}
       </div>
    );
  }
}
export default Marker;