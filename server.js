const express = require('express');
const swaggerAutogen = require('swagger-autogen')();

const mongodb = require('./routes/data/database');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

mongodb.initDb((err)=>{
    if(err){
        console.log(err);
    }
    else{app.listen(port, ()=> {console.log("Database is listening and node Running on port ", port);});}
})

