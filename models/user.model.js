const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const passportLocalMongoose = require('passport-local-mongoose');
const db = require('../db');
const { URI } = require('../config/dev');


mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

db.on('open', async() => { 
  console.log('now magically connected to the userDB');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    githubId: { type: String, sparse: true },
    created: { type: Date, default: Date.now }
  },

  { timestamps: true }
);

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model('User', userSchema);

});
