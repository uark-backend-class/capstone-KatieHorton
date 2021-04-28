const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const db = require('../db');


//DEFINE SCHEMA
const commentSchema = new mongoose.Schema(
    [
        {
            body: String,
            author: String,
            date: Date,
            default: {}
        }
    ]
);

const providerSchema = new mongoose.Schema({
    name:  String,
    profession: String,
    specialties: [String],   
    email: String,   
    phone: String,
    address: String,
    password: String,
    comments : {
        type: commentSchema,
        default: () => ({})
    }, 

});


const Provider = mongoose.model('Provider', providerSchema);


  
module.exports = Provider;  
