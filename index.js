const express = require('express');
const routes = require('./routes');
const exphbs = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const GithubStrategy = require('passport-github2');
//const GoogleStrategy = require('passport-google-oauth20');
const { GITHUB_CLIENT_ID, GITHUB_SECRET, GITHUB_REDIRECT_URI } = require('./config/dev');
const flash = require('connect-flash');
const User = require('./controllers/user.controller');
const port = 3000;
require('./db');

passport.use(
  new GithubStrategy(
    {
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_SECRET,
      callback_uri: GITHUB_REDIRECT_URI
    
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({ clientId: profile.id });

        if (user) {
          return done(null, user);
        } else {
          const newUser = new User({
            email: profile.email,
            name: profile.displayName,
            githubId: profile.id,
          });

          await newUser.save();

          done(null, newUser);
        }
      } catch (error) {
        done(error);
      }
    }
  )
);

// passport.use(new GoogleStrategy({
//   clientID: googleOAuthId,
//   clientSecret: googleSecret,
//   callbackURL: "http://localhost:3000/auth/google/redirect"
// }, async (accessToken, refreshToken, profile, done) => {
//   let currentUser = await User.findOne({ googleId: profile.id });

//   if (currentUser) {
//     done(null, currentUser);
//   }
//   else {
//     const newUser = new User({
//       googleId: profile.id,
//     });

//     await newUser.save();

//     done(null, newUser);
//   }
// }));

passport.use(User.createStrategy());
passport.authenticate('./local/localAuth.');

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id, "name email _id");
  done(null, user);
});
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
  secret: 'Mental Health Matters',
  resave: true,
  saveUninitialized: true
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(routes);

app.listen(process.env.PORT || port, () => console.log(`Server listening on port: ${port}`));