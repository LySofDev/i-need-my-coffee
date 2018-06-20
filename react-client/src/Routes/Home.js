import React from 'react';
import GoogleMap from '../GoogleMap';
import UserLocation from '../UserLocation';

export default props => (
  <div>
    <h1>I Need My Coffee</h1>
    <UserLocation
      withCoordinates={coords => (
        <GoogleMap
          lat={coords.latitude}
          lng={coords.longitude}
        />
      )}
    />
  </div>
);
