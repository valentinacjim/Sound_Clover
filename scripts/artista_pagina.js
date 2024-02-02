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
    canciones.innerHTML = '<div class="titulos_secciones"><h1> Canciones populares </h1> </div>';
    for (let index=0; index<allArtistas[indexFav].canciones.length; index++) {
        if (index > 9){
            break;
        }
        let fav = isFavorite(allArtistas, index);
        let random_song = Math.floor(Math.random() * allArtistas[indexFav].canciones.length);
        let eq_random_song = allMusic.find(element => element.name == allArtistas[indexFav].canciones[random_song].name);
        canciones.innerHTML+= '<div>'+
            '<div class="cancion_artista">' +
                '<div class="info">' +
                    '<div class="img_cancion">' +
                    '<img src=' + allArtistas[indexFav].canciones[random_song].img + ' alt="cancion">' +
                    '</div>' +
                    '<div class="nombre_cancion">' +
                    '<p>' + allArtistas[indexFav].canciones[random_song].name + '</p>' + 
                    '</div>' +  
                '</div>' +
                '<div class="config">' +
                    '<i class="'+fav+'" onclick="agregar_fav('+ eq_random_song +')"></i>' +
                    '<i class="fa-regular fa-circle-play" onclick="chooseMusic(allMusic, '+ (eq_random_song+1) +')"></i>' +
                    '<button class="fa-regular fa-ellipsis-h"></button>' +
                    '<i class="fa-solid fa-bars"></i>'+
                '</div>' +
            '</div>' +
        '</div>'
    }
    
    
}

// let artistBar = document.getElementsByClassName('artist-bar')[0];
// ARTISTA_PAGE.addEventListener('scroll', () => {
//     const scrollPosition = window.scrollY;
//     console.log(scrollPosition)
//     artistBar.style.opacity = 1 - scrollPosition / 100;
// });