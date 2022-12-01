const { log } = require('console');
const fs = require('fs');
const path = require('path');
//const multer = require('multer');

// **************** Llamada a la BD **************** //
let db = require('../../data/models');
const tblClase = require('../../data/models/clase');
let Op = db.Sequelize.Op;

const productsAPI = {
    Clases: (req,res) =>{
        db.tblClase.findAll()
        .then(tblClase =>{
            return res.status(200).json({
                total:tblClase.length,
                data:tblClase,
                status:200,
                searchAll: 'OK'
            })
        })
    }

}
module.exports = productsAPI