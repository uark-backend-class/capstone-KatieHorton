const passport = require('passport');

exports.LogoutController = (req, res) => {
  req.logout();
  res.redirect('/');
};

exports.getUserController = (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: '!unauthorized!', status: false });
  }

  res.status(200).json({ status: true, msg: 'Great Success!', user: req.user });
};

exports.githubLoginController = (req, res) => {
  res.redirect('/');
};

exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
};

exports.loginPage = (req, res) => {
  res.render('login');
};

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: 'Failed login!',
  successRedirect: '/',
  successFlash: 'You are now logged in!',
});

exports.registrationPage = (req, res) => {
  res.render('register');
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/login');
};
