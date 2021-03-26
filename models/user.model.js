const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
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
const User = mongoose.model('User', userSchema);

module.exports = User;

/*const susan = new User({
  userName: 'Susan',
  lastName: 'Susanator',
  phone: 444-5678,
  eMail: 'SusieQ@yourmom.com'
});

susan.save(function(err) {
  if (err) return handleError(err);
}); */