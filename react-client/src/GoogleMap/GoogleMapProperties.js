import { withProps } from 'recompose';
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_API_URL } from '../constants';

export default withProps(({ dimensions }) => ({
  googleMapURL: `${GOOGLE_MAPS_API_URL}&key=${GOOGLE_MAPS_API_KEY}`,
  loadingElement: (<div style={{ height: `100%` }} />),
  containerElement: (<div style={dimensions} />),
  mapElement: (<div style={{ height: `100%` }} />)
}));
