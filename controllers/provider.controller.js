const Provider = require("../models/provider.model");
const User = require("../models/user.model");
const mongoose = require("mongoose");

// CREATE/UPDATE
exports.addProvider = async (req, res) => {
  console.log(req.body.name);
  console.log(req.body.profession);
  console.log(req.body.specialty);
  console.log(req.body.email);
  console.log(req.body.phone);
  console.log(req.body.address);
  console.log(req.body.password);

  if (req.body.id) {
    let provider = await Provider.findByIdAndUpdate(req.body.id, req.body).lean();
    await provider.save();
    req.flash("info", "Provider Update Error!");
  } else {
    let provider = new Provider(req.body);
    console.log(req.body);
    await provider.save();
    req.flash("info", `${provider} updated!`);
  }
  res.redirect('/add');
};

// PROVIDER LIST PAGE
exports.getAll = async (req, res) => {
  const allProviders = await Provider.find({}).lean();
  res.send([allProviders]);
};

exports.listProvidersPage = async (req, res) => {
  let mainHeader = "Provider List";

  let providers = await Provider.find({}).lean();

  let email = req.User ? req.User.email : "Not logged in";

  res.render("list", { header: mainHeader, providers, email });
};

//ADD UPDATE PAGE
exports.addUpdateProviderPage = async (req, res) => {
  if (req.params.id) {
    let provider = await Provider.findById(req.params.id).lean();
    res.render("addUpdate", { provider });
  } else {
    res.render("addUpdate");
  }
};


//PROFILE PAGE
exports.getOne = async(req, res) => {
  const foundProvider = await Provider.findById(req.params.id);
  if(!foundProvider) {
    res.status(404).send();
  }
  else {
  res.send(foundProvider);
}
};

exports.profilePage = async(req, res) => {
  let mainHeader = `Provider Profile:`

  const profile = await Provider.findById(req.params.id).lean();
  res.render('profile', {header: mainHeader, profile});
};
/*
exports.addComment = async (req, res) => {
  let provider = await Provider.findById(req.params.id).lean();

  // pseudo code, need to get the comment test
  provider.comments.push({ body: "test comment", date: new Date(), author: req.user._id });

  res.redirect(`/providers/?id=${req.params.id}`);
};

  function logSubmit(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
  }

  const form = document.getElementById("form");
  const log = document.getElementById("log");
  form.addEventListener("submit", logSubmit);
};

*/

//FIND BY PROFESSION
exports.findProfessionPage = (req, res) => {
  res.render("search");
}

exports.findByProfession = async (req, res) => {
  console.log(req.body);

  //query db
  try {
    const professionals = await Provider.find({
      profession: { $in: req.body.professions },
    });
    return res.send(professionals);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
  // res.render('profession', { professions, title: 'Professionals', profession, providers});
}

exports.deleteProvider = async (req, res) => {
  let provider = await Provider.findByIdAndDelete(req.params.id);
  req.flash("info", "Provider Deleted!");
  res.redirect('/');
};