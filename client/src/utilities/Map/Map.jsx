import React, { useEffect, useRef } from "react";
import leaflet from "leaflet";
import "./Map.scss";
import { Link } from "react-router-dom";
const Map = () => {
   const mapRef = useRef();
   const markerRef = useRef();
   useEffect(() => {
      mapRef.current = leaflet.map("map", {
         center: [10.96511, 79.38388],
         zoom: 13,
         scrollWheelZoom: false, // Disable zoom on scroll
         dragging: false, // Disable map dragging
         doubleClickZoom: false, // Disable zoom on double-click
         zoomControl: false, // Hide zoom controls
      });
      leaflet
         .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,

            attribution:
               '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
         })
         .addTo(mapRef.current);
      markerRef.current = leaflet
         .marker([10.96511, 79.38388])
         .addTo(mapRef.current);
   }, []);
   return (
      <Link to="https://maps.app.goo.gl/5yBnT1Vi1henXZML8" target="_blank">
         <div id="map"></div>
      </Link>
   );
};

export default Map;
