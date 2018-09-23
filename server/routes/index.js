const router = require('express').Router();
const log = require('../helpers').log;
const todos = require('./todos');

router.use((req, res, next) => {
  log(req, res);
  next();
});

router.get('/', (req, res) => {
  res.send('todos-mern-app');
});

todos(router);

module.exports = app => app.use(router);
