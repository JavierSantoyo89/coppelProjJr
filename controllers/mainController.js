const { error, log } = require('console');
const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');
//const Sequelize = require("Sequelize");
//const Op = Sequelize.Op;

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
//let db =require('../data/models') //---- Manda llamar la base de datos ----//


const mainController = {
    index: (req,res) =>{
        res.render('index')
    }
}

module.exports = mainController;