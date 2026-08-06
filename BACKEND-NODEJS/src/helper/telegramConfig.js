const { TelegramBot } = require("node-telegram-bot-api");
const { missing } = require("../helper/validate");
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const sendMessageToTelegram = async (req, res) => {
  //     PERSONAL_TELEGRAM_ID = 8966307639
  // GROUP_TELEGRAM_ID = -1003953131347
  try {
    // const { message } = req.body;
    // missing(req, res, field);
    // const message = "whats up my love!";
    await bot.sendMessage("-5457207493", "hi");
    res.send({
      message: "message sent to telegram bot successfuly",
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { sendMessageToTelegram };
