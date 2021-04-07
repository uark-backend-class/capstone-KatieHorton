const mongoose = require('mongoose');
const db = require('../db');
const { URI } = require('../config/dev');

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

db.on('open', async() => { 
  console.log('Magically connected to the providerDB');

//DEFINE SCHEMA
const providerSchema = new mongoose.Schema({
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
        email: {
            type: String
        },
        phone: { 
            type: String
        }

    },

    zip: {
        type: Number,
        required: 'please enter zip code',
        length: 5
    }
});
exports.Provider = mongoose.model('Provider', providerSchema);
console.log(this.Provider.find({}));
});
