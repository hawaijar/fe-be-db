const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const PORT = process.env.BE_PORT || 5000;

let db = [
  {
    id: 1,
    name: "House cleanup",
  },
  {
    id: 2,
    name: "Exercise for 30mins",
  },
  {
    id: 3,
    name: "Breakfast",
  },
  {
    id: 4,
    name: "Project",
  },
];

app.get("/", cors(), function (req, res) {
  res.json(db);
});
app.post("/", cors(), function (req, res) {
  const { payload } = req.body;
  console.log('payload:', payload)
  db.push({
    id: db.length + 1,
    name: payload,
  });
  res.json(payload);
});
app.put("/:id", cors(), function (req, res) {
  const { payload } = req.body;
  const { id } = req.params;
  const updatedDB = [...db];
  for (let todo of updatedDB) {
    if (todo.id === +id) {
      todo.name = payload;
      break;
    }
  }
  db = [...updatedDB];
  res.json(payload);
});

/**--- Delete ---- (TODO) ------ **/
app.delete("/:id", cors(), function (req, res) {});

const server = app.listen(PORT, function () {
  console.log(`Server listening in PORT: ${PORT}`);
});
