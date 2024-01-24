// Módulo para mostrar las listas del usuario

// Función para mostrar las listas del usuario
function listas_display() {
    let playlist = document.getElementsByClassName("playlists")[0];
    playlist.innerHTML = "<div class='playlist' onclick='lista_reproduccion(-1)'>\n" +
        "          <div class='play_canc_container'>\n" +
        "          <img alt='playlist' src='images/playlist_fav.png'>\n" +
        "          </div>\n" +
        "          <div class='titulo_playlist'>\n" +
        "            <p>Favorites songs</p>\n" +
        "          </div>\n" +
        "        </div>";
    for (let index = 0; index < LISTASREPRODUCCION.length; index++) {
        if (LISTASREPRODUCCION[index].canciones.length > 0) {
            playlist.innerHTML += "<div class='playlist' onclick='lista_reproduccion(" + (index) + ")'>\n" +
                "          <div class='play_canc_container'>\n" +
                "          <img alt='playlist' src=" + LISTASREPRODUCCION[index].imagen + ">\n" +
                "          </div>\n" +
                "          <div class='titulo_playlist'>\n" +
                "            <p>" + LISTASREPRODUCCION[index].nombre + "<p>\n" +
                "          </div>\n" +
                "          <p class='minus_list'>\n" +
                "           <i class='fa-solid fa-minus' onclick='eliminar_list(" + index + ")'></i>\n" +
                "          </p>\n" +
                "        </div>" +
                "       </div>"
        }
    }
}

// Función para eliminar una lista
function eliminar_list(index_list){
    LISTASREPRODUCCION.splice(index_list, 1);
    alert('Lista de reproducción eliminada');
    listas_display();
}

