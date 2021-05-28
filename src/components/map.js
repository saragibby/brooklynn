import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiY29tcHJlbmR1cyIsImEiOiJja2Q1d2dwcmcwMGI1MnNtZ21mbjQwNjQzIn0.4pzDiBSvBwyLUhE8_hH31w";

const mapContainerStyle = {
  width: "100%",
  height: "250px",
};

const Map = () => {
  const mapContainerRef = useRef(null);

  const [map, setMap] = useState(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-82.9357, 42.6874],
      zoom: 11,
    });
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    var marker = new mapboxgl.Marker().setLngLat([-82.9357, 42.6874]).addTo(map);

    setMap(map);

    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} style={mapContainerStyle} />;
};

export default Map;
