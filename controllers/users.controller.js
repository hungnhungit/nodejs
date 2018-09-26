let mongoose = require('mongoose');
const Users = mongoose.model('users');


module.exports = {
    findAll: (req, res) => {
        console.log("tester");
        Users.find().then((task) => res.json(task)).catch((error) => {
            res.json({ "message": "findAll Fail" });
        })

    },

    findOne: (req, res) => {
        console.log("tester");
        Users.findById(req.params.id).populate('task').then((user) => res.json(user)).catch((error) => {
            res.json({ "message": "findAll Fail" });
        })

    },

    findOneByTask: (req, res) => {
        console.log(req.params.id);
        Users.find({task : req.params.id}).exec((error,users)=>res.json(users));
    }
  

}