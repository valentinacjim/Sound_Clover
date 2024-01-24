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

function indexArtist(list, i, index_artist) {
    for (let j = 0; j < allArtistas.length; j++) {
        if(Array.isArray(list[i].artist)){
            for(let k = 0; k<list[i].artist.length; k++){
                if (list[i].artist[k] === allArtistas[j].name) {
                    index_artist.push(allArtistas[j].index)
                }
            }
        }
        else{
            if (list[i].artist === allArtistas[j].name) {
                index_artist.push(allArtistas[j].index)
        }}
    }
    return index_artist;
}

//"<p><b>" + allMusic[i].name + "</b></p> <p onclick='artista_pagina(" + index_artist + ") '>" + allMusic[i].artist + "</p>\n" +
function name_index_artist_script(list, i, index_artist, search = false) {
    let script = "<div class='titulo_artista_busq'>\n";
    if(search){
        if(index_artist.length > 1){
            for (let j = 0; j < index_artist.length; j++) {
                script += "<p><b>" + list[i].name + "</b></p> <p id='artista_search' onclick='artista_pagina(" + index_artist[j] + ") '>" + list[i].artist[j] + ", "
            }
            return script.slice(0, -2) + "</p>\n </div>";   
        }
        return "<p><b>" + list[i].name + "</b></p> <p id='artista_search' onclick='artista_pagina(" + index_artist + ") '>" + list[i].artist + "</p>\n</div>";
    }
    if(index_artist.length > 1){
        for (let j = 0; j < index_artist.length; j++) {
            script += "<p><b>" + list[i].name + "</b></p> <p onclick='artista_pagina(" + index_artist[j] + ") '>" + list[i].artist[j] + ", "
        }
        return script.slice(0, -2) + "</p>\n</div>";   
    }
    return "<p><b>" + list[i].name + "</b></p> <p onclick='artista_pagina(" + index_artist + ") '>" + list[i].artist + "</p>\n</div>";
}





function isFavorite(i, fav) {
    if (list[i].fav === true) {
        fav = "fa-solid fa-heart";

    } else {
        fav = "fa-regular fa-heart";
    }
    return fav;
}

