import React from 'react';
import { compose } from 'recompose';
import { withScriptjs, withGoogleMap } from "react-google-maps";
import Map from './Map';
import AdjustableDimensions from './AdjustableDimensions';
import GoogleMapProperties from './GoogleMapProperties';

export default compose(
  AdjustableDimensions,
  GoogleMapProperties,
  withScriptjs,
  withGoogleMap
)(Map);
