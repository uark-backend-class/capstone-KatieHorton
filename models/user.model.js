const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    firstName: String,
    lastName: String,
    phone: Number,
    eMail: String,

    created: { type: Date, default: Date.now }
  });

  const User = mongoose.model('User', userSchema);
  
module.exports = User;


const susan = new User({
  userName: 'SusieQ',
  firstName: 'Susan',
  lastName: 'Susanator',
  phone: 4445678,
  eMail: 'SusieQ@yourmom.com'
});

susan.save(function(err) {
  if (err) return handleError(err);
});