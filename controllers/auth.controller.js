const User = require("../models/user.model");

const LogoutController = (req, res) => {
  req.logout();
  res.redirect("/");
};

const getUserController = (req, res) => {
    
    if(!req.user){
        return res.status(401).json({error:'!unauthorized!', status:false})
    }

  res
    .status(200)
    .json({ status: true, msg: "Great Success!", user: req.user });
};

const githubLoginController = (req, res) => {
  res.redirect("/");
};

module.exports = {
  LogoutController,
  getUserController,
  githubLoginController,
};