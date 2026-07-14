const productRoute = require("./src/router/product.route");

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Homepage");
});

productRoute.forEach((route) => {
  app[route.method](route.path, route.handler);
});

app.listen(PORT, () => {
  console.log(`local host: http://localhost:${PORT}`);
});
