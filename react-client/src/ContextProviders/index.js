import React from 'react';
import { GooglePlacesProvider } from './GooglePlacesContext';

export default props => (
  <GooglePlacesProvider>
    {props.children}
  </GooglePlacesProvider>
)
