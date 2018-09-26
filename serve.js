let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let path = require('path');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
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


require('./routes/tasks.routes.js')(app);
require('./routes/customers.routes.js')(app);
require('./routes/users.routes.js')(app);


console.log('RESTful API server started on: ' + port);