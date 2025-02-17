const express = require('express');
const controller = require('../controllers/indexController');
const indexRouter = express.Router();

indexRouter.get('/', controller.getMessages);
indexRouter.get('/new', controller.msgFormGet);
indexRouter.post('/new', controller.msgFormPost);
indexRouter.get('/:msgId', controller.openMsgGet);

module.exports = indexRouter;
