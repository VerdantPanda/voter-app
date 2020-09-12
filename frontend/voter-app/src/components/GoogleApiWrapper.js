import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
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
            lat: 15,
            lng: 31
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAEq-OyHRzCJ1pvQKV9Qwq0INafDci8G3A"
})(MapContainer);