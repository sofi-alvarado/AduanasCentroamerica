const {response, request} = require('express');
const Aduana = require('../models/aduana');


const aduanaGTGet = async(req = request, res = response) => {

    const { limite = 10, desde = 0 } = req.query;

    const [ total, aduanas ] = await Promise.all([
        Aduana.countDocuments(),
        Aduana.find()
            .skip( Number(desde) )
            .limit(Number(limite))
    ]);

    res.json({
        estudiante: "Sofia Michelle, Alvarado Henriquez 25-3152-2017",
        total,
        aduanas
    }); 
}

const aduanaGTPost = async(req, res = response) => {
    
    const { codigo, nombreProyecto, monto, fecha } = req.body;
    const aduanas = new Aduana({ codigo, nombreProyecto, monto, fecha });
    
    await aduanas.save();

    res.json({
        msg:'Metodo POST para Guatemala',
        aduanas,
    });
}
const aduanaCRPost = async(req, res = response) => {
    
    const { codigo, nombreProyecto, pais_ejecuta, fecha_cierre } = req.body;
    const aduanas = new Aduana({ codigo, nombreProyecto, pais_ejecuta, fecha_cierre });
    
    await aduanas.save();

    res.json({
        msg:'Metodo POST para Costa Rica',
        aduanas,
    });
}

module.exports = {
    aduanaGTGet,
    aduanaGTPost,
    aduanaCRPost
}