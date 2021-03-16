const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Katie:SecretPassword0@userDb.znslh.mongodb.net/userDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;
  
db.on('open', () => { console.log('now magically connected to the userDB') });