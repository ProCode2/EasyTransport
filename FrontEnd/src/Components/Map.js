import React,{ useState, useEffect } from "react";
import "./Map.css";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Mapp() {
  const [position, setPosition] = useState([51.0, 12]);
  const zoom = 13;
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setPosition([position.coords.latitude, position.coords.longitude]);
    });
  }, []);
  return (
    <Map center={position} zoom={zoom} className="map">
        <TileLayer
          attribution= {"&amp;copy <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors"}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <strong>You</strong> are here!
          </Popup>
        </Marker>
    </Map>
  );
}
