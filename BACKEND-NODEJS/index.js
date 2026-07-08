const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/v1/user", (req, res) => {
  res.send("Employee");
});

app.get("/api/v1/user/create", (req, res) => {
  res.send("create user");
});

app.get("/api/user/delete", (res, req) => {
  res.send("delete user");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
