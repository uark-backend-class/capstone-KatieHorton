const  Provider = require('../models/provider.model');
const mongoose = require('mongoose');
const User = require('../models/user.model');
const db = require('../db');

// GET ALL
exports.getAll = async (req, res) => {
  const providers = await provider.find({}).lean();
  console.log([ providers ]);
  res.redirect()
}

// CREATE/UPDATE
exports.addProvider = async (req, res) => {
  console.log(req.body.firstName);
  console.log(req.body.lastName);
  console.log(req.body.specialty);
  console.log(req.body.email);
  console.log(req.body.phone);
  console.log(req.body.password);

  if (req.body.id) {
    await provider.findByIdAndUpdate(req.body.id, req.body);
    req.flash('info', 'Provider updated!');
  }
  else {
    const provider = new Provider(req.body); 
    await provider.save();
    req.flash('info', 'Provider added!');
  }
  res.redirect(`/provider/?id=$${provider._id}`);
}

exports.addComment = async (req, res) => {
  let provider = await provider.findById(req.params.id);

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
  const specialist = await db.Provider.find.where('specialty').equals(req.query.params);
  if (err) return handleError(err);
  res.redirect(`./providers/?specialty=${specialist.specialty}`);
}

//DELETE
exports.deleteProvider = async (req, res) => {
  await Provider.findByIdAndDelete(req.params.id);
  res.send(`provider deleted.`);
  res.redirect('/');
}

//LIST PROVIDERS PAGE
exports.listProvidersPage = async (req, res) => {
  let mainHeader = "Provider List";

  let providers = await provider.find({}).lean();
  
  let name = req.user ? req.user.name : 'Not logged in';
  let flashes = [ ...req.flash('info'), ...req.flash('great success!') ];

  res.render('Provider List', { header: mainHeader, providers, name, flashes });
}

exports.addUpdateProviderPage = async (req, res) => {
  if (req.params.id) {
    let provider = await provider.findById(req.params.id).lean();
 
    res.render('add-update', { provider });
  }

  else {
    res.render('add-update');
  }
}
