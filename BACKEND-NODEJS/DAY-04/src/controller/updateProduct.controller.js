const productList = require("../data/product");

const updateProduct = (req, res) => {
  const id = req.query.id;
  const products =
    Array.isArray(req.query.product) ? req.query.product : [req.query.product];
  const prices =
    Array.isArray(req.query.price) ? req.query.price : [req.query.price];
  const colors =
    Array.isArray(req.query.color) ? req.query.color : [req.query.color];

  const targetProduct = productList.map((item, idx) => {
    let replace_idx;
    const newProduct = {
      product: products[idx],
      id: Number(id[idx]),
      price: Number(prices[idx]),
      color: colors[idx],
    };
    if (item.id == id) {
      productList.splice(idx, 0);
      replace_idx = idx;
    }
    productList[replace_idx] = newProduct;
  });

  res.send({
    product: productList,
  });
};
module.exports = updateProduct;
