
const getAllFetch = async () => {
    const respuesta = await fetch('http://localhost:3000/canciones');
    const datos = await respuesta.json();
    console.log(datos);
}

const getAllAxios = async () => {
    const datos = await axios.get('http://localhost:3000/canciones');
    console.log(datos.data);
}

const getByArtistaFetch = async (artista) => {
    const respuesta = await fetch(`http://localhost:3000/canciones/findByArtista?artista=${artista}`);
    const datos = await respuesta.json();
    console.log(datos);
}

const getByArtistaAxios = async (artista) => {
    const datos = await axios.get(`http://localhost:3000/canciones/findByArtista?artista=${artista}`);
    console.log(datos.data);
}

const insertFetch = async (titulo, artista, tono) => {
    const respuesta = await fetch('http://localhost:3000/canciones/insert', {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulo,
            artista,
            tono
        })
    });
    const datos = await respuesta.json();
    console.log(datos);
}

const insertAxios = async (titulo, artista, tono) => {
    const datos = await axios.post('http://localhost:3000/canciones/insert', {
        titulo,
        artista,
        tono
    });
    console.log(datos.data);
}

const updateFetch = async (id, titulo, artista, tono) => {
    const respuesta = await fetch('http://localhost:3000/canciones/update', {
        method: 'put',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id,
            titulo,
            artista,
            tono
        })
    });
    const datos = await respuesta.json();
    console.log(datos);
}

const updateAxios = async (id, titulo, artista, tono) => {
    const datos = await axios.put('http://localhost:3000/canciones/update', {
        id,
        titulo,
        artista,
        tono
    });
    console.log(datos.data);
}

const deleteByIdFetch = async (id) => {
    const respuesta = await fetch(`http://localhost:3000/canciones/deleteById?id=${id}`, {
        method: 'delete'
    });
    const datos = await respuesta.json();
    console.log(datos);
}

const deleteByIdAxios = async (id) => {
    const datos = await axios.delete(`http://localhost:3000/canciones/deleteById?id=${id}`);
    console.log(datos.data);
}

/* getAllFetch();
getAllAxios();
getByArtistaFetch('artista uno');
getByArtistaAxios('artista uno'); */
/* insertFetch('titulo fetch para', 'artista fetch para', 'Mi');
insertAxios('titulo axios para', 'artista axios para', 'Mi');
 */

/* updateAxios(29, 'actualizado axios', 'actualizado axios', 'Re'); */
/* deleteByIdAxios(42); */