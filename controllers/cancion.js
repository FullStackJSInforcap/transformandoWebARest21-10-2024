const { findAll, findByArtista, update, deleteById, insert } = require("../service/cancion");

const findAllController = async (req, res) => {
    const respuesta = await findAll();
    res.render('index', {
        respuesta
    });
}

const findByArtistaController = async (req, res) => {
    const artista = req.query.artista;
    const respuesta = await findByArtista(artista);
    res.render('index', {
        respuesta
    });
}

const preInsertController = (req, res) => {
    res.render('insert');
}

const insertController = async (req, res) => {
    const titulo =  req.body.titulo;
    const artista =  req.body.artista;
    const tono =  req.body.tono;
    const respuesta = await insert(titulo,  artista, tono);
    res.render('index', {
        respuesta
    });
}

const preUpdateController = async (req, res) => {
    const artista = req.query.artista;
    const respuesta = await findByArtista(artista);
    respuesta.datos = respuesta.datos[0];
    res.render('update', {
        respuesta
    });
}

const updateController = async (req, res) => {
    const id = req.body.id;
    const titulo =  req.body.titulo;
    const artista =  req.body.artista;
    const tono =  req.body.tono;
    const respuesta = await update(id, titulo, artista, tono);
    res.render('index', {
        respuesta
    });
}

const deleteByIdController = async (req, res) => {
    const id = req.query.id;
    const respuesta = await deleteById(id);
    res.render('index', {
        respuesta
    });
}

module.exports = {
    findAllController,
    findByArtistaController,
    preInsertController,
    insertController,
    preUpdateController,
    updateController,
    deleteByIdController
}