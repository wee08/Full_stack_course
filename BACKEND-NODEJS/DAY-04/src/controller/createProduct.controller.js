const products = require("../data/product");

const createProduct = (req, res) => {
  const products =
    Array.isArray(req.query.product) ? req.query.product : [req.query.product];
  const prices =
    Array.isArray(req.query.price) ? req.query.price : [req.query.price];
  const colors =
    Array.isArray(req.query.color) ? req.query.color : [req.query.color];

  const newProduct = products.map((name, i) => ({
    product: name,
    id: products.length + i + 1,
    price: Number(prices[i]),
    color: colors[i],
  }));

  products.push(...newProduct);
  res.send({
    product: products,
  });
};
module.exports = createProduct;
