import React from 'react';
import { compose } from 'recompose';
import { geolocated } from 'react-geolocated';
import { BrowserNotSupported, GeolocationDisabled, ErrorGeolocating } from './error-branches';

const GeolocationAPI = compose(
  geolocated(),
  BrowserNotSupported,
  GeolocationDisabled,
  ErrorGeolocating
);

const UserLocation = props => {
  if (!props.coords) return props.whileLoading;
  return props.withCoordinates({
    latitude: props.coords.latitude,
    longitude: props.coords.longitude
  });
}

export default GeolocationAPI(UserLocation);
