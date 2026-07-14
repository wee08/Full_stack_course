const products = require("../data/product");

const deletProduct = (req, res) => {
  const { id } = req.body;

  products.map((item, idx) => {
    if (id == item.id) {
      products.splice(idx, 1);
      res.send({ product: products });
    } else {
      res.send({
        message: "product not found!",
      });
    }
  });
};

module.exports = deletProduct;
