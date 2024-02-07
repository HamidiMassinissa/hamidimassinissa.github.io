import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {  // lab position
      lat: 48.9548,
      lng: 2.3430
    },
    zoom: 15
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCCasTGLS-paFusfWxQADc_of54oBAVJAM' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={48.9548}
            lng={2.3430}
            text="Lab position"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
