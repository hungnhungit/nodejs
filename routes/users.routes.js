module.exports = function (app) {

    let usersController = require('../controllers/users.controller.js');

    app.get('/api/users',usersController.findAll);

    app.get('/api/users/:id',usersController.findOne);

    app.get('/api/users/task/:id',usersController.findOneByTask);
  
    app.post('/api/authenticate',usersController.authenticate);
}