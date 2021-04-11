const mongoose = require('mongoose');
const db = require('../db');

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
            type: String,
            maxlength: 30
        },
        phone: { 
            type: String,
            maxlength: 10
        }

    },

    zip: {
        type: Number,
        maxlength: 5
    },
    /*
    address: {
        type: String,
        required: 'Please enter Practice address',
        length: 5
    },

   reviews: { 
       type: [{}, {}, {}]
    }
*/

});

exports.Provider = mongoose.model('Provider', providerSchema);

});
