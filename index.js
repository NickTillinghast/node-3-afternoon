const express = require("express");
const massive = require("massive");
require("dotenv").config();
const products_controller = require("./products_controller");
const app = express();
const { CONNECTION_STRING, SERVER_PORT } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.get("/api/products", products_controller.getAll);
app.get("/api/product/:id", products_controller.getOne);
app.put("/api/products/:id", products_controller.update);
app.post("/api/products", products_controller.create);
app.delete("/api/products/:id", products_controller.delete);

app.listen(SERVER_PORT, () =>
  console.log(`server listening on port ${SERVER_PORT}`)
);
