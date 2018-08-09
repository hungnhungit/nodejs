let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let router = require('./route/router');

app.listen(port);

router(app);

console.log('RESTful API server started on: ' + port);
