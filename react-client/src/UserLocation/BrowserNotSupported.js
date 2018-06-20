import React from 'react';
import { branch, renderComponent } from 'recompose';

export default branch(
  props => !props.isGeolocationAvailable,
  renderComponent(<div>Geolocation not available</div>)
);
