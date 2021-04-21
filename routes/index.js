const provider = require('../controllers/provider.controller');
const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');
const auth = require('../controllers/auth.controller');
const passport = require('passport');

router.get('/register', auth.registrationPage);
router.post('/register', user.register, auth.login);
router.get('/login', auth.loginPage);
router.post('/login', auth.login);

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))
router.get('/auth/google/redirect', passport.authenticate('google',
{ failureRedirect: '/login' }),
function(req, res) {

  res.redirect('/');
});
  

router.get('/', provider.listProvidersPage);
passport.use('isAuth', auth.isAuthenticated);
router.get('/add', provider.addUpdateProviderPage);
router.post('/addProvider', provider.addProvider);
router.get('/update/:id', provider.addUpdateProviderPage);
router.get('/delete/:id', provider.deleteProvider);
router.get('/secrets', auth.isAuthenticated, (req, res) =>
  res.send('On Wednesdays we wear pink')
);
router.get('/logout', auth.logout);

module.exports = router;