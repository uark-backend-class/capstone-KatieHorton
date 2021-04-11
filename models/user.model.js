const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const passportLocalMongoose = require('passport-local-mongoose');

const { user } = require('../db');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    //githubId: { type: String, sparse: true },
    password: String,
    created: { type: Date, default: Date.now }
  },

  { timestamps: true }
);

//userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model('User', userSchema); 