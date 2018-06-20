import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { GOOGLE_MAPS_API_KEY } from '../constants';

const Map = props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  />
);

const Enhance = compose(
  // Adjustable size
  withProps(({ height, width }) => ({
    dimensions: {
      height: height ? height : "400px",
      width: width ? width : "100%"
    }
  })),
  // Necessary to render the map
  withProps(({ dimensions }) => ({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_MAPS_API_KEY}`,
    loadingElement: (<div style={{ height: `100%` }} />),
    containerElement: (<div style={dimensions} />),
    mapElement: (<div style={{ height: `100%` }} />)
  })),
  withScriptjs,
  withGoogleMap
);

export default Enhance(Map);
