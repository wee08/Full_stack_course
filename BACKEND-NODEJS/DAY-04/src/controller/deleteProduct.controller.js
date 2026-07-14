const products = require("../data/product");

const deletProduct = (req, res) => {
  const id = req.query.id;

  products.map((item, idx) => {
    if (id == item.id) {
      products.splice(idx, 1);
    }
  });

  res.send({ product: products });
};

module.exports = deletProduct;
