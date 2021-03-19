var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    mongoose = require('mongoose'),
    Car = require('./api/models/model'), //vytvorený model sa tu načíta
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Ownedcarsdb');

app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/routes'); //import ciest
routes(app); //registrácia ciest

app.listen(port);

console.log('owned cars list Rest API server started on port: ' +port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });