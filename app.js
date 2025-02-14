const path = require('node:path');
const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRoutes');

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.listen(3000, () => {
  console.log('Running app on port 3000');
});
