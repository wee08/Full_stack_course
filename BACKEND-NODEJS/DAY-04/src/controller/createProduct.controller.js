const productList = require("../data/product");

const createProduct = (req, res) => {
  const products =
    Array.isArray(req.query.product) ? req.query.product : [req.query.product];
  const prices =
    Array.isArray(req.query.price) ? req.query.price : [req.query.price];
  const colors =
    Array.isArray(req.query.color) ? req.query.color : [req.query.color];

  const newProduct = products.map((name, i) => ({
    product: name,
    id: productList.length + i + 1,
    price: Number(prices[i]),
    color: colors[i],
  }));

  productList.push(...newProduct);
  res.send({
    product: productList,
  });
};
module.exports = createProduct;
