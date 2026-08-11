const {
  getAllEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  sendMyEmail,
  sendOTP,
} = require("../controller/sys.controller");
const { sendMessageToTelegram } = require("../helper/telegramConfig");
const { validate_token } = require("../middleware/auth");
const sysRoute = (app) => {
  app.get("/v1/api/employee/getEmp", validate_token(), getAllEmployee);
  app.post("/v1/api/employee/createEmp", createEmployee);
  app.put("/v1/api/employee/updateEmp/:empCode", updateEmployee);
  app.delete("/v1/api/employee/deleteEmp", deleteEmployee);

  // telegram send message
  app.post("/v1/api/employee/sendmessage", sendMessageToTelegram);
  // gmail
  app.post("/v1/api/employee/sendmessage/email", sendMyEmail);

  // send otp to email
  app.post("/v1/api/user/send-otp", sendOTP);
};

module.exports = sysRoute;
