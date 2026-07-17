const signup = require("../controller/signup.controller");

const userRoute = (app) => {
  app.post("/v1/api/user/signup", signup);
};
module.exports = userRoute;
