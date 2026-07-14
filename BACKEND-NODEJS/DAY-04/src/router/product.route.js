const getAllProduct = require("../controller/getAllProduct.controller");
const getProductById = require("../controller/getProductById.controller");
const deleteProduct = require("../controller/deleteProduct.controller");
const updateProduct = require("../controller/updateProduct.controller");
const createProduct = require("../controller/createProduct.controller");

module.exports = [
  { method: "get", path: "/v1/api/product/list", handler: getAllProduct },
  { method: "get", path: "/v1/api/product/get", handler: getProductById },
  { method: "post", path: "/v1/api/product/create", handler: createProduct },
  { method: "put", path: "/v1/api/product/update", handler: updateProduct },
  { method: "delete", path: "/v1/api/product/delete", handler: deleteProduct },
];
