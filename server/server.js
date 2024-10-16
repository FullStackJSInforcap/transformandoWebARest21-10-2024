const express = require('express');

class Server{

    constructor(){
        this.app = express();
        this.port = 3000;
        this.midlewares();
        this.routes();
    }

    midlewares() {

    }

    routes() {
        this.app.use('/canciones', require('../routes/cancion'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando por el puerto ${this.port}`);
        });
    }

}

module.exports = Server;