//for creating a server
const express = require("express");
//cross site origin requests
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

const app = express();

//use cors middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

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
  //send data to frontend (in this case json data)
  res.json(database);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);

  app.post("/Feedback", (req, res) => {
    console.log(req.body);
    res.json("Got It");
  });
});
