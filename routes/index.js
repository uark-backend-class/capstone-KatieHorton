const provider = require('../controllers/provider.controller');
const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');
const auth = require('../controllers/auth.controller');
const passport = require('passport');
env = require('../.env.js');

//AUTH
router.get('/login', auth.loginPage);
router.post('/login', auth.login);
router.get('/register', auth.registrationPage);
router.post('/register', user.register, auth.login);
router.get('/github', passport.authenticate('github', { 
  clientId: env.GITHUB_CLIENT_ID,
  scope: ['user:email'] }))
router.get(env.GITHUB_REDIRECT_URI, passport.authenticate('github', {
  failureRedirect: '/login',
  successRedirect: '/',
  successFlash: 'Login successful!'
}));

//router.use('isAuth', user.isAuthenticated);
//LIST

router.get('/', provider.listProvidersPage);

//ADD-UPDATE
router.get('/add', provider.addUpdateProviderPage);
router.post('/addProvider', provider.addProvider);
router.get('/update/:id', provider.addUpdateProviderPage);
//FIND ONE BY ID
router.get('/profile', provider.profilePage);
router.post('/profile', provider.getAll);
router.get('/profile/:id', provider.profilePage);
//FIND BY PROFESSION
router.get('/profession', provider.findProfessionPage);
router.post('/getProfession', provider.findByProfession);
//DELETE
router.get('/delete/:id', provider.deleteProvider);
router.get('/secrets', auth.isAuthenticated, (req, res) =>
  res.send('Mental health matters.')
);

router.get('/logout', user.logout);

//router.get('/account', auth.isAuthenticated, user.account);
// router.posthandleError(('/account', user.updateAccount));

module.exports = router;