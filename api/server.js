require("dotenv").config();

const express = require("express");

const port = process.env.PORT || 3080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* app.use("/static", express.static(__dirname + "/public")); */

const routerProductos = require("./routes/productos.routes.js");
const routerCarrito = require("./routes/carrito.routes.js");

const users = [{}];

app.use("/api/carrito", routerCarrito);
app.use("/api/productos", routerProductos);

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
