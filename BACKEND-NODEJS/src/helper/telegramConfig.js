const { TelegramBot } = require("node-telegram-bot-api");

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const sendMessageToTelegram = async (req, res) => {
  try {
    const message = "whats up my love!";
    const chatID = process.env.GROUP_TELEGRAM_ID;
    await bot.sendMessage(chatID, message);
    res.send({
      message: "message sent to telegram bot successfuly",
    });
  } catch (error) {
    logError(error);
  }
};

module.exports = { sendMessageToTelegram };
