const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config');

const app = express();
const port = 3333;

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else {
        console.log('Server started on port: '+ port);
    }
});