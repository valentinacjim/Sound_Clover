// Módulo para mostrar las listas del usuario

// Función para mostrar las listas del usuario
function listas_display() {
    let playlist = document.getElementsByClassName("playlists")[0];
    playlist.innerHTML = "<div class=\"playlist\" onclick='lista_reproduccion(-1)'>\n" +
        "          <div class=\"play_canc_container\">\n" +
        "          <img alt='playlist' src=\"images/playlist_fav.png\">\n" +
        "          </div>\n" +
        "          <div class=\"titulo_playlist\">\n" +
        "            <p>Canciones favoritas</p>\n" +
        "          </div>\n" +
        "        </div>";
    for (let index = 0; index < misListas.length; index++) {
        if (misListas[index].canciones.length > 0) {
            playlist.innerHTML += "<div class='playlist'>" +
                "       <div class='lista' onclick='lista_reproduccion(" + (index) + ")'>\n" +
                "          <div class='play_canc_container'>\n" +
                "          <img alt='playlist' src=" + misListas[index].imagen + ">\n" +
                "          </div>\n" +
                "          <div class='titulo_playlist'>\n" +
                "            <p>" + misListas[index].nombre + "<p>\n" +
                "          </div>\n" +
                "        </div>" +
                "          <p class='minus_list'>\n" +
                "           <i class='fa-solid fa-minus' onclick='eliminar_list(" + index + ")'></i>\n" +
                "          </p>\n" +
                "       </div>"
        }
    }
}

// Función para eliminar una lista
function eliminar_list(index_list){
    misListas.splice(index_list, 1);
    alert('Lista de reproducción eliminada');
    listas_display();
}

