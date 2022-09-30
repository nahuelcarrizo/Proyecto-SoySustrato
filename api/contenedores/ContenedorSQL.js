const knex = require("knex");
//prettier-ignore
class ContenedorSQL {
  constructor(config, tabla) {
    this.knex = knex(config);
    this.tabla = tabla;
  }

  async createTable() {
    try {
      await this.knex.schema
        .createTable(this.tabla, (tabla) => {
          tabla.string("name");
          tabla.string("description");
          tabla.string("price");
          tabla.string("stock");
          tabla.string("img");
          tabla.increments("id");
        })
        .then(() => console.log("tabla creada"));
    } catch (error) {
      console.log(error);
    } finally {
      () => this.knex.destroy();
    }
  }
  async getAll(criterio = {}) {
    try {
      const prods = await this.knex.select("*").from(this.tabla);
      return prods;
    } catch (error) {
      console.log(error);
    } finally {
      () => this.knex.destroy();
    }
  }

  async save(obj) {
    try {
      const exists = await this.knex.schema
        .hasTable(this.tabla)
        .then((exists) => exists);
      if (!exists) {
        await this.createTable();
      }
      await this.knex(this.tabla)
        .insert(obj)
        .then(() => console.log("obj guardado"));
    } catch (error) {
      console.log("error " + error);
    } finally {
      () => {
        this.knex.destroy();
      };
    }
  }

  async deletById(req, res) {
    try {
      const id = req.body.id;
      const data = await this.knex
        .from(this.tabla)
        .where("id", "=", id)
        .del().then(
      this.getAll())
      console.log(this.tabla)
    } catch (error) {
      console.log(error);
    } finally {
      () => {
        this.knex.destroy();
      };
    }
  }
}

module.exports = ContenedorSQL;
