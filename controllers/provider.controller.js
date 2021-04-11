const  Provider = require('../models/provider.model');
const User = require('../models/user.model');


<<<<<<< HEAD
=======
   db.collection('providers').find().toArray(function(err, result){
     if(err) throw err;
     console.log(result);
     client.close();
   });
});

//create
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
>>>>>>> 10bfd3aca8df289b92dd0a2e0453f59ee842d6df
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

<<<<<<< HEAD
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
=======
//find by specialty
exports.findBySpecialty = async(req, res, err) => {
    const specialist = await db.Provider.find.where('specialty').equals(query.params);
    if (err) return handleError(err);
    res.send(`Dr. ${specialist.name}, Specialty:${specialist.specialty} may meet your needs`);
};
>>>>>>> 10bfd3aca8df289b92dd0a2e0453f59ee842d6df

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

<<<<<<< HEAD
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
=======
exports.addComment = async (req, res) => {
  let provider = await Provider.findById(req.params.id);

  // pseudo code, need to get the comment test
  provider.comments.push({ body: "test comment", date: new Date(), author: req.user._id });

  // decide where to redirect
  res.redirect('/providers/' + provider._id);
}

//delete
exports.findByIdAndDelete = async(req, res) => {
    let providerIndex = await Provider.findById(req.params.id);

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
>>>>>>> 10bfd3aca8df289b92dd0a2e0453f59ee842d6df
