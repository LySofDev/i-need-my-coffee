import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_API_URL } from '../constants';

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
    googleMapURL: `${GOOGLE_MAPS_API_URL}&key=${GOOGLE_MAPS_API_KEY}`,
    loadingElement: (<div style={{ height: `100%` }} />),
    containerElement: (<div style={dimensions} />),
    mapElement: (<div style={{ height: `100%` }} />)
  })),
  withScriptjs,
  withGoogleMap
);

export default Enhance(Map);
