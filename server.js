const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(config.port,(err)=>{
    if(err){
        console.log(err);
    }else {
        console.log('Server started on port: '+ config.port);
    }
});