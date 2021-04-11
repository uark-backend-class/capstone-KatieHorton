const mongoose = require('mongoose');
<<<<<<< HEAD
const db = require('../db');

db.on('open', async() => { 
  console.log('Magically connected to the providerDB');
=======
const User = require('../user.model');
>>>>>>> 10bfd3aca8df289b92dd0a2e0453f59ee842d6df

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
<<<<<<< HEAD
        phone: { 
            type: String,
            maxlength: 10
=======
        phone: {
            type: String
>>>>>>> 10bfd3aca8df289b92dd0a2e0453f59ee842d6df
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

<<<<<<< HEAD
   reviews: { 
       type: [{}, {}, {}]
    }
*/

});

exports.Provider = mongoose.model('Provider', providerSchema);

});
=======
    comments : [
        {
            body: String,
            date: Date,
            author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
        }
    ]
});

exports.Provider = mongoose.model('Provider', providerSchema);
>>>>>>> 10bfd3aca8df289b92dd0a2e0453f59ee842d6df
