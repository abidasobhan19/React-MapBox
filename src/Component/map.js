import React, { useState } from "react";
import MapGL, { GeolocateControl, Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const geolocateStyle = {
  float: "left",
  margin: "50px",
  padding: "10px",
};

const Map = () => {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 900,
    latitude: 23.685,
    longitude: 90.3563,
    zoom: 8,
  });

  const _onViewportChange = (viewport) =>
    setViewPort({ ...viewport, transitionDuration: 3000 });

  return (
    <div style={{ margin: "0 auto" }}>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1IjoiYWJpZDIwNDkiLCJhIjoiY2tmNzFseWRpMGF5ZTJ4bDdrczBoZnUycCJ9.LGV2z4Ifqc2V3LXR70tXUg"
        }
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          showUserLocation={true}
          auto={true}
        />
        {/* <Marker
          latitude={23.7956}
          longitude={90.3537}
          offsetLeft={-20}
          offsetTop={-10}
          captureClick={true}
          onDragStart={true}
        ></Marker> */}
      </MapGL>
    </div>
  );
};

export default Map;
