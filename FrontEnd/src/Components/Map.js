import React, { useState, useEffect } from "react";
import "./Map.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

export default function Mapp() {
  const [position, setPosition] = useState([51.0, 12]);
  const database = [
    {
      vehicle: "bus",
      location: [22.5, 88.407],
    },
    {
      vehicle: "bus",
      location: [22.495, 88.405],
    },
    {
      vehicle: "bus",
      location: [22.49, 88.403],
    },
    {
      vehicle: "bus",
      location: [22.5, 88.4],
    },
  ];
  const zoom = 15;
  useEffect(() => {
    fetch("http://localhost:3001/locs")
      .then((res) => res.json())
      .then((pos) => console.log(pos))
      .catch((err) => console.log(err));
    navigator.geolocation.getCurrentPosition(function (position) {
      setPosition([
        position.coords.latitude,
        position.coords.longitude,
      ]); /* sent the coordinates to the usePosition Function*/
    });
  }, []);
  return (
    <Map center={position} zoom={zoom} className="map">
      <TileLayer
        attribution={
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        }
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXl1c2htYXp1bWRhciIsImEiOiJja2YxMWRvdDQwemZ6MnlvY2UzcDV3N3NvIn0.4J_e5xYRycYWAthgUJPKqQ"
        id="mapbox/streets-v11"
        token="pk.eyJ1IjoiYXl1c2htYXp1bWRhciIsImEiOiJja2YxMWRvdDQwemZ6MnlvY2UzcDV3N3NvIn0.4J_e5xYRycYWAthgUJPKqQ"
      />
      {database.map((pointer, index) => (
        <Marker position={pointer.location}>
          <Popup>{pointer.vehicle}</Popup>
        </Marker>
      ))}
    </Map>
  );
}
