const Telegraph = require('telegraph-node');
const ph = new Telegraph();

const createAccount = () => {
  return ph.createAccount(
    'hi', {
      short_name: 'AWS Notifier',
      author_name: 'AWS Nf'
    }
  );
};

const telegraphProcessor = async(articleHeader, articleData) => {
  const { access_token } = await createAccount();
  return ph.createPage(
    access_token,
    articleHeader,
    articleData, { return_content: true }
  )
};

module.exports = {
  telegraphProcessor,
};
