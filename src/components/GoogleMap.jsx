import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMap() {
  const defaultProps = {
    center: {
      lat: 6.54739,
      lng: 3.39383,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD_tiTedPvS_BVrLr0nC5zIbMguzWN5npA' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={6.54739}
          lng={3.39383}
          text='Winners Baptist Church'
        />
      </GoogleMapReact>
    </div>
  );
}
