module.exports = function(app){
	var customers = require('../controllers/customers.controller.js');

	//create a customer
	app.post('/api/customers', customers.create);

	//find All
	app.get('/api/customers',customers.findAll);

	//find one
	app.get('/api/customers/:id', customers.findOne);

	//update customer
	app.put('/api/customers/:id', customers.update);

	//delete customer
	app.delete('/api/customers/:id', customers.delete);
}