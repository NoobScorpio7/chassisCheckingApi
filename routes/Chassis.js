const ChassisDTO = require('../models/cars');
const CarsChassis = require('../models/carsdata');
var needle = require('needle');
const Joi = require('@hapi/joi');
const isOnline = require('is-online');
const initendpoints=(app)=>
{

    app.get('/check/chassis', (req, res) =>{
        ChassisDTO.findAll()
        .then((chassiss) =>{
            res.status(200).send(chassiss);
        })
    })
    
    app.post('/check/:maker_id/:chassis/:key', async (req, res) =>{
        let online=await checkConn();
        if(!online) return res.status(400).send('Not online');
        if(req.params.key != 12345 ) return res.status(400).send('key not valid');
        else{

            let selector = {
                model_code:req.params.maker_id
            }
            const car =  await ChassisDTO.findOne(selector);
            if(car){
                return res.status(200).send('Showing '+car);
            }
            else{
                needle.post('https://www.japan-partner.com/check-manufacture-year.html', {maker_id:req.params.maker_id,chassis:req.params.chassis}, 
                async (err, resp, body) =>{
            
                    var responceparsed = JSON.parse(body);
                    
                    ChassisDTO.create({
                        YEAR: responceparsed.YEAR,
                        MONTH: responceparsed.MONTH,
                        MODELCODE: responceparsed.MODELCODE,
                        COLORCODE: responceparsed.COLORCODE,
                        ENGINENO: responceparsed.ENGINENO,
                        GRADECODE: responceparsed.GRADECODE,
                        CATALOGNO: responceparsed.CATALOGNO,
                        TRANSCODE: responceparsed.TRANSCODE,
                        MODELNAME: responceparsed.MODELNAME,
                        CODE: responceparsed.CODE,
                        
                     }).then(result=>{
                        res.send(result);
                     }).catch(error=>{
                        res.send(error);
                     });
            
            
            
            
            });
            }
    
            
           
           
        }
    
    });

    function checkConn(){
        return isOnline();
    }
    

  
}






module.exports = initendpoints;