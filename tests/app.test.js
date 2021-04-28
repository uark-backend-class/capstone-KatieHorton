const app = require('../app');
const mongoose = require('mongoose');
const supertest = require('supertest');
const User = require('../models/user.model');

test('GET./users', async() => {
//name of test, callback
	let user = await User.create({name: 'Karen', email: 'karenkares@box.net'});
	await supertest(app).get('/users').expect(200).then((response) => {
	//check if response is array of one user
	 //[ {_id:'234123', firstName: 'Karen', lastName: 'Jones', email: 'karenkares@box.net'} ]
		expect(Array.isArray(response.body)).toBeTruthy(),
		expect(response.body.length).toEqual(1),
		//check data
		expect(response.body[0]).firstName.toBe(user.name),
		expect(response.body[0]).email.toBe(user.emamil)
	});
},

test('GET/profile/:id', async () => {
	let profile = Provider.create({name: 'elvira', email: 'booger@snot.com'})
	await supertest(app).get(`profile/${profile._id})`,
	expect(response.body instanceof Provider).toBeTruthy(),
	expect (!Array.isArray(response.body)).toBeTruthy()
)}

//describe will group tests together

/*
module.exports = {
  testEnviornment: "node"
};
*/