const exp = require('express');
require('dotenv').config();
const modelProducto = require('./src/models/producto.model');
const enrutamiento = require('./routes/route')

const app = exp();
app.use(exp.urlencoded({extended:false}))
app.use(exp.json());
app.use('/v1', enrutamiento)





app.listen(process.env.PORT, () =>{
    console.log(`servidor en linea, puerto ${process.env.PORT}`)
});