const Telegram = require('telegraf/telegram');
const telegram = new Telegram(process.env.BOT_TOKEN);

const sendMessage = (data, chatId = -309509058) => telegram.sendMessage(chatId, data);

module.exports = {
  sendMessage,
};
