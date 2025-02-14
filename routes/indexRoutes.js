const express = require('express');
const indexRouter = express.Router();

const links = [
  { href: '/', name: 'Messages' },
  { href: '/new', name: 'Message Form' },
];
const messages = [
  {
    id: 0,
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    id: 1,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

indexRouter.get('/', (req, res) => {
  res.render('index', { messages, links });
});

indexRouter.get('/new', (req, res) => {
  res.render('form', { links });
});

indexRouter.post('/new', (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.authorName,
    added: new Date(),
    id: messages.length,
  });
  res.redirect('/');
});

indexRouter.get('/:msgId', (req, res) => {
  const currMsg = messages[req.params.msgId];
  res.render('message', { links, msg: currMsg });
});

module.exports = indexRouter;
