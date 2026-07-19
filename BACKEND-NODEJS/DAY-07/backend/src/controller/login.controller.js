const userData = require("../data/user_data");
const signup = require("./signup.controller");
const login = (req, res) => {
  const { email, password } = req.body;

  const index = userData.findIndex((i) => i.email === email);

  if (index == -1) {
    res.send({ message: "do you want to sign up?" });
    return;
  }
  const userEmail = userData[index].email;
  const userPassword = userData[index].password;
  const userExists = userData[index] === email;

  if (userPassword !== password) {
    res.send({
      message: "incorrect password!",
    });
    return;
  }

  const userInfo = userData[index];

  if (userEmail === email && userPassword === password) {
    res.send({
      userInfo,
    });
  }
};

module.exports = login;
