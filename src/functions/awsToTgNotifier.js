const { fetchAndParseRss } = require('../processors/rssProcessors');
const { telegraphProcessor } = require('../processors/telegraphProcessors');
const { sendMessage } = require('../processors/telegramProcessors');
const awsRssToTgMapper = require('../mappers/awsRssToTgMapper')

const awsToTgNotifier = async(event, context, callback) => {
  const rssData = await fetchAndParseRss('http://status.aws.amazon.com/rss/all.rss');
  const pageData = await telegraphProcessor('AWS Service Status', awsRssToTgMapper(rssData));
  console.log('Created ph page: ', pageData);
  const tgSenderResult = await sendMessage(`
    ${rssData.title}
    Issues count:  ${rssData.items.length}
    Details: ${pageData.url}
  `);
  console.log('Tg Sender Result', tgSenderResult);
  callback(null, { status: 200 })
};

module.exports = awsToTgNotifier;
