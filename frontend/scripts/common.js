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

function cancion_container_busq_script(i) {
    return "<div class='cancion_container'>" +
    "   <img alt='cancion' src=" + list[i].img + ">\n" +
    // "   <button type='button' onclick='chooseMusic(list" + (i + 1) + ")'>\n" +
    // "       <i class='fa-regular fa-circle-play'></i>\n" +
    // "   </button>\n" +
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
        } else if (artista == "Bzrp"){
            artista = "Bizarrap"
        }
        if (allArtistas[i].name === artista) {
            return i;
        }
    }
    return -1;
    
}


function artists(artistas){
    let script = '';
    if(Array.isArray(artistas)){
        console.log(artistas)
        script += "<p><div class='artista_search'>"
        for(let i=0; i<artistas.length; i++){
            artistas[i][0] = artistas[i][0].toUpperCase();
            if (i == 0){
                script += "<p onclick='artista_pagina(" + indexArtist(artistas[i]) + ") '>" + artistas[i] + " ft.</p>"
            } else{
                script += " <p  onclick='artista_pagina(" + indexArtist(artistas[i]) + ") '>" + artistas[i] + ",</p>"
            }
        }
        script = script.slice(0, -5);
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


function converToQuery(cancion){
    let query = "('" + generateUUID() + "', '" + cancion.name + "', '" + cancion.artist +  "', '" + cancion.duracion + "', '" + cancion.img + "', '" + cancion.audio + "')\n";
    return query;
}

console.log("INSERT INTO `canciones` (`id`, `name`, `artist`, `length`, `image`, `audio`) VALUES " + allMusic.map(converToQuery).join(", "));



function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
                v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

