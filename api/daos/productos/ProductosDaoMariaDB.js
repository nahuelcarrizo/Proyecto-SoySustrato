const ContenedorSQL = require("../../contenedores/ContenedorSQL.js");
const config = require("../../config");

class ProductosDaoMariaDB extends ContenedorSQL {
  constructor() {
    super(config.mariadb, "products");
  }
}

module.exports = ProductosDaoMariaDB;
