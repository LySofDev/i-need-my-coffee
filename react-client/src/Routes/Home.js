import React from 'react';
import GoogleMap from '../GoogleMap';
import UserLocation from '../UserLocation';
import LoadingIndicator from '../LoadingIndicator';

export default props => (
  <div>
    <h1>I Need My Coffee</h1>
  </div>
);

// <UserLocation
//   whileLoading={<LoadingIndicator />}
//   withCoordinates={coords => (
//     <GoogleMap
//       lat={coords.latitude}
//       lng={coords.longitude}
//     />
//   )}
// />
