import React from 'react';
import GoogleMap from '../GoogleMap';

export default props => (
  <div>
    <h1>I Need My Coffee</h1>
    <GoogleMap
      lat={-50.28288}
      lng={-75.20768}
    />
  </div>
);
