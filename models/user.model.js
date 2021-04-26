const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  githubId: String,

  created: { type: Date, default: Date.now }
    },
      { timestamps: true }
);

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

const User = mongoose.model('User', userSchema);

module.exports = User;