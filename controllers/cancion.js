const { findAll, findByArtista, update, deleteById, insert } = require("../service/cancion");

const findAllController = async (req, res) => {
    const respuesta = await findAll();
    res.json(respuesta);
}

const findByArtistaController = async (req, res) => {
    const artista = req.query.artista;
    const respuesta = await findByArtista(artista);
    res.json(respuesta);
}

const insertController = async (req, res) => {
    const titulo =  req.body.titulo;
    const artista =  req.body.artista;
    const tono =  req.body.tono;
    const respuesta = await insert(titulo,  artista, tono);
    res.json(respuesta);
}

const updateController = async (req, res) => {
    const id = req.body.id;
    const titulo =  req.body.titulo;
    const artista =  req.body.artista;
    const tono =  req.body.tono;
    const respuesta = await update(id, titulo, artista, tono);
    res.json(respuesta);
}

const deleteByIdController = async (req, res) => {
    const id = req.query.id;
    const respuesta = await deleteById(id);
    res.json(respuesta);
}

module.exports = {
    findAllController,
    findByArtistaController,
    insertController,
    updateController,
    deleteByIdController
}