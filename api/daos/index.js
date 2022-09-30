let productosDao = "";
let carritoDao;

async function trySwitch() {
  switch (process.env.PERS) {
    case "txt":
      const ProductosDaoArchivo = require("../daos/productos/ProductosDaoArchivo.js");
      const CarritoDaoArchivo = require("../daos/carrito/CarritoDaoArchivo.js");
      productosDao = new ProductosDaoArchivo();
      carritoDao = new CarritoDaoArchivo();
      break;
    case "mongodb":
      const ProductosDaoMongoDB = require("../daos/productos/ProductosDaoMongoDB.js");
      const CarritoDaoMongoDB = require("../daos/carrito/CarritoDaoMongoDB.js");
      productosDao = new ProductosDaoMongoDB();
      carritoDao = new CarritoDaoMongoDB();
      break;
    case "mariadb":
      const ProductosDaoMariaDB = require("../daos/productos/ProductosDaoMariaDB.js");
      const CarritoDaoMariaDB = require("../daos/carrito/CarritoDaoMariaDB.js");
      productosDao = new ProductosDaoMariaDB();
      carritoDao = new CarritoDaoMariaDB();
    default:
      break;
  }
}

trySwitch();

module.exports = { productosDao, carritoDao };
