const exp = require('express')
const modelProducto = require('../src/models/producto.model')
const router = exp.Router()
const controladorroductos = require('../src/controller/producto.controller')

router.get('/productos', controladorroductos.consultar );

module.exports = router