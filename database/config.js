const mongoose = require('mongoose');


const dbConnection = async() =>{
    try {
        
        await mongoose.connect(process.env.MONGO_CNN,{
            useNewUrlParser: true,
        });
        console.log('La base de datos esta ONLINE');
    } catch (error) {
        console.log(error);
        //throw new Error('Error en la base de datos !!!!!!  verifique......')

    }

}

module.exports = {
    dbConnection
}