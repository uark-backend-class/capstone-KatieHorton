const Provider = require("../models/provider.model");
const User = require('../models/user.model');

// CREATE/UPDATE
exports.addProvider = async (req, res) => {
  console.log(req.body.name);
  console.log(req.body.specialty);
  console.log(req.body.email);
  console.log(req.body.password);
  console.log(req.body.phone);
  console.log(req.body.address);

  if (req.body.id) {
    let provider = await Provider.findByIdAndUpdate(req.body.id, req.body);
    await provider.save();
    //req.flash("info", "Provider Update Error!");
  } else {
    let provider = new Provider(req.body);
    console.log(req.body);
    await provider.save();
    //req.flash("info", "Provider Added!");
  }
  res.redirect("/");
};


exports.deleteProvider = async (req, res) => {
  await Provider.findByIdAndDelete(req.params.id);
  //req.flash('info', 'Provider Deleted!');
  res.redirect("/");
};

//LIST PROVIDERS PAGE
exports.listProvidersPage = async (req, res) => {
  let mainHeader = "Provider List";

  let providers = await Provider.find({}).lean();

  //let name = req.provider ? req.provider.name : 'Not logged in';

  res.render("list", { header: mainHeader, providers });
};

//ADD UPDATE PAGE
exports.addUpdateProviderPage = async (req, res) => {
  if (req.params.id) {
    let provider = await Provider.findById(req.params.id).lean();

    res.render("addUpdate", { provider });
  } else {
    res.render('addUpdate');
  }
  res.redirect('/');
};
/*
exports.addComment = async (req, res) => {
  let provider = await Provider.findById(req.params.id).lean();

  // pseudo code, need to get the comment test
  provider.comments.push({ body: "test comment", date: new Date(), author: req.user._id });

  res.redirect(`/providers/?id=${req.params.id}`);
};


//FIND BY SPECIALTY
exports.findBySpecialty = async (req, res, err) => {
  if (err) return handleError(err);
  const specialist = await Provider.find.where('specialty').equals(req.query.params);

  res.redirect(`./providers/?specialty=${specialist.specialty}`);
};*/

/*
https://www.affirmations.dev/
*/
