const productRoute = require("./src/router/product.route");
const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "Frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "index.html"));
});

productRoute.forEach((route) => {
  app[route.method](route.path, route.handler);
});

app.listen(PORT, () => {
  console.log(`local host: http://localhost:${PORT}`);
});
