const { Router } = require("express");
const passport = require('passport');
const user = require('../controllers/user.controller');
const router = Router();  
/*
router.get('/logout', LogoutController);
router.get('/self', getUserController);
router.get(
  '/github',
  passport.authenticate('github', { scope: ['user:email'] })
);
router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/',
    failureMessage: 'failure!',
  }),
  githubLoginController
);
*/

router.get('/', user.listUsersPage);
router.get('/create', user.createUpdateUserPage);
router.post('/createUpdate', user.create);
router.get('/update/:_id', user.createUpdateUserPage);
router.delete('/user/:_id', user.deleteUser);


module.exports = router;