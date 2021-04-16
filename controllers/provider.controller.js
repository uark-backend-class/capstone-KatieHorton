const  Provider = require('../models/provider.model');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// CREATE/UPDATE
exports.addUpdateProvider = async (req, res) => {
  if (error) return handleError(error);
  console.log(req.body.name);
  console.log(req.body.specialty);
  console.log(req.body.email);
  console.log(req.body.phone);
  console.log(req.body.password);

  if (req.body.id) {
    await Provider.findByIdAndUpdate(req.body.id, req.body);
    if (error) return handleError(error);
    //req.flash('info', 'Provider Update Error!');
  }
  else {
    const provider = new Provider(req.body);
    await provider.save();
    res.render('createUpdate', { provider });
    //req.flash('info', 'Provider Added!');
  }

 res.redirect(`/provider/?id=${ req.params.id }`);

  //or res.redirect(`/providersListPage`);
};

//LIST PROVIDERS PAGE
exports.getProviders = async (req, res) => {
  let mainHeader = "Provider List";

  let providers = await Provider.find({}).lean();

  let name = req.provider ? req.provider.name : 'Not logged in';

  res.render('list', { header: mainHeader, providers, name });
};

//FIND BY ID
exports.findById = async (req, res) => {
  const foundProvider =  await Provider.findById(req.params.id).lean();
   if(err) return handleError(err);

  res.redirect(`/provider/?id=${req.params.id}`);

};

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
};

//DELETE
exports.deleteProvider = async (req, res) => {
  await Provider.findByIdAndDelete(req.params.id);
  res.send(`provider deleted.`);
  res.redirect('/');
};



exports.addUpdateProviderPage = async (req, res) => {
  res.render('createUpdate');
};

/*
https://www.affirmations.dev/
*/