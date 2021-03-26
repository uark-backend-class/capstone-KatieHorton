const router = require('express').Router();
const passport = require('passport');
const user = require('../controllers/user.controller');
const auth = require('../controllers/auth.controller');

router.get('/login', auth.loginPage);
router.get('/logout', auth.logout);
// router.get('/self', getUserController);
router.get(
  '/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/login',
    failureFlash: 'failure!',
    successRedirect: '/',
    successFlash: 'Login win!'
  })
);

router.use(auth.isAuthenticated);
router.get('/', user.listUsersPage);
router.get('/create', user.createUpdateUserPage);
router.post('/createUpdate', auth.isAuthenticated,  user.create);
router.get('/update/:_id', user.createUpdateUserPage);
router.delete('/user/:_id', user.deleteUser);
router.get('/secrets', (req, res) => res.send('Super secret things!'));

module.exports = router;