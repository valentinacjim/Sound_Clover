// Módulo para añadir canciones a la lista de reproducción
let misListas =[]

// function crear_listas(){
//     let home = document.getElementsByClassName('musica')[0];
//     let mis_listas = document.getElementsByClassName('mis_listas')[0];
//     let crear_lista = document.getElementsByClassName('crear_lista')[0];
//     let perfil = document.getElementsByClassName('perfil')[0];
//     let seguidos = document.getElementsByClassName('artistas_pagina')[0];
//     let artista_pag = document.getElementsByClassName('artistas_pagina')[1];
//     let resultados = document.getElementsByClassName('busqueda')[0];
//     let lista_reproduccion = document.getElementsByClassName('lista_reproducción')[0];
//     let albumes = document.getElementsByClassName('albumes')[0];
//     let cuenta = document.getElementsByClassName('cuenta')[0];
//
//     home.style.visibility = 'hidden';
//     mis_listas.style.visibility = 'hidden';
//     crear_lista.style.visibility = 'visible';
//     perfil.style.visibility = 'hidden';
//     artista_pag.style.visibility = 'hidden';
//     seguidos.style.visibility = 'hidden';
//     resultados.style.visibility = 'hidden';
//     lista_reproduccion.style.visibility = 'hidden';
//     albumes.style.visibility = 'hidden';
//     cuenta.style.visibility = 'hidden';
//
//     // Crear estructura del formulario
//     document.getElementById("nombre_lista").value = '';
//     document.getElementById("search_for_list").value = '';
//     document.getElementById("imagen_playlist").value = '';
//
//
// }

// Función para añaadir una imagen a la lista de reproducción
function anadir_imagen(){
    let imagen = document.getElementById("imagen_playlist").value.substring(12);
    if (imagen!=='') {
        misListas[misListas.length - 1].imagen = 'images/playlist/' + imagen;
    }
    // console.log(misListas[misListas.length-1].imagen)

}

// Función para guardar el nombre de la lista de reproducción
function anadir_nombre_lista(){
    let name = document.getElementById("nombre_lista").value;
    for (let i = 0; i<misListas.length; i++)
    if (name !=='' && !misListas[i].nombre.includes(name)){
        misListas[(misListas.length - 1)].nombre = document.getElementById("nombre_lista").value;
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
    // console.log(search);
    search.innerHTML='';
    let value = document.getElementById('search_for_list').value;

    // Quitar espacios en blanco, convertir a minúsculas y quitar acentos
    value = filter(value);

    // Mostrar todas las canciones
    if(["*"].includes(value)){
        value = '';
    }

    for(let i=0; i<allMusic.length; i++){
        let index_artist = 0;

        for(let j=0; j<allArtistas.length; j++){
            if (allMusic[i].artist === allArtistas[j].name){
                index_artist = allArtistas[j].index;
            }
        }

        // Buscar canciones que coincidan con el valor introducido
        canciones_listas = misListas[misListas.length-1].canciones;
        if ((filter(allMusic[i].name).includes(value)||filter(allMusic[i].artist).includes(value))&&
            (allMusic[i].name !== misListas[misListas.length-1].canciones)){
            search.innerHTML += "<div class='busq1'>\n" +
                "    <div class='busq_container1'>\n" +
                "    <div class='cancion_container'>" +
                "        <img alt='cancion' src=" + allMusic[i].img+ ">\n" +
                // "            <div class='overlay_fav'>\n" +
                "                <button type='button' onclick='chooseMusic(" +(i+1)+ ")'>\n" +
                "                    <i class='fa-regular fa-circle-play'></i>\n" +
                "                </button>\n" +
                "    </div>\n" +
                "    </div>\n" +
                "    <div class='titulo_artista_busq'>\n" +
                "        <p><b>" + allMusic[i].name + "</b></p> <p id='artista' onclick='artista_pagina(" + index_artist+ ") '>" +allMusic[i].artist+"</p>\n" +
                "    </div>\n" +
                "    <div class='guardar_lista'>\n" +
                "    <p>\n" +
                "        <i class='fa-solid fa-plus' id='"+ allMusic[i].name+"_agregar' onclick='agregar_a_lista("+i+")'>  </i>\n" +
                "    </p>\n" +
                "    </div>\n" +
                "</div>"
        }
    }
}

// Función para agregar canciones a la lista de reproducción
function agregar_a_lista(index){
    let eliminar = document.getElementById(allMusic[index].name +"_agregar");
    misListas[misListas.length-1].canciones.push(allMusic[index].name);
    alert("Song added to the playlist");
    eliminar.className = 'fa-solid fa-check';
}

