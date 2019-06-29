const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const router = require('./routes/Chassis');
const endpoints=require('./routes/Chassis');

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.get('/check', async (req, res) =>{
    res.sendStatus(200).send("Api is working");
});
endpoints(app);


const port = process.env.port || 5000;
app.listen(port, ()=>{
    console.log(`The server is running on port...${port}`);
});