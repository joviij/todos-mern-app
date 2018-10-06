const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoDB = 'mongodb://127.0.0.1:27017/TodosDB';
const routes = require('./routes');

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
app.use(cors());
app.use(bodyParser.json());

routes(app);

module.exports = () => {
	routes(app);

	return app;
};
