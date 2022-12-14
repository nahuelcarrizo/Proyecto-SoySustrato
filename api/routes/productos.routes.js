const express = require("express");
const {
  getProducts,
  updateItem,
  newItem,
  deleteItem,
} = require("../controllers/productos.controller.js");
const { Router } = express;

const routerProductos = Router();

routerProductos.get("/", getProducts);
routerProductos.put("/", updateItem);
routerProductos.post("/", newItem);
routerProductos.delete("/:id", deleteItem);

/* console.log("api called!");
res.json(users); */

module.exports = routerProductos;

/* const router = express.Router(); */

/* res.sendFile(path.resolve(__dirname, "../client/public", "index.html"));  */
