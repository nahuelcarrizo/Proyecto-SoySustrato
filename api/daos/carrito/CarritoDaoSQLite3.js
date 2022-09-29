const ContenedorSQL = require("../../contenedores/ContenedorSQL.js");

class CarritoDaoSQL {
  constructor(configCarrito, configProds) {
    this.carrito = new ContenedorSQL(configCarrito, "carrito");
    this.prodsEnCarrito = new ContenedorSQL(configProds, "prodsEnCarrito");
  }
  async save(carrito = {}) {
    try {
      const res = await this.carrito.save(carrito);
      res.productos = [];
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    await this.carrito.getAll();
    const res = {
      productos: [],
    };
  }
}
module.exports = CarritoDaoArchivos;
