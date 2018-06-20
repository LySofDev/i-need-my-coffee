import React from 'react';
import { GooglePlacesProvider } from './GooglePlacesContext';
import { FlashProvider } from '../Flash';
export default props => (
  <GooglePlacesProvider>
    <FlashProvider>
      {props.children}
    </FlashProvider>
  </GooglePlacesProvider>
)
