module.exports = function (app) {

    let tasksController = require('../controllers/tasks.controller.js');

    app.get('/api/tasks',tasksController.findAll);

    app.post('/api/tasks',tasksController.store);

    //find One
    app.get('/api/tasks/:id',tasksController.findOne);

    //delete task
    app.delete('/api/tasks/:id',tasksController.delete);

    //update task
    app.put('/api/tasks/:id',tasksController.update);
    
}