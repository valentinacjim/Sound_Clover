// Módulo para las listas de reproducción

function lista_reproduccion(index) {

    // let lista_reproduccion = document.getElementsByClassName('lista_reproducción')[0];

    playlist.style.visibility = 'visible';

    let playlist_content = document.getElementsByClassName("playlist_content")[0];

    let cover_playlist = document.getElementById('cover_playlist');
    let background = document.getElementsByClassName('nombre-playlist')[0];
    let nombre_playlist = document.getElementById('nombre-playlist');

    // Lista de canciones favoritas
    if(index===-1){
        cover_playlist.src = 'images/playlist_fav.png';
        nombre_playlist.innerHTML = 'Favorites songs';
        background.style.backgroundColor = "#9396B0";
        // background.style.backgroundSize = "cover";
        // nombre_playlist.style.backfaceVisibility = "";
        playlist_content.innerHTML = ""

        for (let i = 0; i < allMusic.length; i++) {
            let fav = '';
            let index_artist = 0;
            if (allMusic[i].fav === true) {
                fav = "fa-solid fa-heart";

            } else {
                fav = "fa-regular fa-heart";
            }
            for(let j=0; j<allArtistas.length; j++){
                if (allMusic[i].artist === allArtistas[j].name){
                    index_artist = allArtistas[j].index;
                }
            }
            if (canciones_favoritas[i].fav === true) {
                playlist_content.innerHTML += "" +
                    "<div class='busq2' id='busq2'>\n" +

                    "<div class='busq3' id='busq3'>" +
                    "<button class='drag_and_drop'>\n" +
                    "<i class='fa-solid fa-ellipsis-vertical'></i>" +
                    "</button>" +
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
                    "        <p><b>" + allMusic[i].name + "</b></p> <p id='artista' onclick='artista_pagina(" + index_artist + ") '>" + allMusic[i].artist + "</p>\n" +
                    "    </div >\n" +
                    "    <p class='favor'>\n" +
                    "        <i class='" + fav + "' id='" + allMusic[i].name + "_search' onclick='agregar_fav(" + (i) + ")'></i>\n" +
                    "    </p>\n" +
                    "</div>" +
                    "</div>";
            }

        }

    }else{


    cover_playlist.src = misListas[index].imagen;
    nombre_playlist.innerHTML = misListas[index].nombre;
    for(let i=0; i<allImagePlaylists.length; i++){
        if(misListas[index].imagen === allImagePlaylists[i].name){
            background.style.backgroundColor = allImagePlaylists[i].color;
        }
    }

    // Contenido de la lista de reproducción
    playlist_contenido(index, playlist_content);
    }
}


function back_listas(){
    let lista_rep_fav = document.getElementsByClassName('lista_reproducción')[0];

    lista_rep_fav.style.visibility = 'hidden';
}

// Función para eliminar una canción de una lista de reproducción
function eliminar_canc(index_list, index_canc){
    //let eliminado = document.getElementById(allMusic[index_canc].name +"_borrar");
    misListas[index_list].canciones.splice(index_canc, 1);
    alert('Song deleted from the playlist');
    //eliminado.display = 'none';
    let playlist_content = document.getElementsByClassName("playlist_content")[0];
    playlist_contenido(index_list, playlist_content);
}

// Función para mostrar una lista de reproducción
function playlist_contenido(index, playlist_content) {
    playlist_content.innerHTML = "";
    for (let i = 0; i < allMusic.length; i++) {
        let fav = '';
        let index_artist = 0;
        if (allMusic[i].fav === true) {
            fav = "fa-solid fa-heart";

        } else {
            fav = "fa-regular fa-heart";
        }
        for (let j = 0; j < allArtistas.length; j++) {
            if (allMusic[i].artist === allArtistas[j].name) {
                index_artist = allArtistas[j].index;
            }
        }

        // Si la canción está en la lista de reproducción
        if (misListas[index].canciones.includes(allMusic[i].name)) {
            playlist_content.innerHTML += "" +
                "<div class='busq2' id='" + allMusic[i].name + "_borrar'\n>\n" +

                "<div class='busq3' id='busq3'\n>\n" +
                "<button class='drag_and_drop'>\n" +
                "<i class='fa-solid fa-ellipsis-vertical'></i>" +
                "</button>" +
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
                "        <p><b>" + allMusic[i].name + "</b></p> <p id='artista' onclick='artista_pagina(" + index_artist + ") '>" + allMusic[i].artist + "</p>\n" +
                "    </div>\n" +
                "    <p class='favor'>\n" +
                "        <i class='" + fav + "' id='" + allMusic[i].name + "_search' onclick='agregar_fav(" + (i) + ")'></i>\n" +
                "    </p>\n" +
                "    <p class='minus'>\n" +
                "        <i class='fa-solid fa-minus' onclick='eliminar_canc(" + index + "," + misListas[index].canciones.indexOf(allMusic[i].name) + ")'></i>\n" +
                "    </p>\n" +
                "</div>" +
                "</div>"
        }
    }
}
