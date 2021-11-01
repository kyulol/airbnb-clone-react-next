import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import { getCenter } from 'geolib';
import { useState } from 'react';
 
function Map({searchResults}) {

  const [selectedLocation, setSelectedLocation] = useState()

  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat,
  }))
  
  const center = getCenter(coordinates);
 
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,

  });
  
  return (
    <ReactMapGL
    {...viewport}
    mapStyle='mapbox://styles/dje-dje/ckvezbddp2c7714m66zco8aa6'
    mapboxApiAccessToken={process.env.mapbox_key}
    onViewportChange={(viewport) => setViewport(viewport)}
  >
    {searchResults.map(result => (
      <div key={result.long}>
        <Marker
          longitude={result.long}
          latitude={result.lat}
          offsetLeft={0}
          offsetTop={0}
        >
          <p 
          role="img"
          aria-label="push pin"
          onClick={() => setSelectedLocation(result)}
          className="cursor-pointer text-2xl">📍</p>
        </Marker>

        {selectedLocation.long === result.long ? (
            <Popup
                onClose={() => setSelectedLocation({})}
                closeOnClick={true}
                latitude={result.lat}
                longitude={result.long}
            >
                <div>
                    {result.title}
                </div>
            </Popup>
        ) : (
            false
        )}

      </div>
    ))}
  </ReactMapGL>
  );
}

export default Map
