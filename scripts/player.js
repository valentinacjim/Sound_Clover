// Módulo para el reproductor

// Cargar información de la canción
function loadMusic(list, indexNumb){
    let musicImg = document.getElementById("caratula");
    let musicName = document.getElementById("cancion_actual");
    let musicArtist = document.getElementById("artista");
    let musicPlaying = document.getElementById("main_audio")
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
    loadMusic(list, indexNumb);
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
