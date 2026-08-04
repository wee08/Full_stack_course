const jwt = require("jsonwebtoken");
const TOKEN_ACCESS_CLIENT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBDb2RlIjoiRU1QMDAxIiwiZW1wTmFtZSI6IlRlc3QgVXNlciIsImlhdCI6MTc4NTg1MjIxMSwiZXhwIjoxNzg1ODU1ODExfQ.GEHmEW4oYYYl1brLyf8W7uBhdfkXkYQwULY7W3JM5l0";
const TOKEN_RESORUCE_SECRET = "jdfkhsarh895y2398473298jkhsdj92834hfsodfhsdf"; // Get the secret key from environment variable

const validate_token = () => {
  return (req, res, next) => {
    var authorization = req.headers.authorization; // token from client
    var token_from_client = null;
    if (authorization != null && authorization != "") {
      token_from_client = authorization.split(" "); // authorization : "Bearer <token>"
      token_from_client = token_from_client[1]; // get only access_token
    }

    if (token_from_client == null) {
      res.status(401).send({
        message: "Unauthorized",
      });
    } else {
      jwt.verify(token_from_client, TOKEN_RESORUCE_SECRET, (error, result) => {
        if (error) {
          res.status(401).send({
            message: "Unauthorized",
            error: error,
          });
        } else {
          req.user = result;
          next();
        }
      });
    }
  };
};

module.exports = { validate_token };
