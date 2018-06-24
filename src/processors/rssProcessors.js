const Parser = require('rss-parser');

const parser = new Parser();

const fetchAndParseRss = (parseURL) => parser.parseURL(parseURL);

module.exports = {
  fetchAndParseRss,
};
