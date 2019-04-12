'use stric'

var express = require('express');
var bodyParse = require('body-parser');

var app = express();


var people_router = require('./Routes/peopleRouter');

app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());

app.use('/People',people_router);

//CORS
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

module.exports = app;