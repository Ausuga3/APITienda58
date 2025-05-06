const exp = require('express')
const modeloProducto = require('../src/models/producto.model')
const router = exp.Router()
const controladorProductos = require('../src/controller/producto.controller')



router.get('/productos', controladorProductos.consultar );
router.get('/agregarProductos,', controladorProductos.agregarProducto)

module.exports = router