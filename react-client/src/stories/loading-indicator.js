import React from 'react';
import LoadingIndicator from '../LoadingIndicator';
import { storiesOf } from '@storybook/react';

export default function() {
  storiesOf("Loading Indicator", module)
    .add("Default", () => (
      <LoadingIndicator />
    ))
    .add('Fixed size', () => (
      <LoadingIndicator
        height="50px"
        width="50px"
      />
    ))
    .add("Fixed color", () => (
      <LoadingIndicator color="green" />
    ))
}
