let mongoose = require('mongoose');
const Users = mongoose.model('users');
const jwt = require('jsonwebtoken');

module.exports = {
    findAll: (req, res, next) => {

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
        Users.find({ task: req.params.id }).exec((error, users) => res.json(users));
    },

    authenticate: (req, res) => {
        console.log("hungit");
        Users.findOne({ name: req.body.name }).then((user) => {
            // if (!user) {
            //     return res.json({ message: "User not find" });
            // }else{
            //     if (user.password != req.body.password) {
            //         return res.json({ message: "Authenticate Fail" });
            //     }
            // }

            const payload = {
                admin: true
            };
            var token = jwt.sign(payload, 'jsonwebtoken', { expiresIn: 60 * 60 * 24 });

            res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token
            });

        });

    }


}