const Aduana = require('../models/aduana');

const existeAduanaPorId = async(id) => {

    // Verificar si el correo existe
    const existeAduana = await Aduana.findById(id);
    if ( !existeAduana ) {
        throw new Error(`El id no existe ${id}`);
    }
}



module.exports = {
    existeAduanaPorId,
}

