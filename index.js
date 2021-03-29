const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const config = require('./config/dev');
const GithubStrategy = require('passport-github2');
const User = require('./models/user.model');

const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require("./services/passport");
const flash = require('connect-flash');

const PORT = 3000;

const app = express();

app.use(
  session({
    secret: "random pineapple",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: config.URI,
      autoRemove: "interval",
      autoRemoveInterval: 10,
    }),
  })
);
passport.use(
  new GithubStrategy(
    {
      clientID: '4efd531dc76f8913898a',
      clientSecret: '09025fcc63fd83d27df80a8be543437fe0cca5e0',
      callbackURL: 'http://localhost:3000/auth/github/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({ githubId: profile.id });

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
)


passport.use(User.createStrategy());

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id, "name email _id");
  done(null, user);
});

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(routes);

app.use(express.urlencoded());
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));