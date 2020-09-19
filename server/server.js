const express = require("express");
const cors = require("cors");

Eta app = express() er pore:
app.use(cors());
const app = express();

const database = [
  {
    vehicle: "bus",
    location: [54.0, 12.1],
  },
  {
    vehile: "bus",
    location: [57.0, 15.1],
  },
  {
    vehile: "bus",
    location: [55.0, 9.2],
  },
  {
    vehile: "bus",
    location: [58.0, 13.7],
  },
];
app.get("/locs", (req, res) => {
  res.json(database);
});
app.listen(3001, () => console.log("listening on port 3001"));
