const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: ObjectId,
    userName: String, required: true,
    firstName: String, required: true,
    lastName: String, required: true,
    phone: Number, maxlength: 10 ,
    eMail: String, unique: true, sparse: true,
    githubId: { type: String, sparse: true },
    created: { type: Date, default: Date.now },
},
    { timestamps: true }
);

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