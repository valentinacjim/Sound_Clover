//Módulo de búsqueda

// Función para filtrar los caracteres especiales
function filter(text) {
    if (Array.isArray(text)){
        for(let i=0; i<text.length; i++){
            text[i] = text[i].toLowerCase();
            text[i] = text[i].normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            text[i] = text[i].replace(/\s/g, '');
            text[i] = text[i].trim();
        }
    }else{
        text = text.toLowerCase();
        text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        text = text.replace(/\s/g, '');
        text = text.trim();
    }
    return text;
}
function buscar(){
    console.log(allMusic);
    let search = document.getElementsByClassName("resultados")[0];
    let value = document.getElementsByClassName("search")[0];
    search.innerHTML='';
    value = filter(value.value);

    if(["*"].includes(value)){
        value = '';
    }

    search.innerHTML += allMusic.map((music, i) => {            
        if (filter(music.name).includes(value) || filter(music.artist).includes(value)){
            console.log(music.artist);
            let fav = isFavorite(allMusic[i]);
            return "<div class='busq'>\n" +
                "    <div class='busq_container1'>\n" +
                cancion_container_script(i) +
                "    </div>\n" +
                "    <div class='titulo_artista_busq'>\n" +
                "        <p><b>" + music.name + "</b></p>\n" +
                artists(music.artist) +
                "    </div>\n" +
                "    <div class='guardar_lista'>\n" +
                "    <p>\n" +
                "        <i class='"+fav+"' id='"+ music.name+"_search' onclick='agregar_fav("+i+")'>  </i>\n" +
                "    </p>\n" +
                "    </div>\n" +
                "</div>"
        }
    }).join('');
    
}




