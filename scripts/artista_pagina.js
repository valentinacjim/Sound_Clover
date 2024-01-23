// Módulo de la página del artista
function artista_pagina(indexFav){
    ARTISTA_PAGE.style.visibility = 'visible';

    // Crear la estructura
    let fondo = document.getElementById('fondo-artista');
    let foto_perfil = document.getElementById('perfil-artista');
    let artista = document.getElementsByClassName('nombre-artista')[0];
    let albumes = document.getElementsByClassName('artista-albumes-seccion')[0];
    let canciones = document.getElementsByClassName('artista-canciones')[0];

    // Rellenar álbumes
    albumes.innerHTML='<div class="titulos_secciones"><h1> Álbumes </h1> </div>';
    for(let al=1; al<=allArtistas[indexFav-1].albumes.length; al++) {
        albumes.innerHTML += '<div class = "album" onclick="albumes('+ (indexFav-1) +',' + (al-1) +')"> ' +
            '<div class="cancion_container">' +
            '<img src=' + allArtistas[indexFav-1].albumes_foto[al-1] + ' alt="cancion">' +
            '</div>  ' +
            '<div class = "album_nombre"> ' +
            '<p>' + allArtistas[indexFav-1].albumes[al-1] +'</p> ' +
            '</div> ' +
            '</div>';

    }
    fondo.src = allArtistas[indexFav-1].foto_fondo;
    foto_perfil.src = allArtistas[indexFav-1].perfil;
    artista.innerHTML = allArtistas[indexFav-1].name;

    // // Rellenar canciones
    // canciones.innerHTML = '<div class="titulos_secciones"><h1> Canciones </h1> </div>';
    // for (let index=1; index<=allMusic.length; index++) {
    //     if (allMusic[index - 1].artist.includes(allArtistas[indexFav-1].name)){
    //         canciones.innerHTML += '<div class = "cancion_favorita" >\n' +
    //             '            <div class="favorita_container">\n' +
    //             '              <img alt="cancion" src=' + allMusic[index-1].img + ' class = "can_fav">\n' +
    //             '              <div class="overlay">\n' +
    //             '                <button type = "button" onclick= "chooseMusic(allMusic'+ index +')">\n' +
    //             '                  <i class="fa-regular fa-circle-play"></i>\n' +
    //             '                </button>\n' +
    //             '              </div>\n' +
    //             '            </div>\n' +
    //             '            <div class = "titulo_artista">\n' +
    //             '               <p>' + allMusic[index-1].name + '<br>' + allMusic[index-1].artist +'</p>' +
    //             '            </div>\n' +
    //             '          </div>'
    //     }
    // }
}