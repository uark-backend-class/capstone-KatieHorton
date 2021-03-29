const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { Schema } = mongoose;
const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = mongoose.model({
    _id: ObjectId,
    firstName: String,
    lastName: String,
    phone: Number,
    email: String,
    githubId: { type: String, sparse: true },
    created: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

const User = new mongoose.model('User', UserSchema);
User instanceof User;
await User.save();

User.create({

  firstName: 'Susan',
  lastName: 'Susanator',
  phone: 444-5678,
  email: 'SusieQ@yourmom.com',
});

console.log(newUser._id, newUser.firstName, newUser.lastName, newUser.phone, newUser.email);

newUser.save();

User.find(function (err, users) {
  if (err) return console.error(err);
  console.log(users);
});

module.exports = User;