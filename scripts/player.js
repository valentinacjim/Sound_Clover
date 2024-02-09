// Módulo para el reproductor

let  shuffle = false;
const MODES = ["NO_REPEAT", "REPEAT_LIST", "REPEAT_SONG"];
let  mode_player = MODES[0];


// Cargar información de la canción
function loadMusic(indexNumb){
    let musicImg = document.getElementById("caratula");
    let musicName = document.getElementById("cancion_actual");
    let musicArtist = document.getElementById("artista");
    let musicPlaying = document.getElementById("main_audio");

    if (indexNumb === 0){
        indexNumb = list.length;
    }
    musicName.innerHTML = list[indexNumb-1].name;
    musicArtist.innerHTML = list[indexNumb-1].artist;
    musicImg.src = list[indexNumb-1].img;
    musicPlaying.src = list[indexNumb-1].audio;
    // queue_content();
}

// Función para pasar a la siguiente canción
function nextMusic() {

    if (shuffle === true){
        musicIndex = Math.ceil(Math.random() * list.length);
    }
    else {
        if (musicIndex === list.length && mode_player === MODES[1]) {
            musicIndex = 1;
        } else if (musicIndex === list.length && mode_player === MODES[0]) {
            musicIndex = Math.ceil(Math.random() * list.length);
        } else if (musicIndex === list.length && mode_player !== MODES[2]) {
            musicIndex++;
        } else{
            musicIndex++;
        }
    }

    loadMusic(musicIndex);
    play = false;
    favorito()
    reproduccion();
    queue_content();

}

// Función para pasar a la canción anterior
function prevMusic() {
    if (shuffle === true){
        musicIndex = Math.floor(Math.random() * list.length) + 1;
    }else {
        if (musicIndex === 1 && mode_player === MODES[1]) {
            musicIndex = list.length;
        } else if (musicIndex === 1 && mode_player === MODES[0]) {
            musicIndex = Math.floor(Math.random() * list.length) + 1;
        }
        else if (musicIndex === 1 && mode_player !== MODES[2]) {
            musicIndex--;
        } else {
            musicIndex--;
        }
    }
    loadMusic(musicIndex);
    play = false;
    favorito();
    reproduccion();
    queue_content();

}

// Función para seleccionar una canción
function chooseMusic(lista, indexNumb){
    list = lista
    LYRICS_PAGE.style.visibility = 'hidden';
    let player = document.getElementsByClassName("pie")[0];
    player.style.visibility = 'visible';

    loadMusic(indexNumb);
    elementos();
    play = false;
    reproduccion();
    musicIndex = indexNumb;
    queue_content();
    favorito();
}

// Función para reproducir la canción
function reproduccion(){

    let icono = document.getElementById('estado');
    let musicPlaying = document.getElementById("main_audio");

    if((musicPlaying.ended === false) && play===true){
        musicPlaying.pause();
        icono.className = "fa-solid fa-play";
        play = false;
        document.querySelector(".caratula").classList.remove("active");
    }else{
        musicPlaying.play();
        icono.className = "fa-solid fa-pause";
        play = true;
        document.querySelector(".caratula").classList.add("active");
    }
    if(musicPlaying.ended === true){
        if (mode_player === MODES[1]){
            nextMusic();
        } else if (mode_player === MODES[2]){
            musicPlaying.play();
        } else if (mode_player === MODES[0] && shuffle === false){
            nextMusic();
        }
        queue_content();
    }
}
// Función para agregar canciones a favoritos
// function agregar(){
//     if( allMusic[musicIndex-1].fav === true){
//         fav.className = "fa-regular fa-heart";
//         allMusic[musicIndex-1].fav = false;
//         alert('Removed from favorite');

//     }else{
//         fav.className = "fa-solid fa-heart";
//         allMusic[musicIndex-1].fav = true;
//         alert('Added to favorite');

//     }
// }

// Función para mostrar favorito
function favorito(){
    if( allMusic[musicIndex-1].fav === true){
        fav.className = "fa-solid fa-heart";

    }else{
        fav.className = "fa-regular fa-heart";
    }
}

