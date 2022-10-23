const { model, Schema} = require('mongoose');


const AduanaSchema=Schema({

    codigo: {
        type:String
    },
    nombreProyecto: {
        type:String
    },
    monto: {
      type:String
    },
    fecha: {
      type:String
    },
    pais_ejecuta: {
      type:String
    },
    fecha_cierre: {
      type:String
    }
});


module.exports = model( 'Aduana', AduanaSchema);

