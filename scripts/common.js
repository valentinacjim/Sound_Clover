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
        // console.log(allArtistas[i].name)
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
            script += "<div onclick='artista_pagina(" + indexArtist(artistas[i]) + ") '>" + artistas[i] + ", </div>"
        }
        script = script.slice(0, -8);
        script += '</div></p>'
        return script;
    }
    return "<p onclick='artista_pagina(" + indexArtist(artistas) + ") '>" + artistas + "</p>\n"
}


function isFavorite(list, i) {
    if (list[i].fav === true) {
        return "fa-solid fa-heart";

    }
    return "fa-regular fa-heart";
}

