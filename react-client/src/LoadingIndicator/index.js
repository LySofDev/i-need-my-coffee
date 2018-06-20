import React from 'react';
import CenteredContainer from './CenteredContainer';
import LoadingIndicator from './LoadingIndicator';

export default props => (
  <CenteredContainer>
    <LoadingIndicator {...props} />
  </CenteredContainer>
)
