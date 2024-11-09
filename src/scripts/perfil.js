// Módulo para mostrar el perfil de un usuario

// Ordenamos las canciones favoritas
let canciones_favoritas = [].concat(allMusic);
canciones_favoritas.sort(function (a, b){return b.fav-a.fav});

// Perfil de usuario seguido
function perfil_seguidos(index) {
    let artista_pag = document.getElementsByClassName('artistas_pagina')[0];
    let usuario = document.getElementById('usuario');

    usuario.innerHTML = "<h2>Perfil de usuario0"+index+"</h2>";
    artista_pag.style.visibility = 'visible';

}

// Perfil de usuario registrado
function perfil(){
    // Sección canciones favoritas
    let cancion_favorita = document.getElementsByClassName('seccion_imagenes_fav')[0];

    cancion_favorita.innerHTML = '';
    for (let index=1; index<=allMusic.length; index++) {

        if (canciones_favoritas[index - 1].fav === true) {
            cancion_favorita.innerHTML += '<div class = "cancion" >\n' +
                '            <div class="cancion_container">\n' +
                '              <img alt="cancion" src=' + canciones_favoritas[index-1].img + ' class = "can_fav">\n' +
                // '              <div class="overlay">\n' +
                '                <button type = "button" onclick= "chooseMusic(allMusic'+ index +')">\n' +
                '                  <i class="fa-regular fa-circle-play"></i>\n' +
                '                </button>\n' +
                // '              </div>\n' +
                '            </div>\n' +
                '            <div class = "titulo_artista">\n' +
                '               <p>' + canciones_favoritas[index-1].name + '<br>' + canciones_favoritas[index-1].artist +'</p>' +
                '            </div>\n' +
                '          </div>'
        }
    }
    let seccion = document.getElementById('favoritos');
    if (cancion_favorita.innerHTML === ''){
        seccion.style.display = 'none';
    }else{
        seccion.style.display = 'block';
    }


    // Sección listas de reproducción
    let listas_perfil = document.getElementsByClassName('seccion_imagenes_listas')[0];
    listas_perfil.innerHTML = '';
    for (let index=1; index<=LISTASREPRODUCCION.length; index++) {
        listas_perfil.innerHTML += '<div class = "cancion" onclick="lista_reproduccion('+ (index-1) +')">\n' +
            '            <div class="cancion_container" >\n' +
            '              <img alt="cancion" src=' + LISTASREPRODUCCION[index-1].imagen + '>\n' +
            '             </div>\n' +
            '            <div class = "titulo_artista">\n' +
            '               <p>' + LISTASREPRODUCCION[index-1].nombre + '</p>' +
            '            </div>\n' +
            '          </div>';

    }
    let listas_seccion = document.getElementById('listas');
    if (listas_perfil.innerHTML === ''){
        listas_seccion.style.display = 'none';
    }else{
        listas_seccion.style.display = 'block';
    }

}

