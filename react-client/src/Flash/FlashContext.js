import React from 'react';

const FlashContext = React.createContext();

export class FlashProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
  }

  addMessage = (type, message) => {
    this.setState({
      messages: [
        ...this.state.messages,
        { type, message }
      ]
    });
  }

  hasMessage = () => {
    return this.state.messages.length > 0;
  }

  getMessage = () => {
    if (this.hasMessage()) {
      return this.state.messages[0];
    }
  }

  dismissMessage = () => {
    if (this.hasMessage()) {
      this.setState({
        messages: [...this.state.messages.splice(1)]
      })
    }
  }

  info = message => {
    this.addMessage('info', message)
  }

  warn = message => {
    this.addMessage('warn', message)
  }

  mapContext = () => ({
    info: this.info,
    warn: this.warn,
    hasMessage: this.hasMessage,
    getMessage: this.getMessage,
    dismissMessage: this.dismissMessage
  })

  render() {
    return (
      <FlashContext.Provider value={this.mapContext()}>
        {this.props.children}
      </FlashContext.Provider>
    )
  }
}

export function FlashConsumer(Component) {
  return props => (
    <FlashContext.Consumer>
      { flash => <Component {...props} flash={flash} /> }
    </FlashContext.Consumer>
  )
}
