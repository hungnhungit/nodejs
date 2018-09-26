var customers = [{
        firstname: "Jack",
        lastname: "Davis",
        age: 25,
        id: 1
    },
    {
        firstname: "Mary",
        lastname: "Taylor",
        age: 37,
        id: 2
    },
    {
        firstname: "Peter",
        lastname: "Thomas",
        age: 17,
        id: 3
    },
    {
        firstname: "Peter",
        lastname: "Thomas",
        age: 17,
        id: 4
    }
];

exports.findAll = function(req, res) {
    res.json(customers);
}

exports.create = function(req, res) {
    var newCustomer = req.body;
    customers["customer" + newCustomer.id] = newCustomer;
   	res.json(newCustomer);
};

exports.findOne = function(req, res) {
    var customer = customers[req.params.id];
    console.log(req.params.id);
    res.json(customer);
};

exports.update = function(req, res) {
	var id = parseInt(req.params.id);
	var updatedCustomer = req.body; 
	if(customers[id] != null){
		// update data
		customers[id] = updatedCustomer;
		
		// return
		res.json(updatedCustomer);
	}else{
			res.json({"error": "Upload fail"});
	}
};

exports.delete = function(req,res){
	delete customers[req.params.id];
	res.json({"message" : "delete success"});
}