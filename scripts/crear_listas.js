// Módulo para añadir canciones a la lista de reproducción
const LISTASREPRODUCCION =[]

// Función para añadir una imagen a la lista de reproducción
function anadir_imagen(){
    let imagen = document.getElementById("imagen_playlist").value.substring(12);
    if (imagen!=='') {
        LISTASREPRODUCCION[LISTASREPRODUCCION.length - 1].imagen = 'images/playlist/' + imagen;
        let preview = document.getElementById("imagen_playlist_prev");
        preview.src = 'images/playlist/' + imagen;
    }
    // console.log(LISTASREPRODUCCION[LISTASREPRODUCCION.length-1].imagen)

}

// Función para guardar el nombre de la lista de reproducción
function anadir_nombre_lista(){
    let name = document.getElementById("nombre_lista").value;
    for (let i = 0; i<LISTASREPRODUCCION.length; i++)
    if (name !=='' && !LISTASREPRODUCCION[i].nombre.includes(name)){
        LISTASREPRODUCCION[(LISTASREPRODUCCION.length - 1)].nombre = document.getElementById("nombre_lista").value;
        alert("Playlist created successfully");
    }
    else if(name ===''){
        alert("Add a name to the playlist");
    }else{
        alert("Playlist already exists");
    }

}

// Función para buscar canciones para añadir a la lista de reproducción
function buscar_anadir(){
    let search = document.getElementsByClassName("resultados_1")[0];
    search.innerHTML='';

    let value = filter(document.getElementById('search_for_list').value);

    // Mostrar todas las canciones
    if(["*"].includes(value) || value === ''){
        value = '';
    } 
    search.innerHTML += allMusic.map((music, i) => {
        if ((filter(allMusic[i].name).includes(value)||filter(allMusic[i].artist).includes(value))&&
            (allMusic[i].name !== LISTASREPRODUCCION[LISTASREPRODUCCION.length-1].canciones)){
            return "<div class='busq1'>\n" +
                "    <div class='busq_container1'>\n" +
                cancion_container_busq_script(i) +
                "    </div>\n" +
                "    <div class='titulo_artista_busq'>\n" +
                "        <p><b>" + music.name + "</b></p>\n" +
                artists(music.artist) +
                "    </div>\n" +
                "    <div class='guardar_lista'>\n" +
                "    <p>\n" +
                "        <i class='fa-solid fa-plus' id='"+ music.name+"_agregar' onclick='agregar_a_lista("+i+")'>  </i>\n" +
                "    </p>\n" +
                "    </div>\n" +
                "</div>"
        }
    }).join('');
    search.innerHTML += "<div class='spacer-3'>\n</div>"

    // for(let i=0; i<allMusic.length; i++){
    //     let index_artist = indexArtist(allMusic, i);

    //     // Buscar canciones que coincidan con el valor introducido
    //     canciones_listas = LISTASREPRODUCCION[LISTASREPRODUCCION.length-1].canciones;
    //     if ((filter(allMusic[i].name).includes(value)||filter(allMusic[i].artist).includes(value))&&
    //         (allMusic[i].name !== LISTASREPRODUCCION[LISTASREPRODUCCION.length-1].canciones)){
    //         search.innerHTML += "<div class='busq1'>\n" +
    //             "    <div class='busq_container1'>\n" +
    //             cancion_container_script(i) +
    //             "    </div>\n" +
    //             "    <div class='titulo_artista_busq'>\n" +
    //             artist_script(list, i, index_artist) +
    //             "    </div>\n" +
    //             "    <div class='guardar_lista'>\n" +
    //             "    <p>\n" +
    //             "        <i class='fa-solid fa-plus' id='"+ allMusic[i].name+"_agregar' onclick='agregar_a_lista("+i+")'>  </i>\n" +
    //             "    </p>\n" +
    //             "    </div>\n" +
    //             "</div>"
    //     }
    // }
}



// Función para agregar canciones a la lista de reproducción
function agregar_a_lista(index){
    let eliminar = document.getElementById(allMusic[index].name +"_agregar");
    // let agregar = []
    LISTASREPRODUCCION[LISTASREPRODUCCION.length-1].canciones.push(allMusic[index].name);
    // LISTASREPRODUCCION[LISTASREPRODUCCION.length-1].audio.push(allMusic[index].audio);
    // console.log(LISTASREPRODUCCION[LISTASREPRODUCCION.length-1].canciones);
    alert("Song added to the playlist");
    eliminar.className = 'fa-solid fa-check';
}

