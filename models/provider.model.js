const db = require('./db.js');

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//define schema
const { Schema } = mongoose;

const providerSchema = new Schema({
    _id: { ObjectId },

    name:  {
        type: String, 
        required: 'please enter provider name',
        maxlength: 100
    },

    specialty: {
        type: [String],
        required: 'please enter provider specialty',
        maxlength: 100
    },

    contact: {
        phone: { 
            type: String,
            required: 'please enter contact information',
            maxlength: 9
        },
        email: {
            type: String,
            required: 'please enter email',
            maxlength: 100
        } 
    },

    zip: {
        type: Number,
        required: 'please enter zip code',
        length: 5
    },

    /*reviews: {
        [{},{},{}]
    },
    /*findByspecialty = function(specialty) {  //make sure this works!
        return this.find({ specialty: new RegExp(specialty, 'i') });
    }  */
});

module.exports.Provider = mongoose.model('Provider', providerSchema);

//create
db.Provider.create({ name: 'Dr. Brown', specialty: 'head shrink', contact:{phone: '555-5556', email 'doc@droffice.com'}, zip: 56565}, function (err, provider) {
    if (err) return handleError(err);
  });
db.Provider.save();

 //getAll
db.Provider.getAll().exec((err, db) => {
    providers = providerDb.getAll();
    if(err) return handleError(err);
    console.log(db);
});

 //find by Id
db.Provider.findById(Provider._id).exec((err, provider) => {
     if(err) return handleError(err);
    console.log(provider);
  });

//find by specialty
db.Provider.find.where('specialty').equals(query.params).exec((err, provider) => {
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
},