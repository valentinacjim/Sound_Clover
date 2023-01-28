let musicIndex = 1;
let play = false;
let home_pag = document.getElementsByClassName("musica")[0];
let discover = document.getElementsByClassName("page")[0];
let genre = document.getElementsByClassName("page")[1];
let mis_playlists = document.getElementsByClassName("page")[2];
let crear = document.getElementsByClassName("page")[3];
let cuenta_pag = document.getElementsByClassName("page")[4];
let perfil_pag = document.getElementsByClassName("page")[5];
let playlist = document.getElementsByClassName("page")[6];
let artista_pag = document.getElementsByClassName("page")[7];
let usuarios = document.getElementsByClassName("page")[8];
// let genre = document.getElementsByClassName("page")[1];
let allPages = [home_pag, discover, mis_playlists, crear, cuenta_pag, perfil_pag, playlist, artista_pag, usuarios];

// function home(){
//     let home = document.getElementsByClassName('musica')[0];
//     let mis_listas = document.getElementsByClassName('mis_listas')[0];
//     let crear_lista = document.getElementsByClassName('crear_lista')[0];
//     let cuenta = document.getElementsByClassName('cuenta')[0];
//     let perfil = document.getElementsByClassName('perfil')[0];
//     let seguidos = document.getElementsByClassName('artistas_pagina')[0];
//     let artista_pag = document.getElementsByClassName('artistas_pagina')[1];
//     let resultados = document.getElementsByClassName('busqueda')[0];
//     let lista_reproduccion = document.getElementsByClassName('lista_reproducción')[0];
//     let albumes = document.getElementsByClassName('albumes')[0];
//
//
//     home.style.visibility = 'visible';
//     mis_listas.style.visibility = 'hidden';
//     crear_lista.style.visibility = 'hidden';
//     cuenta.style.visibility = 'hidden';
//     perfil.style.visibility = 'hidden';
//     seguidos.style.visibility = 'hidden';
//     artista_pag.style.visibility = 'hidden';
//     resultados.style.visibility = 'hidden';
//     lista_reproduccion.style.visibility = 'hidden';
//     albumes.style.visibility = 'hidden';
// }


// Funciones de cambiar de página
function see_page(page) {
    for (let i = 0; i < allPages.length; i++) {
        if (i===page){
            allPages[i].style.visibility = 'visible';
            if (i===2){
                listas_display();
            }
            if (i===3){
                let search = document.getElementsByClassName("resultados_1")[0];
                search.innerHTML='';

                // Crear lista de reproducción
                misListas.push({nombre: "Nueva lista de reproducción " + (misListas.length+1),
                    canciones: [],
                    imagen:'images/playlist.png'});
            }
        }else {
            allPages[i].style.visibility = 'hidden';
        }
    }
    genre.style.visibility = 'hidden';
}

function genre_page(gen) {
    genre.style.visibility = 'visible';
    for (let i = 0; i < allPages.length; i++) {
        allPages[i].style.visibility = 'hidden';
    }
    genre_content(gen)
}


