// Módulo para el reproductor

let shuffle = false;

// Cargar información de la canción
function loadMusic(list, indexNumb){
    let musicImg = document.getElementById("caratula");
    let musicName = document.getElementById("cancion_actual");
    let musicArtist = document.getElementById("artista");
    let musicPlaying = document.getElementById("main_audio")
    console.log(list);
    console.log(list[indexNumb-1]);
    console.log(list[indexNumb-1].name);
    musicName.innerHTML = list[indexNumb-1].name;
    musicArtist.innerHTML = list[indexNumb-1].artist;
    musicImg.src = list[indexNumb-1].img;
    musicPlaying.src = list[indexNumb-1].audio;
}

// Función para pasar a la siguiente canción
function nextMusic(list) {
    if (musicIndex === list.length){
        musicIndex = 1;
    }else{
        musicIndex++;
    }

    loadMusic(list, musicIndex);
    play = false;
    favorito()
    reproduccion();

}

// Función para pasar a la canción anterior
function prevMusic(list) {
    if (musicIndex === 1){
        musicIndex = list.length;
    }else{
        musicIndex--;
    }
    loadMusic(list, musicIndex);
    play = false;
    favorito()
    reproduccion();
}

// Función para seleccionar una canción
function chooseMusic(indexNumb){
    lyrics_pag.style.visibility = 'hidden';
    let player = document.getElementsByClassName("pie")[0];
    player.style.visibility = 'visible';

    loadMusic(allMusic, indexNumb);
    elementos(allMusic);
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

function mode(){
    let icono = document.getElementById('shuffle');
    if(shuffle === false){
        icono.className = "fa-solid fa-repeat";
        shuffle = true;
    }else{
        icono.className = "fa-solid fa-shuffle";
        shuffle = false;
    }
}

function displaylyrics(){
    let lyrics = document.getElementsByClassName('playlist_content')[1];
    console.log(lyrics);
    lyrics.innerHTML=allLyrics[musicIndex-1].lyrics;

}