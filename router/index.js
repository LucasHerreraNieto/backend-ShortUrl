const express = require('express')
const router = express.Router()
const urlController = require('../controller/UrlsControllers')

module.exports = () =>{
    
    router.get('/', urlController.servidorLevantado)
    router.post('/', urlController.agregarUrl)

    router.get('/:urlCorta', urlController.redireccionarUrl)

    return router
}
