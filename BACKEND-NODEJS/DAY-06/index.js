const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", "home");
app.request(`http://localhost:${PORT}`);
