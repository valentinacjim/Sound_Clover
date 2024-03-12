// Módulo para mostrar las listas del usuario

let isList = true; 

// Función para mostrar las listas del usuario
function listas_display() {
    let playlist = document.getElementsByClassName("playlists")[0];
    if (isList) {
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
    } else {
        playlist.innerHTML = "<div class='playlist_grid' onclick='lista_reproduccion(-1)'>\n" +
        "          <div class='play_canc_container'>\n" +
        "          <img alt='playlist' src='images/playlist_fav.png'>\n" +
        "          </div>\n" +
        "          </div>\n" ;

        LISTASREPRODUCCION.forEach((lista, index) => {
            if (lista.canciones.length > 0) {
                playlist.innerHTML += "<div class='playlist_grid' onclick='lista_reproduccion(" + (index) + ")'>\n" +
                    "          <div class='play_canc_container'>\n" +
                    "          <img alt='playlist' src=" + lista.imagen + ">\n" +
                    "          </div>\n" +
                    "       </div>"
            }
        });
    }

}

// Función para eliminar una lista
function eliminar_list(index_list){
    LISTASREPRODUCCION.splice(index_list, 1);
    alert('Lista de reproducción eliminada');
    listas_display();
}

function change_view(){
    isList = !isList;
    listas_display();
    document.getElementById("list").style.display = isList ? "block" : "none";
    document.getElementById("grid").style.display = isList ? "none" : "block";
}
