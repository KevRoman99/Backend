'use strict';

var jwt = require('./node_modules/jwt-simple');
var moment = require('./node_modules/moment');
var secret = 'clave_super_secreta_del_proyecto';

exports.ensureAut = function(req,res,next){
    if(!req.headers.authorization){
        return res.status(404).send({message: 'La peticion de la cabecera no tiene autentificacion'});
    }

    var token = req.headers.authorization.replace(/['"]+/g,'');
    try{
        var payload = jwt.decode(token, secret);
        if(payload.ex <= moment().unix()){
            return res.status(404).send({message: 'El token ha expirado!!'});
        }
    }catch(exp){
        return res.status(404).send({message: 'El token no es valido'});
    }
    req.person = payload;
    next();
}