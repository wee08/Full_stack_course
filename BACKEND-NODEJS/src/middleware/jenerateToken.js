// generateToken.js
const jwt = require("jsonwebtoken");
const TOKEN_RESORUCE_SECRET = "jdfkhsarh895y2398473298jkhsdj92834hfsodfhsdf"; // must match auth.js

const token = jwt.sign(
  { empCode: "EMP001", empName: "Test User" }, // whatever payload you want
  TOKEN_RESORUCE_SECRET,
  { expiresIn: "1h" },
);

console.log(token);
