const  Provider = require('../models/provider.model');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('../models/user.model');
const db = require('../db');


db.on('open', () => { console.log('Magically Connected to MHC') });
db.on('error', console.error.bind(console, 'MHC connection error, Threat Level: MIDNIGHT'));


// CREATE/UPDATE
exports.addProvider = async (req, res) => {
  if (error) return handleError(error);
  console.log(req.body.firstName);
  console.log(req.body.lastName);
  console.log(req.body.specialty);
  console.log(req.body.email);
  console.log(req.body.phone);
  console.log(req.body.password);

  if (req.body.id) {
    await Provider.findByIdAndUpdate(req.body.id, req.body);
    if (error) return handleError(error);
    req.flash('info', 'Provider Update Error!');
  }
  else {
    const provider = new Provider(req.body); 
    await provider.save();
    res.render('createUpdate', { provider });
    //req.flash('info', 'Provider Added!');
  }
 res.render('createUpdate', { provider });
  //res.redirect('/');

  //or res.redirect(`/providersListPage`);
}

// READ
exports.getAll = async (req, res, err) => {
  if (err) return handleError(err);
  const providers = await Provider.find({}).lean();
  res.send([ providers ]);
res.redirect('/');
}

exports.addComment = async (req, res) => {
  let provider = await Provider.findById(req.params.id).lean();

  // pseudo code, need to get the comment test
  provider.comments.push({ body: "test comment", date: new Date(), author: req.user._id });

  res.redirect(`/providers/?id=${req.params.id}`);
}

//FIND BY ID
exports.findById = async (req, res) => {
  const foundProvider =  await Provider.findById(req.params.id).lean(); {
   if(err) return handleError(err);

  res.redirect(`/provider/?id=${foundProvider._id}`);
  }
}

//FIND BY SPECIALTY
exports.findBySpecialty = async (req, res, err) => {
  if (err) return handleError(err);
  const specialist = await Provider.find.where('specialty').equals(req.query.params);
 
  res.redirect(`./providers/?specialty=${specialist.specialty}`);
}

//DELETE
exports.deleteProvider = async (req, res) => {
  await db.provider.findByIdAndDelete(req.params.id);
  res.send(`provider deleted.`);
  res.redirect('/');
}

//LIST PROVIDERS PAGE
exports.listProvidersPage = async (req, res) => {
  let mainHeader = "Provider List";

  let providers = await db.provider.find({}).lean();
  
  let name = req.user ? req.user.name : 'Not logged in';
  let flashes = [ ...req.flash('info'), ...req.flash('great success!') ];

  res.render('Provider List', { header: mainHeader, providers, name, flashes });
}

exports.addUpdateProviderPage = async (req, res) => {
  if (req.params.id) {
    let provider = await db.provider.findById(req.params.id).lean();
 
    res.render('add-update', { provider });
  }

  else {
    res.render('add-update');
  }
}
