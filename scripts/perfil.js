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
    let home = document.getElementsByClassName('musica')[0];
    let mis_listas = document.getElementsByClassName('mis_listas')[0];
    let crear_lista = document.getElementsByClassName('crear_lista')[0];
    let perfil = document.getElementsByClassName('perfil')[0];
    let artista_pag = document.getElementsByClassName('artistas_pagina')[0];
    let seguidos = document.getElementsByClassName('artistas_pagina')[1];
    let resultados = document.getElementsByClassName('busqueda')[0];
    let lista_reproduccion = document.getElementsByClassName('lista_reproducción')[0];
    let albumes = document.getElementsByClassName('albumes')[0];
    let cuenta = document.getElementsByClassName('cuenta')[0];

    home.style.visibility = 'hidden';
    mis_listas.style.visibility = 'hidden';
    crear_lista.style.visibility = 'hidden';
    perfil.style.visibility = 'visible';
    artista_pag.style.visibility = 'hidden';
    seguidos.style.visibility = 'hidden';
    resultados.style.visibility = 'hidden';
    lista_reproduccion.style.visibility = 'hidden';
    albumes.style.visibility = 'hidden';
    cuenta.style.visibility = 'hidden';

    // Sección canciones favoritas
    let cancion_favorita = document.getElementsByClassName('seccion_imagenes_fav')[1];

    cancion_favorita.innerHTML = '';
    for (let index=1; index<=allMusic.length; index++) {

        if (canciones_favoritas[index - 1].fav === true) {
            cancion_favorita.innerHTML += '<div class = "cancion_favorita" >\n' +
                '            <div class="favorita_container">\n' +
                '              <img alt="cancion" src=' + canciones_favoritas[index-1].img + ' class = "can_fav">\n' +
                '              <div class="overlay">\n' +
                '                <button type = "button" onclick= "chooseMusic('+ index +')">\n' +
                '                  <i class="fa-regular fa-circle-play"></i>\n' +
                '                </button>\n' +
                '              </div>\n' +
                '            </div>\n' +
                '            <div class = "titulo_artista_fav">\n' +
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
    for (let index=1; index<=misListas.length; index++) {
        listas_perfil.innerHTML += '<div class = "division" onclick="lista_reproduccion('+ (index-1) +')">\n' +
            '            <div class="cancion_container" >\n' +
            '              <img alt="cancion" src=' + misListas[index-1].imagen + '>\n' +
            '             </div>\n' +
            '            <div class = "titulo_artista_listas">\n' +
            '               <p>' + misListas[index-1].nombre + '</p>' +
            '            </div>\n' +
            '          </div>'

    }
    let listas_seccion = document.getElementById('listas');
    if (listas_perfil.innerHTML === ''){
        listas_seccion.style.display = 'none';
    }else{
        listas_seccion.style.display = 'block';
    }

}

