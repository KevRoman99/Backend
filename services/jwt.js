'use strict';

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_super_secreta_del_proyecto';

exports.createToken = function(person){
    var playload = {
        sub: person._id,
        firstName: person.firstName,
        middleName: person.middleName,
        firstLastName: person.firstLastName,
        secondLastName: person.secondLastName,
        marriedName: person.marriedName,
        birthname: person.birthname,
        religion: person.religion,
        email: person.email,
        gender: person.gender,
        iat: moment().unix(),
        exp: moment().add(30, 'day').unix
    };

    return jwt.encode(playload, secret);
}