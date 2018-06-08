const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.database, (err)=>{
    if (err){
        console.log(err);
    }else {
        console.log('Conected to :' + config.database);
    }
})

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

var api = require('./routes/api')(app, express);
app.use('/api',api);

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