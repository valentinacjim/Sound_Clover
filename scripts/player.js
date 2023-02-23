// Módulo para el reproductor

let shuffle = false;
let mode_player = "no repeat";

// Cargar información de la canción
function loadMusic(indexNumb){
    let musicImg = document.getElementById("caratula");
    let musicName = document.getElementById("cancion_actual");
    let musicArtist = document.getElementById("artista");
    let musicPlaying = document.getElementById("main_audio")

    if (indexNumb === 0){
        indexNumb = list.length;
    }
    musicName.innerHTML = list[indexNumb-1].name;
    musicArtist.innerHTML = list[indexNumb-1].artist;
    musicImg.src = list[indexNumb-1].img;
    musicPlaying.src = list[indexNumb-1].audio;
}

// Función para pasar a la siguiente canción
function nextMusic() {
    if (shuffle === true){
        musicIndex = Math.floor(Math.random() * list.length) + 1;
    }else {
        if (musicIndex === list.length) {
            musicIndex = 1;
        } else {
            musicIndex++;
        }
    }

    loadMusic(musicIndex);
    play = false;
    favorito()
    reproduccion();

}

// Función para pasar a la canción anterior
function prevMusic() {
    if (shuffle === true){
        musicIndex = Math.floor(Math.random() * list.length) + 1;
    }else {
        if (musicIndex === 1) {
            musicIndex = list.length;
        } else {
            musicIndex--;
        }
    }
    loadMusic(musicIndex);
    play = false;
    favorito()
    reproduccion();

}

// Función para seleccionar una canción
function chooseMusic(lista, indexNumb){
    list = lista
    lyrics_pag.style.visibility = 'hidden';
    let player = document.getElementsByClassName("pie")[0];
    player.style.visibility = 'visible';

    loadMusic(indexNumb);
    elementos();
    play = false;
    reproduccion();
    musicIndex = indexNumb;
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
}
// Función para agregar canciones a favoritos
function agregar(){
    if( allMusic[musicIndex-1].fav === true){
        fav.className = "fa-regular fa-heart";
        allMusic[musicIndex-1].fav = false;
        alert('Removed from favorite');

    }else{
        fav.className = "fa-solid fa-heart";
        allMusic[musicIndex-1].fav = true;
        alert('Added to favorite');

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

function shuffle_music(){
    let icono = document.getElementById('shuffle');
    if(shuffle === false){
        icono.style.color = '#8f0fe1'
        shuffle = true;
    }else{
        icono.style.color = '#d0abda';
        shuffle = false;
    }
}

function mode(){
    let icono = document.getElementById('repeat');
    let repeat_song = document.getElementById('repeat_song');
    if (mode_player === 'no repeat'){
        icono.style.color = '#8f0fe1'
        mode_player = 'repeat list';
    }else if(mode_player === 'repeat list'){
        repeat_song.style.visibility = 'visible';
        mode_player = 'repeat song';
    } else if (mode_player === 'repeat song'){
        icono.style.color = '#d0abda';
        repeat_song.style.visibility = 'hidden';
        mode_player = 'no repeat';
    }
}

function queue(){
    let icono = document.getElementById('queue');
    let queue_pag = document.getElementsByClassName('page')[11];
    if (queue_pag.style.visibility === 'hidden'){
        icono.style.color = '#8f0fe1'
        queue_pag.style.visibility = 'visible';
    } else {
        icono.style.color = '#d0abda';
        queue_pag.style.visibility = 'hidden';
    }
}

function displaylyrics(){
    let lyrics = document.getElementsByClassName('playlist_content')[1];
    // console.log(lyrics);
    if (lyrics_pag.style.visibility === 'hidden'){
        lyrics_pag.style.visibility = 'visible';
        lyrics.innerHTML=allLyrics[musicIndex-1].lyrics + "<br><br><br><br>.";
    } else {
        lyrics_pag.style.visibility = 'hidden';
    }

}