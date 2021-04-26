//const mongoose = require("mongoose");
const User = require("../models/user.model");
const passport = require("passport");
//const passportLocalMongoose = require("passport-local-mongoose");

exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/login");
  }
};
exports.loginPage = (req, res) => {
  res.render('login');
};

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: 'LOGIN FAILURE!',
  successRedirect: '/',
  successFlash: 'Great Success!'
});

exports.registrationPage = (req, res) => {
  res.render('register');
};

exports.register = async(req, res, next) => {
  const user = new User({ email: req.body.email });
  await user.register(user, req.body.password);

  next(); 
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/login');
};
/*
exports.account = (req, res) => {
  res.render("account", { title: "Edit Your Account" });
};

exports.updateAccount = async (req, res) => {
  const updates = {
    name: req.body.name,
    email: req.body.email,
  };

  const user = await User.findByIdAndUpdate(
    { _id: req.user._id },
    { $set: updates },
    { new: true, runValidators: true, context: "query" }
  );
  req.flash("success", "Profile Updated!");
  res.redirect("back");
};
*/
