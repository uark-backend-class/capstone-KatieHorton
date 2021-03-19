const express = require('express');
const passport = require('passport');

const {
  getUserController,
  githubLoginController,
  LogoutController
} = require('../controllers/auth.controller');

const router = express.Router();

// /api/auth/logout
// GET
router.get('/logout', LogoutController);

// /api/auth/me
// GET
router.get('/me', getUserController);

// /api/auth/github
// GET
router.get(
  '/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

// /api/auth/github/callback
router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/',
    failureMessage: 'failure!',
  }),
  githubLoginController
);

module.exports = router;