const Url = require('../model/Url')
const db = require('../db/connectMDB')

exports.servidorLevantado = (req, res) => {
    res.send('servidor levantado')
}

exports.agregarUrl = async (req, res, next) => {
    let cnn = await db()
    let respuesta 
    try{
        
        const url = new Url({urlOriginal : req.body.urlOriginal});
        let resultado = await url.save();
        result = resultado.toObject();

        respuesta = {
            codigo: 201,
            mensaje : 'Almacenado Correctamente',
            url : resultado.urlOriginal,
            urlCorta : resultado.urlCorta
        }
    }catch(err){
        console.log(err)
        respuesta = {
            error : 404,
            error: 'error'
        }
    }
    res.json(respuesta)    
    next()
    
}


exports.redireccionarUrl = async (req,res,next) =>{
    let cnn = await db()
    const url = await Url.findOne({ urlCorta : req.params.urlCorta})
    if(!url){
        res.redirect('/?error=404')
        next()
    }
    res.redirect(url.urlOriginal)
    next()
}