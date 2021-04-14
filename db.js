const mongoose = require('mongoose');
const { URI } = require('./config/dev');

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;


module.exports = db;
