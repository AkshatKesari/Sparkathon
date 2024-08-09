import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define map container style
const containerStyle = {
  width: '100%',
  height: '400px'
};

// Define initial center of the map
const center = {
  lat: 40.7128,
  lng: -74.0060
};

const MapComponent = ({ locations }) => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {locations.map((location, index) => (
          <Marker key={index} position={{ lat: location.lat, lng: location.lng }} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
