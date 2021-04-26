const passport = require('passport');
const user = require('../models/user.model');

exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  }
  else {
    res.redirect('/login');  
  }
}

exports.loginPage = (req, res) => {
  res.render('login');
}

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: 'LOGIN FAILURE!',
  successRedirect: '/',
  successFlash: 'Great Success!'
});

exports.registrationPage = (req, res) => {
  res.render('register');
}

exports.register = async(req, res, next) => {
  const user = new User({ email: req.body.email });
  await user.register(user, req.body.password);

  next(); 
}

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/login');
}