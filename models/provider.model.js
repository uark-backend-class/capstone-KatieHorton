const mongoose = require('mongoose');
const User = require('./user.model');
const db = require('../db');


//CONNECT TO DB
db.on('open', async () => {
    console.log('Magically super connected MHC');
  
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
            required: 'please enter provider email',
            maxlength: 30
        },
        phone: { 
            type: String,
            required: 'please enter provider phone number',
            maxlength: 10
  
    },

},
    
    address: {
        type: String,
        required: 'Please enter Practice address',
        length: 5
    },

    reviews : [
        {
            body: String,
            date: Date,
            author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
        }
    ]
    
});

//EXPORT PROVIDER MODEL
exports.Provider = mongoose.model('Provider', providerSchema);

});