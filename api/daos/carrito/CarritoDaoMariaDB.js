const ContenedorSQL = require("../../contenedores/ContenedorSQL.js");
const config = require("../../config");

class CarritoDaoMariaDB extends ContenedorSQL {
  constructor() {
    super(config.mariadb, "cart");
  }
}

module.exports = CarritoDaoMariaDB;
