import React from 'react';

export default props => {
  if (!props.coords) return props.whileLoading;
  return props.withCoordinates({
    latitude: props.coords.latitude,
    longitude: props.coords.longitude
  });
}
