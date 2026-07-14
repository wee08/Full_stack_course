const products = require("../data/product");

const updateProduct = (req, res) => {
  const id = req.query.id;
  const products =
    Array.isArray(req.query.product) ? req.query.product : [req.query.product];
  const prices =
    Array.isArray(req.query.price) ? req.query.price : [req.query.price];
  const colors =
    Array.isArray(req.query.color) ? req.query.color : [req.query.color];

  const targetProduct = products.map((item, idx) => {
    let replace_idx;
    const newProduct = {
      product: products[idx],
      id: Number(id[idx]),
      price: Number(prices[idx]),
      color: colors[idx],
    };
    if (item.id == id) {
      replace_idx = idx;
    }
    products[replace_idx] = newProduct;
  });

  res.send({
    product: products,
  });
};
module.exports = updateProduct;
