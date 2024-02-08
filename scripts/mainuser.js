let musicIndex = 1;
let play = false;
const HOME_PAGE = document.getElementsByClassName("musica")[0];
const DISCOVER_PAGE = document.getElementsByClassName("page")[0];
const GENRE_PAGE = document.getElementsByClassName("page")[1];
const PLAYLISTS_PAGE = document.getElementsByClassName("page")[2];
const CREAR_PAGE = document.getElementsByClassName("page")[3];
const SEARCH_PAGE = document.getElementsByClassName("page")[4];
const PERFIL_PAGE = document.getElementsByClassName("page")[5];
const CONTENT_PLAYLIST_PAGE = document.getElementsByClassName("page")[6];
const ARTISTA_PAGE = document.getElementsByClassName("page")[7];
const USUARIO_PAGE = document.getElementsByClassName("page")[8];
const CUENTA_PAGE = document.getElementsByClassName("page")[9];
const LYRICS_PAGE = document.getElementsByClassName("page")[10];
const QUEUE_PAGE = document.getElementsByClassName("page")[11];
const PAGES = [HOME_PAGE, DISCOVER_PAGE, PLAYLISTS_PAGE, CREAR_PAGE, SEARCH_PAGE, PERFIL_PAGE, CONTENT_PLAYLIST_PAGE, ARTISTA_PAGE, USUARIO_PAGE, CUENTA_PAGE, LYRICS_PAGE, QUEUE_PAGE];


let player = document.getElementsByClassName("pie")[0];
let player_cancion = document.getElementById("cancion_actual");
if (player_cancion.innerHTML === "Canción actual"){
    player.style.visibility = 'hidden';
}

// Funciones de cambiar de página
function see_page(page) {
    historial.push(page)
    for (let i = 0; i < PAGES.length; i++) {
        if (i===page){
            PAGES[i].style.visibility = 'visible';
            if (i===2){
                listas_display();
            }
            if (i===3){
                let search = document.getElementsByClassName("resultados_1")[0];
                search.innerHTML='';

                // Crear lista de reproducción
                LISTASREPRODUCCION.push({nombre: "Nueva lista de reproducción " + (LISTASREPRODUCCION.length+1),
                    canciones: [],
                    // audio: [],
                    imagen:'images/playlist.png'});
            }
            else{
                //limpiar campos
                let nombre = document.getElementById("nombre_lista");
                let descripcion = document.getElementById("search_for_list");
                let imagen = document.getElementById("imagen_playlist");
                nombre.value = '';
                descripcion.value = '';
                imagen.value = '';
            }
            if (i===4){
                buscar()
            }

            if (i===5){
                perfil();
            }
            if (i===9){
                cuenta();
            }

        }else {
            PAGES[i].style.visibility = 'hidden';
        }
    }
    GENRE_PAGE.style.visibility = 'hidden';
}

function genre_page(gen) {
    GENRE_PAGE.style.visibility = 'visible';
    for (let i = 0; i < PAGES.length; i++) {
        PAGES[i].style.visibility = 'hidden';
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
    let shuffle = document.getElementById('shuffle');
    let repeat = document.getElementById('repeat');
    let lyrics = document.getElementById('lyrics');
    let queue = document.getElementById('queue');


    try{
        if (JSON.parse(getCookie(getCookie('Activa'))).imagen === 'images/fotoperfil/'){
            fotoperfil.innerHTML= `<i class="fa-regular fa-user"</i>`}
        else{ fotoperfil.innerHTML= "<img src=" + JSON.parse(getCookie(getCookie('Activa'))).imagen + ">";}
    }catch (e) {
        fotoperfil.innerHTML= `<i class="fa-regular fa-user"</i>`;
    }


    estado.addEventListener('click', reproduccion);
    favorito.addEventListener('click', ()=>{agregar_fav(musicIndex-1)});
    shuffle.addEventListener('click', shuffle_music);
    repeat.addEventListener('click', mode);
    // lyrics.addEventListener('click', see_page(10));
    // queue.addEventListener('click', displayqueue);
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




// Función para cerrar sesión
function cerrar_sesion() {
    let respuesta = confirm('Are you sure you want to log out?');
    if (respuesta === true) {
        window.location.href = "Main.html";
    }else{
        window.location.href = "MainUser.html";
    }
}





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
    titulo.innerHTML = allGeneros[genero].name;
    for (let i = 0; i < allMusic.length; i++) {
        if (allGeneros[genero].canciones.includes(allMusic[i].name)) {
            contenido.innerHTML += "<div class='cancion'\n>\n" +
                cancion_container_script(i)+
                " <div class='titulo_artista'>\n" +
                "    <p onclick='alertas()'>" + allMusic[i].name + "<br> "+allMusic[i].artist +" </p>\n" +
                " </div>\n" +
                "</div>"
        }
    }
    // contenido.innerHTML += "<div class='spacer-3'\n>\n";
}






