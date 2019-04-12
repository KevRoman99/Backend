'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = Schema({
    firstName: String,
    middleName: String,
    firstLastName: String,
    secondLastName: String,
    marriedName: String,
    birthname: Date,
    religion: String,
    email: String,
    gender: String,
    addres: Object,
    department: String,
    municipality: String,
    zone: Number,
    residential: String,
    avenue: String,
    street: String,
    sector: String,
    number: String,
    phones: Object,
    cellphone: String,
    house: String,
    other: String
});

module.exports = mongoose.model('Person', personSchema);