import React from 'react';
import { branch, renderComponent } from 'recompose';

export const BrowserNotSupported = branch(
  props => !props.isGeolocationAvailable,
  renderComponent(<div>Geolocation not available</div>)
);

export const GeolocationDisabled = branch(
  props => !props.isGeolocationEnabled,
  renderComponent(<div>Geolocation is disabled</div>)
);

export const ErrorGeolocating = branch(
  props => props.positionError,
  renderComponent(<div>Geolocation Error</div>)
);
