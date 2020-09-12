import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '33vw',
  height: "33vh"
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 39.952208,
            lng: -75.192256
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAEq-OyHRzCJ1pvQKV9Qwq0INafDci8G3A"
})(MapContainer);