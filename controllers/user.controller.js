const User = require('../models/user.model');

exports.register = async (req, res, next) => {
  const user = new User({ email: req.body.email });
  await User.register(user, req.body.password);

  next();
};

exports.create = async (req, res, next) => {
  await User.find(req.body.id, req.body);

    const user = new User(req.body);
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.phone);
    console.log(req.body.email);
    await user.save();
    req.flash('info', 'User added!');
  res.redirect('/');
  next();
};


// DELETE USER
exports.deleteUser = async(req, res) => {
  await User.findByIdAndDelete(req.params._id);

  res.redirect('/');
  req.flash('info', 'User deleted!');
};

// LIST USER PAGE
exports.listUsersPage = async (req, res) => {
  let users = await User.find({}).lean();
  let name = req.user ? req.user.name : 'Not logged in';
  let flashes = [ ...req.flash('info'), ...req.flash('success') ];

  res.render('list', { header: mainHeader, users, name, flashes 
  });
}

// CREATE // UPDATE USER PAGE
exports.createUpdateUserPage = async(req, res) => {

  if (req.params._id) {
    let user = await User.findById(req.params._id).lean();

    res.render('create-update', { user });
  }

  else {
    res.render('create-update page');
    req.flash('info', 'User updated!');
  }
};

