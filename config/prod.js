module.exports = {
  URI: process.env.mongoDBID,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_SECRET: process.env.GITHUB_SECRET,
  GITHUB_CALLBACK: process.env.GITHUG_CALLBACK,
  clientID: process.env.googleOAuthId,
  clientSecret: process.env.googleSecret,
  callbackURL: "http://localhost:3000/auth/google/redirect",
};
