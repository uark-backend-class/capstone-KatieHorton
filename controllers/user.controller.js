const User = require('../models/user.model');
const db = require('../db');

exports.home = (req, res) => {
  res.send('Welcome to MHC home page!');
};

//CREATE

exports.create = async(req, res) => {
  let newUser = await new User({
    _id: ObjectId,
    userName: req.body.userName,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email
  });

if (err) return handleError(err);
  newUser.save();
  console.log(newUser);
  res.send(newUser);
  mongodb.disconnect();
};

//READ
exports.getUser = async (req, res) =>  {
  let user = await User.findbyId(ObjectId == req.params._id).exec();
    if (err) return handleError(err);
  res.send(user);
  mongodb.disconnect();
};

exports.getAll = async(req, res) => {
   result = await User.find({}).exec();
    if (err) return handleError(err);
   res.send([result]);
   mongodb.disconnect();
};

// UPDATE
exports.updateUser = async(req, res) => {
  let updatedUser = await (await Users.findByIdAndUpdate(ObjectId == req.params._id)).exec();
  if (err) return handleError(err);
  for (let prop in updatedUser) {
    updatedUser[prop] = req.body;
  }
  updatedUser.save();
  res.send(updatedUser);
  mongodb.disconnect();
};

// DELETE
 exports.deleteUser = async function(_id) {
    let deletedUser = await (await Users.findById(_id)).exec();
    if (err) return handleError(err);
    res.send(deletedUser.remove);
    mongodb.disconnect();
  };

  /*
exports.listUserPage = async (req, res) => {
  let mainHeader = "Student List";

  let users = await Student.find({}).lean();

  res.render('list', { header: mainHeader, users });
}
*/
