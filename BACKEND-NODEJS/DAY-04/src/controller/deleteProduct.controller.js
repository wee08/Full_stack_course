const productList = require("../data/product");

const deletProduct = (req, res) => {
  const id = req.query.id;

  productList.map((item, idx) => {
    if (id == item.id) {
      productList.splice(idx, 1);
    }
  });

  res.send({ product: productList });
};

module.exports = deletProduct;
