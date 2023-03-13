const express = require('express');//requierir franwork
const app = express();//crear instancia de express
const morgan = require('morgan');
const bodyParser = require('body-parser')
//configuracion
app.set('port',4000);
//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

//rutas
app.use('/api/users/',require('./api/users'))
//se inicia el servidor 
app.listen(app.get('port'),()=>{
    console.log(`server run... ${app.get('port')}`);
});
