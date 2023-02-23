// Módulo de los álbumes

function albumes(artista, album) {
    let albumes = document.getElementsByClassName('albumes')[0];

    albumes.style.visibility = 'visible';

    let album_content = document.getElementsByClassName("album_content")[0];

    let cover_albumes = document.getElementById('cover_albumes');
    let nombre_album = document.getElementsByClassName('nombre-album')[0];

    // Crear el artista y foto del artista
    cover_albumes.src = allArtistas[artista].albumes_foto[album];
    nombre_album.innerHTML = allArtistas[artista].albumes[album];
    album_contenido(artista, album, album_content);
}


function back_albumes() {
    let album = document.getElementsByClassName('albumes')[0];

    album.style.visibility = 'hidden';
}


function album_contenido(artista, album, album_content) {
    album_content.innerHTML = "";
    for (let i = 0; i < allMusic.length; i++) {
        let fav = '';
        let index_artist = 0;
        if (allMusic[i].fav === true) {
            fav = "fa-solid fa-heart";

        } else {
            fav = "fa-regular fa-heart";
        }
        // Rellenar el contenido del álbum
        if (allArtistas[artista].albumes_foto[album] === allMusic[i].img) {
            album_content.innerHTML += "" +
                "<div class='busq4' id='busq4'\n>\n" +
                "    <div class='busq_container'>\n" +
                "        <img src=" + allMusic[i].img + " alt='cancion'>\n" +
                "            <div class='overlay_fav'>\n" +
                "                <button type='button' onclick='chooseMusic(allMusic" + (i + 1) + ")'>\n" +
                "                    <i class='fa-regular fa-circle-play'></i>\n" +
                "                </button>\n" +
                "            </div>\n" +
                "    </div>\n" +
                "    <div class='titulo_artista_busq'>\n" +
                "        <p><b>" + allMusic[i].name + "</b></p> <p onclick='artista_pagina(" + index_artist + ") '>" + allMusic[i].artist + "</p>\n" +
                "    </div>\n" +
                "    <p class='favor'>\n" +
                "        <i class='" + fav + "' id='" + allMusic[i].name + "_search' onclick='agregar_fav(" + (i) + ")'></i>\n" +
                "</div>"
        }
    }
}
