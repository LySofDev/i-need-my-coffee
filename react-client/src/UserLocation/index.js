import { compose } from 'recompose';
import { geolocated } from 'react-geolocated';
import BrowserNotSupported from './BrowserNotSupported';
import GeolocationDisabled from './GeolocationDisabled';
import ErrorGeolocating from './ErrorGeolocating';
import UserLocation from './UserLocation';

export default compose(
  geolocated(),
  BrowserNotSupported,
  GeolocationDisabled,
  ErrorGeolocating
)(UserLocation);
