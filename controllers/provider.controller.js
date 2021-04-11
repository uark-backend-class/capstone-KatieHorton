const  Provider = require('../models/provider.model');
const User = require('../models/user.model');


// read
exports.getAll = async (req, res) => {
  const providers = await Provider.find({}).lean();
  res.send([ providers ]);
}

//find by Id
exports.findById = async (req, res) => {
    const foundProvider =  await findById(Provider.id).lean(); {
     if(err) return handleError(err);
    res.send(foundProvider);
  }
}

// CREATE/UPDATE
exports.addProvider = async (req, res) => {
  console.log(req.body.firstName);
  console.log(req.body.lastName);
  console.log(req.body.specialty);
  console.log(req.body.email);
  console.log(req.body.phone);

  if (req.body.id) {
    await Provider.findByIdAndUpdate(req.body.id, req.body);
    req.flash('info', 'Provider updated!');
  }
  else {
    const provider = new Provider(req.body); 
    await provider.save();
    req.flash('info', 'Provider added!');
  }

  res.redirect('/');
}

//FIND BY SPECIALTY
exports.findBySpecialty = async (req, res, err) => {
  const specialist = await db.Provider.find.where('specialty').equals(req.query.params);
  if (err) return handleError(err);
  res.send(`Dr. ${specialist.name}, Specialty:${specialist.specialty} may meet your needs`);
}; 

//DELETE
exports.deleteProvider = async (req, res) => {
  await Provider.findByIdAndDelete(req.params.id);

  res.redirect('/');
}

exports.listProvidersPage = async (req, res) => {
  let mainHeader = "Provider List";

  let providers = await Provider.find({}).lean();
  
  let name = req.user ? req.user.name : 'Not logged in';
  let flashes = [ ...req.flash('info'), ...req.flash('success') ];

  res.render('list', { header: mainHeader, providers, name, flashes });
}

exports.addUpdateProviderPage = async (req, res) => {
  if (req.params._id) {
    let provider = await Provider.findById(req.params.id).lean();

    res.render('add-update', { provider });
  }

  else {
    res.render('add-update');
  }
}
