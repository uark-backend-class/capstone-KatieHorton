const  Provider = require('./models/provider.model.js');

// change to async await
//create
db.Provider.create({ name: 'Dr. Brown', specialty: 'head shrink', contact:{phone: '555-5556', email 'doc@droffice.com'}, zip: 56565}, function (err, provider) {
    if (err) return handleError(err);
  });
db.Provider.save();

 //getAll
db.Provider = async function getAll(err, db){{
    const providers = await providerDb.getAll();
    if(err) return handleError(err);
    console.log(providers);
};

 //find by Id
db.Provider.findById = async function findById(req.param) {
    const foundProvider =  await findById(Provider._id).exec((err, provider) => {
     if(err) return handleError(err);
    console.log(foundProvider);
  });

//find by specialty
db.Provider.findBySpecialty = async function findSpecialist(query.params) {
    specialist = await db.Provider.find.where('specialty').equals(query.params);
    if (err) return handleError(err);
    console.log(`${provider}: ${provider.specialty}`);
  }); 


//update provider
db.Provider.findOneAndUpdate(Provider._id, async function(err, res) {
    let updatedProvider = awaitProvider.findById(query.params);
  if (err) return handleError(err);
   let results = req.body;

   for (let [prop] in results) {
       updatedProvider[prop] = results[prop];
       res.send (updatedProvider[0]);
   }

  console.log(updatedProvider);
});


//remove provider
db.Provider.findByIdAndDelete(async(req, res) => {
    let providerIndex = await Provider.findById(Provider => Provider._id == req.query.id);
  
    if (providerIndex == -1) {
      res.status(404).send();
      return;
    }
    else {
      let deletedProvider = Provider.splice(providerIndex, 1);
  
    console.log(deletedProvider);
    }
});