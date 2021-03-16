const User = require('../models/user.model');


exports.home = (req, res) => {
  res.send('Welcome to MHC home page!');
};

//CREATE //UPDATE USER
exports.create = async(req, res) => {
  console.log(req.body.userName);
  console.log(req.body.password);
  console.log(req.body.firstName);
  console.log(req.body.lastName);
  console.log(req.body.phone);
  console.log(req.body.eMail);
  if (req.body.id) {
    await User.findOneAndUpdate(req.body.id, req.body);
  }

  else {
    const user = new User(req.body); 
    await user.save();
  }

  res.redirect('/');
};

// DELETE USER
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params._id);

  res.redirect('/');
};

// LIST PAGE
exports.listUsersPage = async (req, res) => {
  let mainHeader = "User List";

  let Users = await User.find({}).lean();

  res.render('list', { header: mainHeader, Users });
};

// CREATE // UPDATE PAGE
exports.createUpdateUserPage = async (req, res) => {

  if (req.params._id) {
    let user = await User.findById(req.params._id).lean();

    res.render('create-update', { user });
  }

  else {
    res.render('create-update');
  }
};
