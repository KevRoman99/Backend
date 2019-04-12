'use strict';

    var express = require('express');
    var peopleController = require('../Controllers/peopleController');
    var api = express.Router();

    api.get('/Prueba', peopleController.Prueba);
    api.post('/Add-Person', peopleController.addPerson);
    api.put('/update-Person/:id', peopleController.updatePerson);

    module.exports = api;