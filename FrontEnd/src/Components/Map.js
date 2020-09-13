import React from "react";
import "./Map.css";

export default function Map() {
  var mymap = L.map("mapid").setView([51.505, -0.09], 13);
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={pk.eyJ1IjoiYXl1c2htYXp1bWRhciIsImEiOiJja2YxMWRvdDQwemZ6MnlvY2UzcDV3N3NvIn0.4J_e5xYRycYWAthgUJPKqQ}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoiYXl1c2htYXp1bWRhciIsImEiOiJja2YxMWRvdDQwemZ6MnlvY2UzcDV3N3NvIn0.4J_e5xYRycYWAthgUJPKqQ",
    }
  ).addTo(mymap);
  return <div id="mapid"></div>;
}
