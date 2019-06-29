const db = require('../db/connection');
const Sequelize = require('sequelize');

const carSchema = {

    chassisNo:Sequelize.STRING(20),
    data:Sequelize.STRING(2000)
}


const Car = db.define('car', carSchema)
Car.sync();
module.exports = Car;