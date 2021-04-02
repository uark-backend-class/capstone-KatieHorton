const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes');

const GithubStrategy = require('passport-github2');
const User = require('./models/user.model');
const {
  URI,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GITHUB_CALLBACK_URL,
} = require("./config/dev");

const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require("./services/passport");
const flash = require('connect-flash');

const PORT = 3000;

const app = express();

app.use(
  session({
    secret: "Jupiter",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: URI,
      autoRemove: "interval",
      autoRemoveInterval: 10,
    }),
  })
);
passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: GITHUB_CALLBACK_URL,
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