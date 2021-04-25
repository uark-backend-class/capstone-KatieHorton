const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//DEFINE SCHEMA
const providerSchema = new mongoose.Schema({
    name:  {
        type: String,
        //required: "please enter provider name",
        maxlength: 100
    },

    profession: String,

    specialty: {
        type: [String],
        //required: "please enter provider specialty",
        maxlength: 100
    },
    
    email: {
            type: String,
            //required: "please enter provider email",
            maxlength: 30
        },
    
    phone: {
            type: String,
            //required: "please enter provider phone number",
            maxlength: 10
        },

    address: {
            type: String,
            //required: "Please enter Practice address",
            
        },

    comments: [
        {
            body: String,
            date: Date,
        }
    ],

});



//EXPORT PROVIDER MODEL
module.exports = mongoose.model("Provider", providerSchema);

