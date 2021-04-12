const mongoose = require('mongoose');
const User = require('./user.model');

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
  
    },

    zip: {
        type: Number,
        maxlength: 5
    }
},
    
    address: {
        type: String,
        required: 'Please enter Practice address',
        length: 5
    },

    comments : [
        {
            body: String,
            date: Date,
            author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
        }
    ]
    
});

exports.Provider = mongoose.model('Provider', providerSchema);
