const products = require("../data/product");

const createProduct = (req, res) => {
  const names =
    Array.isArray(req.query.name) ? req.query.name : [req.query.name];
  const prices =
    Array.isArray(req.query.price) ? req.query.price : [req.query.price];
  const colors =
    Array.isArray(req.query.color) ? req.query.color : [req.query.color];

  const newProduct = names.map((name, i) => ({
    id: products.length + i + 1,
    name,
    price: Number(prices[i]),
    color: colors[i],
  }));

  products.push(...newProduct);
  res.send({
    product: products,
  });
};
module.exports = createProduct;
