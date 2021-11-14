const express = require('express');
const directorRouter = require('./resources/directors/director.router');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/directors', directorRouter);

module.exports = app;
