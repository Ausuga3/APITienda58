const exp = require('express');
const modelProducto = require('./src/models/producto.model');
const enrutamiento = require('./routes/route')
require('dotenv').config();

const app = exp();
app.set('view engine', 'ejs')
app.use(exp.urlencoded({extended:false}))
app.use(exp.json());
app.use('/v1', enrutamiento)


app.get('/', function(req,res){
    res.render('pages/index')
})



app.listen(process.env.PORT, () =>{
    console.log(`servidor en linea, puerto ${process.env.PORT}`)
});