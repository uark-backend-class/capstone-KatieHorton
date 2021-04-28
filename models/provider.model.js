const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = require('../db');


//DEFINE SCHEMA
const providerSchema = new mongoose.Schema({
    name:  String,
    profession: String,
    specialties: [String],   
    email: String,   
    phone: String,
    address: String,
    password: String,
    comments: [
        {
            body: String,
            date: Date
        }
    ],

}, { versionKey: false } );


const Provider = mongoose.model('Provider', providerSchema);


  
module.exports = Provider;  
