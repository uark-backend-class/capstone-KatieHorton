const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = require('../db');

mongoose.connect('mongodb+srv://Katie:SecretPassword0@userDb.znslh.mongodb.net/userDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);


const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    email: String,

    created: { type: Date, default: Date.now }
  });

  
module.exports = mongoose.model('User', userSchema);