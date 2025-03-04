const modelProducto = require('../models/producto.model')


exports.consultar = async (req,res)=>{
    let listaProductos = await modelProducto.find({});
    console.log(listaProductos)
    if (listaProductos){
        res.json(listaProductos)
    } else {
        res.json({"error":"Hubo un error"})
    }
    
}

