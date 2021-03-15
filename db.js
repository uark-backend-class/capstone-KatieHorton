const mongoose = require('mongoose');


const db = mongoose.connection;
  
  function createEventListeners() {
    mongoose.connection.on('connected', () => {
      console.log('Successfully connected to userDB.');
    });
  
    mongoose.connection.on('disconnected', () => {
      console.log('Database connection closed.');
    });
  
    mongoose.connection.on('error', (err) => {
      console.log(`Connection Failure: ${err}`);
    });
  }
  
  function connect() {
    mongoose.connect(db, { useMongoClient: true });
  }
  
  function disconnect() {
    mongoose.disconnect();
  }

  module.exports = {
    db,
    createEventListeners,
    connect,
    disconnect
  };