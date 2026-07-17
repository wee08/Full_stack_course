const userData = require("../data/user_data");
const signup = (req, res) => {
  const { email, password, confirmPassword, phone } = req.body;
  const isUserExisted = userData.find((user) => user.email === email);
  if (isUserExisted) {
    res.send({
      message: "user already exist",
    });
    return;
  }
  if (password !== confirmPassword) {
    res.send({
      message: "password doesn't match!",
    });
    return;
  }
  const newUser = {
    email,
    password,
    phone,
  };
  userData.push(newUser);
  res.send({
    userData,
  });
};

module.exports = signup;
