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



//"<p><b>" + allMusic[i].name + "</b></p> <p onclick='artista_pagina(" + index_artist + ") '>" + allMusic[i].artist + "</p>\n" +
function artist_script(artista) {
    let script = '<p>';
    if(search){
        if(Array.isArray(artista)){
            for(let j=0; j<artista.length; j++){
                script += "<div onclick='artista_pagina(" + indexArtist(artista[i]) + ") '>" + artista[i] + ", </div>"
            }
            script = script.slice(0, -8);
            script += '</div></p>'
            return script;
        }
        return "<p id='artista_search' onclick='artista_pagina(" + indexArtist(artista) + ") '>" + artista + "</p>\n"
    }
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





function isFavorite(i) {
    if (list[i].fav === true) {
        return "fa-solid fa-heart";

    }
    return "fa-regular fa-heart";
}

