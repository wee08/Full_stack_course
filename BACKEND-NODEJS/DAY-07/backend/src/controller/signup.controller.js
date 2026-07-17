const userData = require("../data/user_data");
const signup = (req, res) => {
  res.send({
    userData,
  });
};

module.exports = signup;
