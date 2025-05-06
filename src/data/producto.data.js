const modelProducto = require('../models/producto.model')

exports.crearProductoRecord = async (productInfo) =>{
    try{
        return new productInfo(productInfo).save();
    } catch(error){
        return error;
    }
}


exports.findProducto = async (filter, projection) => {
    try{
        if (!projection) return await modelProducto.findOne(filter);
        else return await modelProducto.findOne(filter, projection);
    } catch (error) {
        return error
    }
}