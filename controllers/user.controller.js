const mongoose = require('mongoose');
const User = require("../models/user.model")

exports.isAuthenticated = (req, res) => {
  if (User.isAuthenticated()) {
    next();
  }
  else {
    res.redirect('/login');
  }
};

exports.register = async (req, res, next) => {
  const user = new User({ email: req.body.email });
  await User.register(user, req.body.password);
  exports.validateRegister = (req, res, next) => {
    req.sanitizeBody('name');
    req.checkBody('email', 'Please enter a valid email!').isEmail();
    req.checkBody('password', 'You must enter a password!').notEmpty();
    req.sanitizeBody('email').normalizeEmail({
      gmail_remove_dots: false,
      remove_extension: false,
      gmail_remove_subaddress: false
    });
    req.checkBody('password', 'Password Cannot be Blank!').notEmpty();
    req.checkBody('password-confirm', 'Really, Password cannot be blank!').notEmpty();
    req.checkBody('password-confirm', 'Passwords must match!').equals(req.body.password);

    const errors = req.validationErrors();
    if (errors) {
      req.flash('error', errors.map(err => err.msg));
      res.render('register', { title: 'Register', body: req.body, flashes: req.flash() });
      return;
    }

    next();
  }
};

exports.account = (req, res) => {
  res.render('account', { title: 'Edit Your Account' });
};

exports.updateAccount = async (req, res) => {
  const updates = {
    name: req.body.name,
    email: req.body.email
  };

  const user = await User.findByIdAndUpdate(
    { _id: req.user._id },
    { $set: updates },
    { new: true, runValidators: true, context: 'query' }
  );
  req.flash('success', 'Profile Updated!');
  res.redirect('back');
};