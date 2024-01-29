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
    console.log(allArtistas[indexFav].albumes)
    albumes.innerHTML='<div class="titulos_secciones"><h1> Álbumes </h1> </div>';
    for(let al=0; al<allArtistas[indexFav].albumes.length; al++) {
        albumes.innerHTML += '<div class = "album" onclick="albumes('+ (indexFav) +',' + (al) +')"> ' +
            '<div class="cancion_container">' +
            '<img src=' + allArtistas[indexFav].albumes[al].img + ' alt="cancion">' +
            '</div>  ' +
            '<div class = "album_nombre"> ' +
            '<p>' + allArtistas[indexFav].albumes[al].name +'</p> ' +
            '</div> ' +
            '</div>';

    }
    fondo.src = allArtistas[indexFav].foto_fondo;
    foto_perfil.src = allArtistas[indexFav].perfil;
    artista.innerHTML = allArtistas[indexFav].name;

    // Rellenar canciones
    canciones.innerHTML = '<div class="titulos_secciones"><h1> Canciones </h1> </div>';
    for (let index=0; index<allMusic.length; index++) {
        if (allMusic[index].artist.includes(allArtistas[indexFav].name)){
            canciones.innerHTML += '<div class = "cancion" >\n' +
                '            <div class="cancion_container">\n' +
                '              <img alt="cancion" src=' + allMusic[index].img + ' class = "can_fav">\n' +
                // '              <div class="overlay">\n' +
                // '                <button type = "button" onclick= "chooseMusic(allMusic'+ index +')">\n' +
                // '                  <i class="fa-regular fa-circle-play"></i>\n' +
                // '                </button>\n' +
                // '              </div>\n' +
                '            </div>\n' +
                '            <div class = "titulo_artista">\n' +
                '               <p>' + allMusic[index].name + '</p>' +
                '            </div>\n' +
                '          </div>'
        }
    }

    
}