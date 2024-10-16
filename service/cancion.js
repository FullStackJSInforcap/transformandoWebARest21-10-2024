const Cancion = require("../models/cancion")

const findAll = async () => {
    try {
        const canciones = await Cancion.findAll();
        if (canciones.length == 0) {
            return {
                msg: 'La tabla consultada se encuentra sin datos',
                status: 204,
                datos: []
            }
        }
        return {
            msg: 'Los datos obtenidos son: ',
            status: 200,
            datos: canciones.map(cancion => cancion.dataValues)
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
    }
}

const findByArtista = async (artista) => {
    try {
        const artistaRecibido = await Cancion.findAll({ where: { artista } });
        if (artistaRecibido.length == 0) {
            return {
                msg: `El artista con nombre ${artista} no existe`,
                status: 204,
                datos: []
            }
        }
        return {
            msg: `El artista con nombre ${artista} es: `,
            status: 200,
            datos: [artistaRecibido[0].dataValues]
        }
    } catch (error) {
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
    }
}

const insert = async (titulo, artista, tono) => {
    try {
        const insertado = await Cancion.create({ titulo, artista, tono });
        return {
            msg: `El artista con nombre ${artista} se insertó correctamente`,
            status: 201,
            datos: [insertado.dataValues]
        }
    } catch (error) {
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
    }
}

const update = async (id, titulo, artista, tono) => {
    try {
        const actualizado = await Cancion.update({ titulo, artista, tono }, { where: { id } });
        const canciones = await Cancion.findAll();
        return {
            msg: `El artista con nombre ${artista} se actualizó correctamente`,
            status: 201,
            datos: canciones.map(cancion => cancion.dataValues)
        }
    } catch (error) {
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
    }
}

const deleteById = async (id) => {
    try {
        await Cancion.destroy({ where: { id } });
        const canciones = await Cancion.findAll();
        return {
            msg: `La canción con id ${id} se eliminó correctamente`,
            status: 200,
            datos: canciones.map(cancion => cancion.dataValues)
        }
    } catch (error) {
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
    }
}

module.exports = {
    findAll,
    findByArtista,
    insert,
    update,
    deleteById
};