//Módulo de búsqueda

// Función para filtrar los caracteres especiales
function filter(text) {
    text = text.toLowerCase();
    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    text = text.replace(/\s/g, '');
    text = text.trim();
    return text;
}

function buscar(){

    let search = document.getElementsByClassName("resultados")[0];
    let value = document.getElementsByClassName("search")[0];
    search.innerHTML='';
    value = filter(value.value);

    if(["*"].includes(value)){
        value = '';
    }

    for(let i=0; i<allMusic.length; i++){
        let fav = '';
        let index_artist = 0;
        isFavorite(i, fav);

        index_artist = indexArtist(i, index_artist);

        if (filter(allMusic[i].name).includes(value)||filter(allMusic[i].artist).includes(value)){
            search.innerHTML += "<div class='busq'>\n" +
                "    <div class='busq_container1'>\n" +
                cancion_container_script(i) +
                "    </div>\n" +
                "    <div class='titulo_artista_busq'>\n" +
                "        <p><b>" + allMusic[i].name + "</b></p> <p id='artista_search' onclick='artista_pagina(" + index_artist+ ") '>" +allMusic[i].artist+"</p>\n" +
                "    </div>\n" +
                "    <div class='guardar_lista'>\n" +
                "    <p>\n" +
                "        <i class='"+fav+"' id='"+ allMusic[i].name+"_search' onclick='agregar_fav("+i+")'>  </i>\n" +
                "    </p>\n" +
                "    </div>\n" +
                "</div>"
        }
    }
}

function agregar_fav(index){
    let fav = document.getElementById(allMusic[index].name +"_search");
    // console.log(document.getElementsByClassName(allMusic[index].name +"_search"))
    if(allMusic[index].fav === true){
        fav.className = "fa-regular fa-heart";
        allMusic[index].fav = false;
        alert('Removed from favorites');

    }else{
        fav.className = "fa-solid fa-heart";
        allMusic[index].fav = true;
        alert('Added to favorites');

    }
}


