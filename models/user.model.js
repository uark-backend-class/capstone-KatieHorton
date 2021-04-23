const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new mongoose.Schema({
  email: {
        type: String,
        lowercase: true,
        trim: true,
        required: 'Please enter an email address'
      },
  name: String,
  googleId: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  created: { type: Date, default: Date.now }
    },
      { timestamps: true }

);

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const User = mongoose.model("User", userSchema);

module.exports = User;