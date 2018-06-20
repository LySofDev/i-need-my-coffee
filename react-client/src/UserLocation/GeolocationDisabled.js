import React from 'react';
import { branch, renderComponent } from 'recompose';

export default branch(
  props => !props.isGeolocationEnabled,
  renderComponent(<div>Geolocation is disabled</div>)
);