function elementos(){
    let barra = document.getElementsByClassName('barra')[0];
    let progreso = document.getElementsByClassName('progreso')[0];
    let proximo = document.getElementsByClassName("forw")[0];
    let anterior = document.getElementsByClassName("prev")[0];
    let estado = document.getElementsByClassName('max')[0];
    let favorito = document.getElementsByClassName('favorito')[0];
    let dur = document.getElementsByClassName('dur')[0];
    let tiempo = document.getElementsByClassName('pro')[0];
    let musicPlaying = document.getElementById("main_audio");
    let volumen = document.querySelector('.volume');
    let fotoperfil = document.getElementById('fotoperfil');

    try{
        if (JSON.parse(getCookie(getCookie('Activa'))).imagen === 'images/fotoperfil/'){
            fotoperfil.innerHTML= `<i class="fa-regular fa-user"</i>`}
        else{ fotoperfil.innerHTML= "<img src=" + JSON.parse(getCookie(getCookie('Activa'))).imagen + ">";}
    }catch (e) {
        fotoperfil.innerHTML= `<i class="fa-regular fa-user"</i>`;
    }


    estado.addEventListener('click', reproduccion);
    favorito.addEventListener('click', agregar);
    proximo.addEventListener('click', ()=>{nextMusic();})
    anterior.addEventListener('click', ()=>{prevMusic();})
    volumen.addEventListener('input', function(){
        musicPlaying.volume = this.value
    })
    barra.addEventListener('click',(e)=>{
        // Mostrar progreso
        let anchoprogresoval = barra.clientWidth;
        let clickedOffSetX = e.offsetX;
        let songDuration = musicPlaying.duration;
        musicPlaying.currentTime = (clickedOffSetX / anchoprogresoval) * songDuration;

        play = play === false;
        reproduccion();
    })

    musicPlaying.addEventListener('timeupdate', (e)=>{
        // Actualizar progreso
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        let anchoprogreso = (currentTime/duration)*100;
        progreso.style.width = anchoprogreso + '%';

        musicPlaying.addEventListener("loadeddata", ()=>{
            let audioDuration = musicPlaying.duration;

            let totalMin = Math.floor(audioDuration/60);
            let totalSec = Math.floor(audioDuration%60);
            if (totalSec<10){
                dur.innerHTML = totalMin + ":0" + totalSec;
            } else {
                dur.innerHTML = totalMin + ":" + totalSec;
            }});

        let currentMin = Math.floor(currentTime/60);
        let currentSec = Math.floor(currentTime%60);

        if (currentSec<10){
            tiempo.innerHTML = currentMin + ":0" + currentSec;
        } else {
            tiempo.innerHTML = currentMin + ":" + currentSec;
        }
    });
}

// Función para agregar canciones a favoritos
function agregar(){
    if( allMusic[musicIndex-1].fav === true){
        fav.className = "fa-regular fa-heart";
        allMusic[musicIndex-1].fav = false;
        alert('Canción eliminada de favoritos');

    }else{
        fav.className = "fa-solid fa-heart";
        allMusic[musicIndex-1].fav = true;
        alert('Canción agregada a favoritos');

    }
}

// Función para mostrar favorito
function favorito(){
    if( allMusic[musicIndex-1].fav === true){
        fav.className = "fa-solid fa-heart";

    }else{
        fav.className = "fa-regular fa-heart";
    }
}

// Función para cerrar sesión
function cerrar_sesion() {
    let respuesta = confirm('¿Seguro que quieres cerrar sesión?');
    if (respuesta === true) {
        window.location.href = "Main.html";
    }else{
        window.location.href = "MainUser.html";
    }
}


window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
    elementos();
})

window.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const url = e.target.getAttribute('href');
        window.location.href = '#' + url;
    }
})

// Función para conseguir el valor de una cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function genre_content(genero){
    let titulo = document.getElementsByClassName("nombre_genero")[0];
    let cover = document.getElementById("cover_genero");
    let contenido = document.getElementsByClassName("content")[0];
    contenido.innerHTML = "";
    cover.src = allGeneros[genero].imagen;
    console.log(cover);
    titulo.innerHTML = allGeneros[genero].name;
    for (let i = 0; i < allMusic.length; i++) {
        if (allGeneros[genero].canciones.includes(allMusic[i].name)) {
            contenido.innerHTML += "<div class='cancion'\n>\n" +
                " <div class='cancion_container'>\n" +
                "    <img src=" + allMusic[i].img + " alt='cancion_"+ allMusic[i].name +"' onclick='alertas()'>\n" +
                "<button type='button' onclick='chooseMusic("+(i+1)+")'>"+
                "    <i class='fa-regular fa-circle-play'></i>"+
                "</button>"+
                " </div>\n" +
                " <div class='titulo_artista'>\n" +
                "    <p onclick='alertas()'>" + allMusic[i].name + "<br> "+allMusic[i].artist +" </p>\n" +
                " </div>\n" +
                "</div>"
        }
    }
    // contenido.innerHTML += "<div class='spacer-3'\n>\n";
}






