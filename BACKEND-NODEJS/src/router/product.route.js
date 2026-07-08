const getProduct = require("../controller/product.controller");
function productRoute(app) {
  //define route
  app.get("/", (req, res) => {
    res.send("Home page");
  });
  app.get("/api/product/list", getProduct);
  app.get("/api/v1/user", (req, res) => {
    res.send("Employee");
  });
  app.get("/api/v1/user/create", (req, res) => {
    res.send("create user");
  });
  app.get("/api/user/delete", (req, res) => {
    res.send("delete user");
  });
}

module.exports = productRoute;
