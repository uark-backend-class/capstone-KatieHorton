const Provider = require("../models/provider.model");
const User = require('../models/user.model');

// CREATE/UPDATE
exports.addProvider = async (req, res, next) => {
  console.log(req.body.name);
  console.log(req.body.specialty);
  console.log(req.body.email);
  console.log(req.body.password);
  console.log(req.body.phone);
  console.log(req.body.address);

  if (req.body.id) {
    let provider = await Provider.findByIdAndUpdate(req.body.id, req.body);
    await provider.save();
    req.flash("info", "Provider Update Error!");
  } else {
    let provider = new Provider(req.body);
    console.log(req.body);
    await provider.save();
    req.flash("info", "Provider Added!");
  }
next();
};

exports.deleteProvider = async (req, res) => {
  await Provider.findByIdAndDelete(req.params.id);
  req.flash('info', 'Provider Deleted!');
  res.redirect("/");
};

//LIST PROVIDERS PAGE
exports.listProvidersPage = async (req, res) => {
  let mainHeader = "Provider List";

  let providers = await Provider.find({}).lean();

  let email = req.User ? req.User.email : 'Not logged in';

  res.render("list", { header: mainHeader, providers, email });
};

//ADD UPDATE PAGE
exports.addUpdateProviderPage = async (req, res, next) => {
  if (req.params.id) {
    let provider = await Provider.findById(req.params.id).lean();

    res.render("addUpdate", { provider });
  } else {
    res.render('addUpdate');
  }
  next();
};
/*
exports.addComment = async (req, res) => {
  let provider = await Provider.findById(req.params.id).lean();

  // pseudo code, need to get the comment test
  provider.comments.push({ body: "test comment", date: new Date(), author: req.user._id });

  res.redirect(`/providers/?id=${req.params.id}`);
};
*/

//FIND BY SPECIALTY

exports.findBySpecialty= async(req, res) => {
    let specialist = await Provider.find.where('specialty').equals(req.query.params);
    if (!specialist) return next();
    res.render('search', { title: specialist.name });

};

exports.findBySpecialtyPage = async (req, res) => {
  console.log(req.query);

  // If there are query parameters, then someone has submitted the search
  // form from the search page. Find the providers by specialty and show on the page.
  if (req.query && req.query.specialty && req.query.specialty.length > 0) {
    // TODO: do a search by specialty and get a list of providers
    let providers = await Provider.find({});
    res.render('search', { providers });
  }
  else {
    // No search yet, just display the search form and no providers.
    res.render('search');
  }
};


/*
https://www.affirmations.dev/
*/
