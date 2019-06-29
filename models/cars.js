const db = require('../db/connection');
const Sequelize = require('sequelize');

const chassisSchema = {

    YEAR:{
        type:Sequelize.STRING(10),
        allowNull:true
    },

    MONTH:{
        type:Sequelize.STRING(10),
        allowNull:true
    },

    MODELCODE:{
        type:Sequelize.STRING(10),
        allowNull:true
    },

    COLORCODE:{
        type:Sequelize.STRING(10),
        allowNull:true
    },

    ENGINENO:{
        type:Sequelize.STRING(50),
        allowNull:true
    },

    GRADECODE:{
        type:Sequelize.STRING(50),
        allowNull:true
    },

    CATALOGNO:{
        type:Sequelize.STRING(50),
        allowNull:true,
    },

    TRANSCODE:{
        type:Sequelize.STRING(10),
        allowNull:true
    },

    MODELNAME:{
        type:Sequelize.STRING,
        allowNull:true
    },

    CODE:{
        type:Sequelize.INTEGER(50),
        allowNull:true
    }

    
    
}


const Chassis = db.define('chassis', chassisSchema);
Chassis.sync();
module.exports = Chassis;