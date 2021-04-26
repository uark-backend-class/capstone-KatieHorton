const User = require('../models/user.model');
const passport = require('passport');
const router = require('../routes');
const promisify = require('es6-promisify');
const crypto = require('crypto');

exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  }
  else {
    res.redirect('/login');
  }
};



router.post('/login', passport.authenticate('local'), (req, res) => {
    User.find({
      username: req.body.email
    }, (err, person) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({
        success: true,
        status: 'Logged in'
      });
    })
  });
  router.post('/logout', (req, res, next) => {
    if (req.session) {
      req.logout();
      req.session.destroy((err) => {
        if (err) {
          console.log(err);
        } else {
          res.clearCookie('session-id');
          res.json({
            message: 'Logout success!'
          });
        }
      });
    } else {
      const err = new Error('Please log in to continue.');
      err.status = 403;
      next(err);
    }
  });

  exports.isLoggedIn = (req, res, next) => {
    // first check if the user is authenticated
    if (req.isAuthenticated()) {
      next(); // carry on! They are logged in!
      return;
    }
    req.flash('error', 'Oops you must be logged in to do that!');
    res.redirect('/login');
  };
  
  exports.forgot = async (req, res) => {
    // 1. See if a user with that email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      req.flash('error', 'No account with that email exists.');
      return res.redirect('/login');
    }
    // 2. Set reset tokens and expiry on their account
    user.resetPasswordToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour from now
    await user.save();
    // 3. Send them an email with the token
    const resetURL = `http://${req.headers.host}/account/reset/${user.resetPasswordToken}`;
    req.flash('success', `You have been emailed a password reset link. ${resetURL}`);
    // 4. redirect to login page
    res.redirect('/login');
  };
  
  exports.reset = async (req, res) => {
    const user = await User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() }
    });
    if (!user) {
      req.flash('error', 'Password reset is invalid or has expired');
      return res.redirect('/login');
    }
    // if there is a user, show the rest password form
    res.render('reset', { title: 'Reset your Password' });
  };
  
  exports.confirmedPasswords = (req, res, next) => {
    if (req.body.password === req.body['password-confirm']) {
      next(); // keepit going!
      return;
    }
    req.flash('error', 'Passwords do not match!');
    res.redirect('back');
  };
  
  exports.update = async (req, res) => {
    const user = await User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() }
    });
  
    if (!user) {
      req.flash('error', 'Password reset is invalid or has expired');
      return res.redirect('/login');
    }
  
    const setPassword = promisify(user.setPassword, user);
    await setPassword(req.body.password);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    const updatedUser = await user.save();
    await req.login(updatedUser);
    req.flash('success', 'Your password has been reset!');
    res.redirect('/');
  };