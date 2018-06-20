import React from 'react';
import { GoogleMap } from "react-google-maps";

export default props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  />
);
