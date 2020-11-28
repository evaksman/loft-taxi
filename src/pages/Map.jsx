/* eslint-disable */
import React, { useEffect, useRef } from 'react';
import Header  from '../components/Header';
import mapboxgl from 'mapbox-gl';

const Map = ({ changePage }) => {
  const mapContainer = useRef();
  let map = null;

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiZXZha3NtYW4iLCJhIjoiY2tpMjJubWZsMXN6MTJ4bXB6dGp1YTZqNCJ9.Jb4UeEkk3Hwq4HpKYRXWxQ";

    map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
      center: [30.3056504, 59.9429126], // starting position [lng, lat]
      zoom: 12 // starting zoom
    });

    return () => {
      map.remove();
    };

  }, []);

  return (
    <div className="map-wrapper">
      <h1>Карта</h1>
      <Header change={changePage} />
      <div data-testid="map" className="map" ref={mapContainer} />
    </div>
  );
};

export default Map;