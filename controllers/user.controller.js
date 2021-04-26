const mongoose = require("mongoose");
const User = require("../models/user.model");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

exports.isAuthenticated = (req, res, next) => {
  if (User.isAuthenticated()) {
    next();
  } else {
    res.redirect("/login");
  }
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
