import React from 'react';
import { branch, renderComponent } from 'recompose';

export default branch(
  props => props.positionError,
  renderComponent(<div>Geolocation Error</div>)
);
