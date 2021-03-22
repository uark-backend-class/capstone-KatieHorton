const db = require('./db.js');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//DEFINE SCHEMA
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
