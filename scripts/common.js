let list = allMusic;
let historial = [0];

function cancion_container_script(i) {
    return "<div class='cancion_container'>" +
    "   <img alt='cancion' src=" + list[i].img + ">\n" +
    "   <button type='button' onclick='chooseMusic(list" + (i + 1) + ")'>\n" +
    "       <i class='fa-regular fa-circle-play'></i>\n" +
    "   </button>\n" +
    "</div>\n"
}

function back(){
    historial.pop();
    see_page(historial[historial.length-1]);
    historial.pop();
}




function indexArtist(artista) {
    for (let i = 0; i < allArtistas.length; i++) {
        if (artista == "Azaelia" || artista == "Zoe Johnson" || artista == "Shannon"){
            artista = "Complicated Broken"
        }
        if (allArtistas[i].name === artista) {
            return i;
        }
    }
    return -1;
    
}


function artists(artistas){
    let script = '<p>';
    if(Array.isArray(artistas)){
        for(let i=0; i<artistas.length; i++){
            if (i == 0){
                script += "<div class='artista_search' onclick='artista_pagina(" + indexArtist(artistas[i]) + ") '>" + artistas[i] + " ft.</div>"
            } else{
                script += " <div class='artista_search' onclick='artista_pagina(" + indexArtist(artistas[i]) + ") '>" + artistas[i] + ",</div>"
            }
        }
        script = script.slice(0, -7);
        script += '</div></p>'
        return script;
    }
    return "<p class='artista_search' onclick='artista_pagina(" + indexArtist(artistas) + ") '>" + artistas + "</p>\n"
}


function isFavorite(song) {
    if (song.fav === true) {
        return "fa-solid fa-heart";

    }
    return "fa-regular fa-heart";
}

function agregar_fav(index){
    allMusic[index].fav = !allMusic[index].fav;
    let fav = isFavorite(allMusic[index]);
    if (index === musicIndex-1){
    let favorite_icon = document.getElementById("fav");
    favorite_icon.className = fav;
    }
    if (document.getElementById(allMusic[index].name+"_search") !== null){
        let favorite_icon = document.getElementById(allMusic[index].name+"_search");
        favorite_icon.className = fav;
    }
    if (document.getElementById(allMusic[index].name+"_queue") !== null){
        let favorite_icon = document.getElementById(allMusic[index].name+"_queue");
        favorite_icon.className = fav;
    }
}
