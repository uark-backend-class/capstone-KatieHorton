const mongoose = require('mongoose');

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

        address: {
            type: String,
            required: 'Please enter Practice address',
            length: 5
        },
    },

    comments : [
        {
            body: String,
            date: Date,
        }
    ],

   password:
   {
       type: String,
       required: 'Please enter a password'
   }

});

//EXPORT PROVIDER MODEL
module.exports = mongoose.model('Provider', providerSchema);
