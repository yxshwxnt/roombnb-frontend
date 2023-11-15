import React, { useEffect } from 'react';

const MapComponent = ({ latitude, longitude }) => {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: latitude, lng: longitude },
      zoom: 15, 
    });

    new window.google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
      title: 'Apartment Location',
    });
  }, [latitude, longitude]);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default MapComponent;
