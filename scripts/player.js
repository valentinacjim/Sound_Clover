// Módulo para el reproductor

// Cargar información de la canción
function loadMusic(indexNumb){
    let musicImg = document.getElementById("caratula");
    let musicName = document.getElementById("cancion_actual");
    let musicArtist = document.getElementById("artista");
    let musicPlaying = document.getElementById("main_audio")
    musicName.innerHTML = allMusic[indexNumb-1].name;
    musicArtist.innerHTML = allMusic[indexNumb-1].artist;
    musicImg.src = allMusic[indexNumb-1].img;
    musicPlaying.src = allMusic[indexNumb-1].audio;
}

// Función para pasar a la siguiente canción
function nextMusic() {
    if (musicIndex === allMusic.length){
        musicIndex = 1;
    }else{
        musicIndex++;
    }
    loadMusic(musicIndex);
    play = false;
    favorito()
    reproduccion();

}

// Función para pasar a la canción anterior
function prevMusic() {
    if (musicIndex === 1){
        musicIndex = allMusic.length;
    }else{
        musicIndex--;
    }
    loadMusic(musicIndex);
    play = false;
    favorito()
    reproduccion();
}

// Función para seleccionar una canción
function chooseMusic(indexNumb){
    loadMusic(indexNumb);
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
