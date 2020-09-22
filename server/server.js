const express = require("express");
const path = require("Path");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

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
app.get("/", (req, res) => {
  res.json(database);
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
