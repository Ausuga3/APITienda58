const modeloProducto = require('../models/producto.model');

exports.consultar = async (req,res)=>{
    let listaProductos = await modeloProducto.find({});
    console.log(listaProductos)
    if (listaProductos){
        res.json(listaProductos)
    } else {
        res.json({"error":"Hubo un error"})
    }
    
}

exports.agregarProducto = async  (req, res) => {
    try{
        const productIsRegistered = await modeloProducto.findProducto({referencia:referencia});
        if (productIsRegistered){ await modeloProducto.updateOne({ referencia: referencia },{ $inc: { stock: 1 } });
            return res.status(400).json({error:'Producto ya existe, stock incrementado'});
        }
        const producto = await modeloProducto.crearProductoRecord(req, body);
        return res.status(200).json({mensaje: 'Producto regitrado con exito'});
    }catch(error){
        console.error(error);
        return res.render('500', {error:error, });
    }

}