const productRoute = require("./src/router/product.route");

const cors = require("cors");
const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Homepage");
});

productRoute.forEach((route) => {
  app[route.method](route.path, route.handler);
});

app.listen(PORT, () => {
  console.log(`local host: http://localhost:${PORT}`);
});
