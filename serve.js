let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let path = require('path');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//model
let Task = require('./model/TaskSchema');
let User = require('./model/UserSchema');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/admin');


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.listen(port);


//middlware
app.use(function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, 'jsonwebtoken', function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});
//end middlware

require('./routes/tasks.routes.js')(app);
require('./routes/customers.routes.js')(app);
require('./routes/users.routes.js')(app);


console.log('RESTful API server started on: ' + port);