function shuffle_music(){
    let icono = document.getElementById('shuffle');
    suffle = !suffle;
    icono.style.color = shuffle ? '#8f0fe1' : '#ebe0ff';
}

function mode(){
    let icono = document.getElementById('repeat');
    let repeat_song = document.getElementById('repeat_song');
    if (mode_player === MODES[0]){
        icono.style.color = '#8f0fe1'
        mode_player = MODES[1];
    }else if(mode_player === MODES[1]){
        repeat_song.style.visibility = 'visible';
        mode_player = MODES[2];
    } else if (mode_player === MODES[2]){
        icono.style.color = '#ebe0ff';
        repeat_song.style.visibility = 'hidden';
        mode_player = MODES[0];
    }
}

function queue(){
    let icono = document.getElementById('queue');
    let queue_pag = document.getElementsByClassName('page')[11];
    if (queue_pag.style.visibility === 'hidden'){
        icono.style.color = '#8f0fe1'
        queue_pag.style.visibility = 'visible';
        // queue_content();
    } else {
        icono.style.color = '#ebe0ff';
        queue_pag.style.visibility = 'hidden';
    }
}

async function displaylyrics(){
    let lyrics = document.getElementsByClassName('playlist_content')[1];
    let icono = document.getElementById('lyrics');
    let musicPlaying = document.getElementById("main_audio");
    // console.log(lyrics);
    let lrc;
    if (LYRICS_PAGE.style.visibility === 'hidden') {
        icono.style.color = '#8f0fe1'
        LYRICS_PAGE.style.visibility = 'visible';

        // abrir archivo lrc
        let lrc_file = await fetch(allMusic[musicIndex-1].lrc);
        lrc = await lrc_file.text();
        // console.log(lrc);
        // console.log(lrc_file);

        // convertir lrc a array
        let lrc_array = lrc.split('\n');
        // console.log(lrc_array);

        // convertir lrc a objeto
        let lrc_obj = {};
        for (let i = 0; i < lrc_array.length; i++) {
            let time = lrc_array[i].split(']')[0].replace('[', '');
            let lyric = lrc_array[i].split(']')[1];
            lrc_obj[time] = lyric;
        }
        // console.log(lrc_obj);

        // mostrar lrc
        let lrc_time = musicPlaying.currentTime;
        let lrc_time_min = Math.floor(lrc_time / 60);

        let lrc_time_sec = Math.floor(lrc_time % 60);
        if (lrc_time_sec < 10) {
            lrc_time_sec = '0' + lrc_time_sec;
        }
        let lrc_time_current = '[' + lrc_time_min + ':' + lrc_time_sec + ']';
        lyrics.innerHTML = lrc_obj[lrc_time_current];
    } else {
        icono.style.color = '#ebe0ff';
        LYRICS_PAGE.style.visibility = 'hidden';
    }

}

function queue_content(){
    // console.log(musicIndex);
    let queue_content = document.getElementById('queue_content');
    queue_content.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        console.log(i, musicIndex-1)
            let fav = isFavorite(list[i]);
        if (i === musicIndex-1) {
            let queue_element = document.getElementById('playing');
            queue_element.innerHTML = queueElementFunction(i, fav)


        } else if( i > musicIndex-1 && i<=50){
            queue_content.innerHTML += queueElementFunction(i, fav)

        }
    }
    queue_content.innerHTML += "" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>"
}

function queueElementFunction(i, fav) {
    return "" +
        "<div class='queue_element'\n>\n" +

        "<div class='busq3' id='busq3'\n>\n" +

        "    <div class='queue_container'>\n" +

        cancion_container_script(i) +
        "    </div>\n" +
        "    <div class='titulo_artista_queue'>\n" +
                "<p><b>" + list[i].name + "</b></p>\n" +
        artists(list[i].artist) +
        "    </div>\n" +
        "    <p class='favor_queue'>\n" +
        "        <i class='" + fav + "' id='" + list[i].name + "_queue' onclick='agregar_fav(" + (i) + ")'></i>\n" +
        "    </p>\n" +
        "</div>" +
        "</div>";
}


