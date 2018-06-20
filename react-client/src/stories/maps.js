import React from 'react';
import GoogleMap from '../GoogleMap';
import { storiesOf } from '@storybook/react';

export default function() {
  storiesOf("Maps", module)
    .add("Google Maps", () => (
      <GoogleMap
        lat={-34.397}
        lng={150.644}
       />
    ))
    .add("With fixed size", () => (
      <GoogleMap
      lat={-34.397}
      lng={150.644}
      height="200px"
      width="200px"
      />
    ));
}
