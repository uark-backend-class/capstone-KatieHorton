const mongoose = require('mongoose');
const { URI } = require('./config/dev');

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;

db.on('open', () => { console.log('now magically connected to the userDB') });
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;