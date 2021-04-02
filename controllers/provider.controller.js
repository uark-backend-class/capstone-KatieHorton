const  Provider = require('./models/provider.model.js');
const db = require('../db');

db.on('open', () => { console.log('now magically connected to the providerDB') });

//create
exports.Provider.addProvider = async(req, res, next) => {
    const provider = req.body;

    console.log(req.body.name);
    console.log(req.body.specialty);
    console.log(req.body.zip);
  
    await provider.save();
    if (err) return handleError(err);
    res.send(`${provider.firstName} added`);
    next();
};


exports.Provider.getAll = async(req, res) => {
    const providers = await Provider.find({});
    res.send([ providers ]);
};

//addProvider({ name: 'Dr. Jones' , specialty: 'Pediatrics', zip: 72719});

 //find by Id
exports.Provider.findById = async(req, res) => {
    const foundProvider =  await findById(Provider._id).exec((err, provider) => {
     if(err) return handleError(err);
    res.send(foundProvider);
  })
};

//find by specialty
exports.Provider.findBySpecialty = async(req, res, err) => {
    const specialist = await db.Provider.find.where('specialty').equals(query.params);
    if (err) return handleError(err);
    res.send(`${specialist.name}: ${specialist.specialty} may meet your needs`);
}; 


//update provider
exports.Provider.findOneAndUpdate = async(req, res, err) => {
    const updatedProvider = awaitProvider.findById(query.params);
  if (err) return handleError(err);
   let results = req.body;

   for (let [prop] in results) {
       updatedProvider[prop] = results[prop];
       res.send (updatedProvider[0]);
   }

 console.log(updatedProvider);
};


//remove provider
exports.Provider.findByIdAndDelete = async(req, res) => {
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