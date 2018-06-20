import React from 'react';
import Message from './Message';
import AppBar from './AppBar';

export default props => (
  <AppBar onClick={props.flash.dismissMessage}>
    <Message>{props.flash.getMessage()}</Message>
  </AppBar>
);
