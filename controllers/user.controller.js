const User = require("../models/user.model")


exports.register = async (req, res, next) => {
  const user = new User({ email: req.body.email });
  await User.register(user, req.body.password);

  next();
}