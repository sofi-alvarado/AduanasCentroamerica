const express = require('express')
const cors = require('cors');

const {dbConnection} = require('../database/config');

class Server {
  
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.aduanaPath = '/api/aduanas';

     ////////CONECTAR A LA BASE DE DATOS
     this.conectarDB();
      /////CODIGO DE CAPAINTERMEDIA ----MIDDLEWARES ------
      this.middlewares();
      // Rutas de mi aplicación
      this.routes();

  }
  
  async conectarDB(){
        
    await dbConnection();

  }

  middlewares(){

    ////politica de acceso CORS para publicacion WEB
    this.app.use(cors());

    /// parser Json
    this.app.use(express.json());

    /////Accesos publicos
    this.app.use(express.static('public'));

}

routes() {
  this.app.use(this.aduanaPath, require('../routes/aduanas'));
}

  listen() {
    this.app.listen(this.port, () =>{
      console.log("Servidor API REST corriendo en puerto : ", process.env.PORT);
  });
  }
}

module.exports = Server;