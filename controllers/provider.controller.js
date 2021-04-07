const  Provider = require('../models/provider.model.js');
const db = require('../db');
const mongoose = require('mongoose');

Provider.find({});
//create

exports.Provider.register= async(req, res, next) => ({
  const provider = new Provider({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    zip: req.body.zip
  }),
  await Provider.register(provider/*, req.body.password*/, req.body),
  next();
}
,
exports.addProvider = async(req, res, next) => {
    const provider = req.body;

    console.log(req.body.name);
    console.log(req.body.specialty);
    console.log(req.body.contact.email);
    console.log(req.body.contact.phoneNumber);
    console.log(req.body.zip);
  
    await provider.save();
    if (err) return handleError(err);
    res.send(`provider added`);
    next();
};
// read
exports.getAll = async(req, res) => {
  const providers = await Provider.find({});
  res.send([ providers ]);
};

 //find by Id
exports.findById = async(req, res) => {
    const foundProvider =  await findById(Provider._id).exec((err) => {
     if(err) return handleError(err);
    res.send(foundProvider);
  })
};

//find by specialty
exports.findBySpecialty = async(req, res, err) => {
    const specialist = await db.Provider.find.where('specialty').equals(query.params);
    if (err) return handleError(err);
    res.send(`Dr. ${specialist.name}, Specialty:${specialist.specialty} may meet your needs`);
}; 


//update
exports.findOneAndUpdate = async(req, res, err) => {
    const updatedProvider = awaitProvider.findById(query.params);
  if (err) return handleError(err);
   let results = req.body;

   for (let [prop] in results) {
       updatedProvider[prop] = results[prop];
       res.send (updatedProvider[0]);
   }

 console.log(updatedProvider);
};


//delete
exports.findByIdAndDelete = async(req, res) => {
    let providerIndex = await Provider.findById(Provider => Provider._id == req.query.id);
  
    if (providerIndex == -1) {
      res.status(404).send();
      return;
    }
    else {
      let deletedProvider = Provider.splice(providerIndex, 1);
  
    res.send(`${deletedProvider.name} deleted.`);
    }
};
exports.home = (req, res) => {
  res.send('welcome to home page, please insert information.');
};