const mongoose = require('mongoose');
const http = require('http');
const {URI} = require('../process/.env');
const mongoOptions = {userNewUrlPhaser:true, useUnifiedTopology:true};
const app = require('../app');

//first function to connect to mongoose:
beforeEach(async(done) => {
	const mongoUri = process.env.mongoDBID;
	mongoose.connect(mongoUri, mongoOptions, () => done()), setTimeout(8000)});

    //drop db 
afterEach(async(done) => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    done();
});


mongoose.connect(URI, mongoOptions).then(()=>{

server.listen(3000, () => console.log('now listening')
)});
