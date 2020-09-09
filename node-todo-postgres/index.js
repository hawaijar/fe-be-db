const express = require("express");
const cors = require('cors');
const app = express();
const PORT = process.env.BE_PORT || 5000;

app.get("/", cors(), function (req, res) {
  res.json([
    {
      id: 1,
      name: 'House cleanup'
    },
    {
      id: 2,
      name: 'Exercise for 30mins'
    },
    {
      id: 3,
      name: 'Breakfast'
    },
    {
      id: 4,
      name: 'Project'
    }
  ])
});

const server = app.listen(PORT, function () {
  console.log(`Server listening in PORT: ${PORT}`);
});
