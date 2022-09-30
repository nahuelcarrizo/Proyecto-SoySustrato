const { response } = require("express");

const { productosDao } = require("../daos/index.js");

const getProducts = async (req, res = response) => {
  console.log("controller!");

  try {
    const products = await productosDao.getAll();
    return res.json(products);
  } catch (error) {
    console.log(error);
  }
};
const updateItem = async (item) => {
  try {
    await productosDao.updateById(item);
  } catch (error) {
    console.log(error);
  }
};

const newItem = async (req, res) => {
  try {
    const item = req.body;
    console.log(item);
    productosDao.save(item);
  } catch (error) {
    console.log(error);
  }
};

const deleteItem = async (req, res = Response) => {
  try {
    productosDao.deletById(req, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getProducts, updateItem, newItem, deleteItem };
