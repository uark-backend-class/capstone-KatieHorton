const mongoose = require('mongoose');//at the top app.test.js
const http = require('http');
const mongoOptions = {userNewUrlPhaser:true, useUnifiedTopology:true};
const app = require('../app');

//first function to connect to mongoose:
beforeEach(async(done) => {
	const mongoUri = "mongodb+srv://Katie:SecretAgentC4t@mhc-project.znslh.mongodb.net/mhc-project?retryWrites=true&w=majority";
	mongoose.connect(mongoUri, mongoOptions, () => done()), 
}, setTimeout(8000);

afterEach(async(done) => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    done();
});




mongoose.connect(mongoUri, mongoOptions).then(()=>{

server.listen(3000, () => console.log('now listening'));
