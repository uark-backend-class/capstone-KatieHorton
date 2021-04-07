const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const passportLocalMongoose = require('passport-local-mongoose');
const db = require('../db');
const { URI } = require('../config/dev');
const { user } = require('../db');

mongoose.set('useCreateIndex', true);
mongoose.connect( "mongodb+srv://Katie:SecretAgentC4t@mhc-project.znslh.mongodb.net/mhc-project?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

db.on('open', async() => { 
  console.log('now magically connected to the userDB');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    githubId: { type: String, sparse: true },
    password: String,
    created: { type: Date, default: Date.now }
  },

  { timestamps: true }
);

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model('User', userSchema);


});