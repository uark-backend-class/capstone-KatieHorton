const User = require('../models/user.model');


exports.getAll = async(req, res, err) => {
  if (err) handleError(err);
  allUsers = await User.find({}).lean();
  console.log(allUsers);
};

exports.register = async (req, res, next) => {
  const user = new User(
    { 
    firstName: req.body.firstName, 
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password 
  });
  await User.register(user);

  next();//pass to auth controller
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
  next();
};

// LIST USER PAGE
exports.listUsersPage = async (req, res) => {
  let users = await User.find({}).lean();
  let name = req.user ? req.user.name : 'Not logged in';
  let flashes = [ ...req.flash('info'), ...req.flash('success') ];

  res.render('list', { header: mainHeader, users, name, flashes });
}

// CREATE // UPDATE USER PAGE
exports.createUpdateUserPage = async(req, res, next) => {

  if (req.params._id) {
    let user = await User.findById(req.params._id).lean();;

    res.render('create-update', { user });
  }

  else {  
    res.render('create-update page');
    req.flash('info', 'User updated!'); 
  }
  next();
};

