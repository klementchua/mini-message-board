const db = require('../db/queries');

const links = [
  { href: '/', name: 'Messages' },
  { href: '/new', name: 'Message Form' },
];

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render('index', { messages, links });
}

async function msgFormGet(req, res) {
  res.render('form', { links });
}

async function msgFormPost(req, res) {
  await db.insertMessage({
    name: req.body.authorName,
    message: req.body.messageText,
  });
  res.redirect('/');
}

async function openMsgGet(req, res) {
  const message = await db.getMessage(req.params.msgId);
  res.render('message', { links, msg: message[0] });
}

module.exports = {
  getMessages,
  msgFormGet,
  msgFormPost,
  openMsgGet,
};
