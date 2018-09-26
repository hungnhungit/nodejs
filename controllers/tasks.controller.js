let mongoose = require('mongoose');
const Tasks = mongoose.model('tasks');


module.exports = {
    findAll: (req, res) => {
        console.log("tester");
        Tasks.find().then((task) => res.json(task)).catch((error) => {
            res.json({ "message": "findAll Fail" });
        })

    },
    create: (req, res) => {
        return res.render('create');
    },
    store: (req, res) => {
        const task = new Tasks({
            name: req.body.name,
            title: req.body.title,
        });
        task.save().then((data) => res.json(data)).catch((error) => res.json(error));
    },
    findOne: (req, res) => {
        Tasks.findById(req.params.id)
            .then((task) => {
                if (task != null) {
                    res.json(task)
                }
                return res.status(400).json({ "message": "Customer not found with id " + req.params.id });
            })
            .catch((error) => {
                res.json({ "message": "findAll Fail" });
            })
    },

    delete: (req, res) => {
        Tasks.findByIdAndRemove(req.params.id)
            .then((task) => {
                if (task != null) {
                    res.status(400).json({ "message": "Delete Successfully" });
                }
                return res.status(400).json({ "message": "Customer not found with id " + req.params.id });
            })
            .catch((error) => {
                res.json({ "message": "findAll Fail" });
            })
    },

    update: (req, res) => {
        Tasks.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                title: req.body.title
            }, { new: true })
            .then((task) => {
                if (!task) {
                    return res.status(404).json({ "message": "Not find task" });
                }
                res.json(task)
            })
            .catch((err) => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Task not found with id " + req.params.id
                    });
                }
                return res.status(500).send({
                    message: "Error updating task with id " + req.params.id
                });
            });
    }

}