const passport = require('passport');

exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  }
  else {
    res.redirect('/login');
    next();
  }
}

exports.loginPage = (req, res) => {
  res.render('login');
}

exports.login = passport.authenticate('google', {
  failureRedirect: '/login',
  failureFlash: 'LOGIN FAILURE!',
  successRedirect: '/',
  successFlash: 'Great Success!'
});

exports.registrationPage = (req, res) => {
  res.render('register');
}

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/login');
}