const Telegram = require('telegraf/telegram');
const telegram = new Telegram(process.env.BOT_TOKEN);

const sendMessage = (data, chatId = -1001309723366) => telegram.sendMessage(chatId, data);

module.exports = {
  sendMessage,
};
