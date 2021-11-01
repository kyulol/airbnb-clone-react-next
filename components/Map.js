import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useState } from "react";
import { getCenter } from 'geolib';

function Map({ searchResults }) {

// for the pop-up marker, passing the object
const [selectedLocation, setSelectedLocation] = useState({})

// Transform the search result into latitude and longitude for geolib
// { latitude: 52.516172, longitude: 13.124567}
const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat
}))

// Center of the searched results using geoLib
const center = getCenter(coordinates)

const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
})

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/dje-dje/ckve2n2kq374r16s5igvdry54"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={0}
                        offsetTop={0}
                    >
                        <p onClick={() => setSelectedLocation(result)} className="cursor-pointer text-2xl">
                          📍
                        </p>
                    </Marker>

                    {/* Popup to be shown once we click on the marker */}
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
    )
}

export default Map
