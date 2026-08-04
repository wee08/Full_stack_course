const fs = require("fs/promises");
const path = require("path");
const moment = require("moment");

const logError = async (res, error) => {
  try {
    const timestamp = moment().format("YYYY-MM-DD HH:mm:ss");
    const filePath = path.join(__dirname, "../../logs");

    await fs.mkdir(filePath, { recursive: true });
    const logMessage = `[${timestamp}] ${error.message}\n`;
    await fs.appendFile(filePath, logMessage);
  } catch (error) {
    console.log(error.message);
  }

  res.status(500).send({
    message: "internal server error",
    isSuccess: false,
  });
};

module.exports = logError;
