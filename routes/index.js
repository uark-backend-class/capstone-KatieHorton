const provider = require('../controllers/provider.controller');
const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');
const auth = require('../controllers/auth.controller');
const passport = require('passport');
const { catchErrors: handleError} = require('../handlers/errorHandler');

router.get('/register', auth.registrationPage);
router.post('/register', handleError(user.register, auth.login));
router.get('/login', auth.loginPage);
router.post('/login', auth.login);

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))
router.get('/auth/google/redirect', passport.authenticate('google',
{ failureRedirect: '/login' }),
function(req, res, ) {

res.redirect('/');
});

//passport.use('isAuth', auth.isAuthenticated());
router.get('/', provider.listProvidersPage);
router.get('/specialty', provider.findBySpecialtyPage);
router.post('/specialty/:specialty', handleError(provider.findBySpecialty));
router.get('/add', provider.addUpdateProviderPage);
router.post('/addProvider', handleError(provider.addProvider));
router.get('/update/:id', handleError(provider.addUpdateProviderPage));
router.get('/delete/:id', provider.deleteProvider);
router.get('/secrets', auth.isAuthenticated, (req, res) =>
  res.send('Mental health matters.')
);


router.get('/logout', auth.logout);

router.get('/account', auth.isAuthenticated, user.account);
// router.posthandleError(('/account', user.updateAccount));


module.exports = router;