const User = require('../models/user.model');
const passport = require('passport');
const router = require('../routes');

router.post('/register', (req, res, next) => {
  User.register(new User({
      username: req.body.username
    }),
    req.body.password, (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({
          err: err
        });
      } else {
        passport.authenticate('/users/:userName')(req, res, () => {
          User.find({
            username: req.body.username
          }, (err,user) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({
              success: true,
              status: 'Registration Success!',
            });
          });
        })
      }
    })
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    User.find({
      username: req.body.username
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