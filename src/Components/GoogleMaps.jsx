// React Libraries
import React from 'react';
// GoogleMapsReact Component
import GoogleMapReact from 'google-map-react';

const MapMarker = () => (
  <i style={{ fontSize: '32pt' }} className="fas fa-map-marker-alt"></i>
);

function GoogleMaps({ latitude, longitude }) {
  const mapSettings = { center: { lat: latitude, lng: longitude }, zoom: 12 };

  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
        defaultCenter={mapSettings.center}
        defaultZoom={mapSettings.zoom}>
        <MapMarker lat={latitude} lng={longitude} />
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMaps;
