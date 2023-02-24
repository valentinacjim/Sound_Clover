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
    // queue_content();
}

// Función para pasar a la siguiente canción
function nextMusic() {

    if (shuffle === true){
        musicIndex = Math.floor(Math.random() * list.length) + 1;
    }
    else {
        if (musicIndex === list.length && mode_player === "repeat list") {
            musicIndex = 1;
        } else if (musicIndex === list.length && mode_player === "no repeat") {
            musicIndex = Math.floor(Math.random() * list.length) + 1;
        } else if (musicIndex === list.length && mode_player !== "repeat song") {
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
        if (musicIndex === 1 && mode_player === "repeat list") {
            musicIndex = list.length;
        } else if (musicIndex === 1 && mode_player === "no repeat") {
            musicIndex = Math.floor(Math.random() * list.length) + 1;
        }
        else if (musicIndex === 1 && mode_player !== "repeat song") {
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
    lyrics_pag.style.visibility = 'hidden';
    let player = document.getElementsByClassName("pie")[0];
    player.style.visibility = 'visible';

    loadMusic(indexNumb);
    elementos();
    play = false;
    reproduccion();
    musicIndex = indexNumb;
    console.log(musicIndex);
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
        if (mode_player === 'repeat list'){
            nextMusic();
        } else if (mode_player === 'repeat song'){
            musicPlaying.play();
        } else if (mode_player === 'no repeat'){
            nextMusic();
        }
        queue_content();
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
        icono.style.color = '#ebe0ff';
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
        icono.style.color = '#ebe0ff';
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
        // queue_content();
    } else {
        icono.style.color = '#ebe0ff';
        queue_pag.style.visibility = 'hidden';
    }
}

function displaylyrics(){
    let lyrics = document.getElementsByClassName('playlist_content')[1];
    let icono = document.getElementById('lyrics');
    // console.log(lyrics);
    if (lyrics_pag.style.visibility === 'hidden'){
        icono.style.color = '#8f0fe1'
        lyrics_pag.style.visibility = 'visible';
        lyrics.innerHTML=allLyrics[musicIndex-1].lyrics + "<br><br><br><br>.";
    } else {
        icono.style.color = '#ebe0ff';
        lyrics_pag.style.visibility = 'hidden';
    }

}

function queue_content(){
    // console.log(musicIndex);
    let queue_content = document.getElementById('queue_content');
    queue_content.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        if (i === musicIndex-1) {
            let fav = '';
            let index_artist = 0;
            if (list[i].fav === true) {
                fav = "fa-solid fa-heart";

            } else {
                fav = "fa-regular fa-heart";
            }
            for (let j = 0; j < allArtistas.length; j++) {
                if (list[i].artist === allArtistas[j].name) {
                    index_artist = allArtistas[j].index;
                }
            }
            let queue_element = document.getElementById('playing');
            queue_element.innerHTML = "" +
                "<div class='queue_element'\n>\n" +

                "<div class='busq3' id='busq3'\n>\n" +

                "    <div class='queue_container'>\n" +

                "    <div class='cancion_container'>" +
                "        <img alt='cancion' src=" + list[i].img + ">\n" +
                // "            <div class='overlay_fav'>\n" +
                "                <button type='button' onclick='chooseMusic(list" + (i + 1) + ")'>\n" +
                "                    <i class='fa-regular fa-circle-play'></i>\n" +
                "                </button>\n" +
                "    </div>\n" +
                "    </div>\n" +
                "    <div class='titulo_artista_busq'>\n" +
                "        <p><b>" + list[i].name + "</b></p> <p onclick='artista_pagina(" + index_artist + ") '>" + list[i].artist + "</p>\n" +
                "    </div>\n" +
                "    <p class='favor'>\n" +
                "        <i class='" + fav + "' id='" + list[i].name + "_search' onclick='agregar_fav(" + (i) + ")'></i>\n" +
                "    </p>\n" +
                "</div>" +
                "</div>"


        } else if( i > musicIndex-1 && i<=50){


            let fav = '';
            let index_artist = 0;

            if (list[i].fav === true) {
                fav = "fa-solid fa-heart";

            } else {
                fav = "fa-regular fa-heart";
            }
            for (let j = 0; j < allArtistas.length; j++) {
                if (list[i].artist === allArtistas[j].name) {
                    index_artist = allArtistas[j].index;
                }
            }
            queue_content.innerHTML += "" +
                "<div class='queue_element'\n>\n" +

                "<div class='busq3' id='busq3'\n>\n" +

                "    <div class='queue_container'>\n" +

                "    <div class='cancion_container'>" +
                "        <img alt='cancion' src=" + list[i].img + ">\n" +
                // "            <div class='overlay_fav'>\n" +
                "                <button type='button' onclick='chooseMusic(list" + (i + 1) + ")'>\n" +
                "                    <i class='fa-regular fa-circle-play'></i>\n" +
                "                </button>\n" +
                "    </div>\n" +
                "    </div>\n" +
                "    <div class='titulo_artista_busq'>\n" +
                "        <p><b>" + list[i].name + "</b></p> <p onclick='artista_pagina(" + index_artist + ") '>" + list[i].artist + "</p>\n" +
                "    </div>\n" +
                "    <p class='favor'>\n" +
                "        <i class='" + fav + "' id='" + list[i].name + "_search' onclick='agregar_fav(" + (i) + ")'></i>\n" +
                "    </p>\n" +
                "</div>" +
                "</div>"

        }
    }
    queue_content.innerHTML += "" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<br>"
}