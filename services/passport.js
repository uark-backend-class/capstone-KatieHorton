const passport = require('passport');
const GithubStrategy = require('passport-github2');

const provider = require('../models/provider.model');

const {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GITHUB_CALLBACK_URL,
} = require('../config');

passport.serializeProvider((provider, done) => {
  done(null, provider._id);
});

passport.deserializeProvider(async (id, done) => {
  try {
    let provider = await provider.findById(id, 'name email _id');
    done(null, provider);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: GITHUB_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const provider = await provider.findOne({ githubId: profile.id });

        if (provider) {
          return done(null, provider);
        } else {
          const newprovider = new provider({
            email: profile.email,
            name: profile.displayName,
            githubId: profile.id,
          });

          const savedprovider = await newprovider.save();

          done(null, savedprovider);
        }
      } catch (error) {
        done(error);
      }
    }
  )
);

module.exports = passport;