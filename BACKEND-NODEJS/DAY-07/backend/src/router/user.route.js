const signup = require("../controller/signup.controller");

const userRoute = (app) => {
  app.get("/v1/api/user/signup", signup);
};
module.exports = userRoute;
