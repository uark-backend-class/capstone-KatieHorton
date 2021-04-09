const mongoose = require('mongoose');
const User = require('../user.model');

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
