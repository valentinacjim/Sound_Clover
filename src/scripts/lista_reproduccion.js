// Módulo para las listas de reproducción

let play_reproducir = -1

function lista_reproduccion(index) {

    // let lista_reproduccion = document.getElementsByClassName('lista_reproducción')[0];

    PLAYLISTS_PAGE.style.visibility = 'visible';

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
        // crear.style.backgroundColor = "#9396B0";

        for (let i = 0; i < allMusic.length; i++) {
            let fav = isFavorite(allMusic[i]);
            let index_artist = indexArtist(allMusic, i, index_artist);
            
            if (canciones_favoritas[i].fav === true) {
                playlist_content.innerHTML += "" +
                    "<div class='busq2' id='busq2'>\n" +

                    "<div class='busq3' id='busq3'>" +
                    "<button class='drag_and_drop'>\n" +
                    "<i class='fa-solid fa-ellipsis-vertical'></i>" +
                    "</button>" +
                    "    <div class='busq_container1'>\n" +

                    cancion_container_script(i) +
                    "    </div>\n" +
                    name_index_artist_script(allMusic, i, index_artist) +
                    "    <p class='favor'>\n" +
                    "        <i class='" + fav + "' id='" + allMusic[i].name + "_search' onclick='agregar_fav(" + (i) + ")'></i>\n" +
                    "    </p>\n" +
                    "</div>" +
                    "</div>";
            }

        }

    }else{


    cover_playlist.src = LISTASREPRODUCCION[index].imagen;
    nombre_playlist.innerHTML = LISTASREPRODUCCION[index].nombre;
    for(let i=0; i<(allImagePlaylists.length-1); i++){
        // console.log(LISTASREPRODUCCION[index].imagen);
        if(LISTASREPRODUCCION[index].imagen === allImagePlaylists[i].name){

            background.style.backgroundColor = allImagePlaylists[i].color;
            // crear.style.backgroundColor = allImagePlaylists[i].color;
            break;
        }
    }

    // Contenido de la lista de reproducción
    play_reproducir = index;
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
    LISTASREPRODUCCION[index_list].canciones.splice(index_canc, 1);
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
        isFavorite(allMusic[i]);
        index_artist = indexArtist(i, index_artist);

        // Si la canción está en la lista de reproducción
        if (LISTASREPRODUCCION[index].canciones.includes(allMusic[i].name)) {
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
                "                <button type='button' onclick='chooseMusic(allMusic" +(i+1)+ ")'>\n" +
                "                    <i class='fa-regular fa-circle-play'></i>\n" +
                "                </button>\n" +
                "    </div>\n" +
                "    </div>\n" +
                "    <div class='titulo_artista_busq'>\n" +
                artist_script(list, i, index_artist) +
                "    </div>\n" +
                "    <p class='favor'>\n" +
                "        <i class='" + fav + "' id='" + allMusic[i].name + "_search' onclick='agregar_fav(" + (i) + ")'></i>\n" +
                "    </p>\n" +
                "    <p class='minus'>\n" +
                "        <i class='fa-solid fa-minus' onclick='eliminar_canc(" + index + "," + LISTASREPRODUCCION[index].canciones.indexOf(allMusic[i].name) + ")'></i>\n" +
                "    </p>\n" +
                "</div>" +
                "</div>"
        }
    }
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn i')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function reproduccion_playlist(){
    console.log(play_reproducir);
    let playlist = []
    if (play_reproducir === -1){
        for(let i=0; i<allMusic.length; i++){
            if(allMusic[i].fav === true){
                playlist.push(allMusic[i]);
            }
        }
    }
    else{
    for(let i=0; i<allMusic.length; i++){
        if(LISTASREPRODUCCION[play_reproducir].canciones.includes(allMusic[i].name)){
            playlist.push(allMusic[i]);
        }
    }
    }
    // console.log(playlist);
    chooseMusic(playlist, 1);
}