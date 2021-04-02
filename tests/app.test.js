const app = require('../app');
const mongoose = require('mongoose');
const supertest = require('supertest');
const User = require('../models/user.model');

test('GET./users', async() => {
//name of test, callback
	let user = await User.create({firstName: 'Karen', lastName: 'Jones', email: 'karenkares@box.net'});
	await supertest(app).get('/users').expect(200).then((response => {
		//check if response is array of one user
	}, //[ {_id:'234123', firstName: 'Karen', lastName: 'Jones', email: 'karenkares@box.net'} ]
	
	expect(Array.isArray(response.body)).toBeTruthy(),
	expect(response.body.length).toEqual(1),
		//check data
	expect(response.body[0]).firstName.toBe(user.firstName),
	expect(response.body[0].lastName.toBe(user.lastName)
});


/*module.exports = {
  testEnviornment: "node"
};
*/