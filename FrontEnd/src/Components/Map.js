import React, { useState, useEffect } from "react";
import "./Map.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

export default function Mapp() {
  const [pos, setPosition] = useState([]);

  const zoom = 15;
  useEffect(() => {
    /*
     grabbing the data, converting to json
    data is stored in position variable
    */
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((pos) => {
        console.log(pos);
        setPosition(pos);
      })
      .catch((err) => console.log(err));
    //getting the position of the current user.
    navigator.geolocation.getCurrentPosition(function (position) {
      setPosition((posi) => [
        ...posi,
        [position.coords.latitude, position.coords.longitude],
      ]); // sent the coordinates to the usePosition Function
    });
  }, []);
  return (
    <Map center={[22.5, 88.407]} zoom={zoom} className="map">
      <TileLayer
        attribution={
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        }
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXl1c2htYXp1bWRhciIsImEiOiJja2YxMWRvdDQwemZ6MnlvY2UzcDV3N3NvIn0.4J_e5xYRycYWAthgUJPKqQ"
        id="mapbox/streets-v11"
        token="pk.eyJ1IjoiYXl1c2htYXp1bWRhciIsImEiOiJja2YxMWRvdDQwemZ6MnlvY2UzcDV3N3NvIn0.4J_e5xYRycYWAthgUJPKqQ"
      />
      {pos.map((pointer, index) => (
        <Marker key={index} position={pointer.location}>
          <Popup>{pointer.vehicle}</Popup>
        </Marker>
      ))}
    </Map>
  );
}
