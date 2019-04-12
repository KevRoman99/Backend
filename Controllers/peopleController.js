'use strict';
var Person = require('../models/person');
var jwt = require('../services/jwt');
function Prueba(req,res){
    res.status(200).send({message: 'Probando el Servidor'})
}
function addPerson(req,res){
    var person = new Person();
    var params = req.body;

    if (params.firstName && params.middleName && params.firstLastName && params.secondLastName && params.marriedName && params.birthname && params.religion && params.email && params.gender ){
        // person.firstName = params.firstName;
        // person.middleName = params.middleName;
        // person.firstLastName = params.firstLastName;
        // person.secondLastName = params.secondLastName;
        // person.marriedName = params.marriedName;
        // person.birthname = params.birthname;
        // person.religion = params.religion;
        // person.email = params.email;
        // person.gender = params.gender;
        // person.addres = params.addres;
        // person.phone = params.phone;

        // person.save((err, personStored)=>{
        //     if(err){
        //         res.status(500).send({message: 'Error al guardar'});
        //     }else{
        //         if(!personStored){
        //             res.status(404).send({message: 'No se ha podido registrar'});
        //         }else{
        //             // if(params.gettoken){
        //             //     res.status(200).send({token: jwt.createToken(person)})
        //             // }
        //             res.status(200).send({Person: personStored});
        //         }
        //     }
        // })

        Person.insertMany({'firstName': params.firstName, 'middleName': params.middleName, 'firstLastName': params.firstLastName, 'secondLastName': params.secondLastName, 'marriedName': params.marriedName, 'birthname': params.birthname,
        'religion': params.religion,'email': params.email,'gender': params.gender, 
        'addres': {'department': params.department,'municipality': params.municipality,'zone': params.zone,'residential': params.residential,'avenue': params.avenue,
        'street': params.street,'sector':params.sector, 'number':params.number},
        'phones':{'cellphone': params.cellphone, 'house': params.house,'other':params.other}},(err,person)=>{
            if(err){
                res.status(500).send({message:'error al guardar'});
            }else{
                if(!person){
                    res.status(404).send({message:'NO se pudo guardar'});
                }else{
                    res.status(200).send({Persona: person});
                }
            }
        })
    }else{
        res.status(500).send({message: 'Ingrese todos los datos'});
    }
}

function updatePerson(req, res){
    var personId = req.params.id;
    var params = req.body;

    Person.findOneAndUpdate({_id:personId}, {$set:{firstName: params.firstName, middleName: params.middleName,
        firstLastName: params.firstLastName, secondLastName: params.secondLastName, marriedName: params.marriedName,
            birthname: params.birthname, religion: params.religion, email: params.email, gender: params.gender, addres: params.addres,
                department: params.department, municipality: params.municipality, zone: params.zone, residential: params.residential, avenue: params.avenue,
                    street: params.street, sector: params.sector, number: params.number, 
cellphone: String,
house: String,
other: String
        }}, {new:true}, (err, personFind) => {
        if(err){
            res.status(500).send({message: 'Error al acutalizar'});
        }else{
            if(!personFind){
                res.status(404).send({message: 'No se ha podido actualizar el administrador'});
            }else{
                res.status(200).send({personFind});
            }
        }
    });
}

module.exports ={
    Prueba,
    addPerson,
    updatePerson
}