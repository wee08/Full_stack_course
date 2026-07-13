const createProductRoute = require("./src/router/createProduct.route");
const getAllProductRoute = require("./src/router/getAllProduct.route");
const getProductByIdRoute = require("./src/router/getProductById.route");

const express = require("express");
const updateProductRoute = require("./src/router/updateProduct.route");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Homepage");
});

getAllProductRoute(app);
getProductByIdRoute(app);
createProductRoute(app);
updateProductRoute(app);

app.listen(PORT, () => {
  console.log(`local host: http://localhost:${PORT}`);
});
