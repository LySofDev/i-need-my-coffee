import React from 'react';

const GooglePlacesContext = React.createContext();

export class GooglePlacesProvider extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  mapContext = () => ({

  })

  render() {
    return (
      <GooglePlacesContext.Provider value={this.mapContext()}>
        {this.props.children}
      </GooglePlacesContext.Provider>
    )
  }
}

export function GooglePlacesConsumer(Component) {
  return function GooglePlacesConsumerComponent(props) {
    return (
      <GooglePlacesContext.Consumer>
        { places => <Component {...props} places={places} /> }
      </GooglePlacesContext.Consumer>
    )
  }
}
