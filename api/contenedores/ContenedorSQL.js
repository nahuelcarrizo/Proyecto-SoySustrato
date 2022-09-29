import knex from "knex";

class ContenedorSQL {
  constructor(config, tabla) {
    this.knex = knex(config);
    this.tabla = tabla;
  }
  async getAll(criterio = {}) {
    try {
      const elems = await this.knex
        .select("*")
        .from(this.tabla)
        .where("id", id);
      return elems;
    } catch (error) {
      console.log(error);
    }
  }
}
