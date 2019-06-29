const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = new Sequelize('chassischeckingapi', 'root', '',
   {
  host: process.env.DB_HOST,
  dialect:'mysql',
  logging: false,
    freezeTableName: true,
    operatorsAliases: {
      $and: Op.and,
      $or: Op.or,
      $eq: Op.eq,
      $gt: Op.gt,
      $lt: Op.lt,
      $lte: Op.lte,
      $like: Op.like
    }
});
db.authenticate()
.then(()=>
{
  console.log('Connected with data-base');
})
.catch(()=>{
  console.log('not connected with data-base');
})

module.exports=db;