const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    let alias = 'tblClase';
    let columns = {
        idClase:{
                    type: DataTypes.INTEGER,
                    primaryKey: true
                },
        claseName:{
                    type: DataTypes.STRING(255)
                }
    }
    let config ={
        tableName: 'tblClase',
        timestamps: false
    }
    let tblClase = Sequelize.define(alias,columns,config)

    return tblClase
}