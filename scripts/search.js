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
    let home = document.getElementsByClassName('musica')[0];
    let mis_listas = document.getElementsByClassName('mis_listas')[0];
    let crear_lista = document.getElementsByClassName('crear_lista')[0];
    let perfil = document.getElementsByClassName('perfil')[0];
    let artista_pag = document.getElementsByClassName('artistas_pagina')[0];
    let seguidos = document.getElementsByClassName('artistas_pagina')[1];
    let resultados = document.getElementsByClassName('busqueda')[0];
    let lista_reproduccion = document.getElementsByClassName('lista_reproducción')[0];
    let albumes = document.getElementsByClassName('albumes')[0];
    let cuenta = document.getElementsByClassName('cuenta')[0];

    home.style.visibility = 'hidden';
    mis_listas.style.visibility = 'hidden';
    crear_lista.style.visibility = 'hidden';
    perfil.style.visibility = 'hidden';
    artista_pag.style.visibility = 'hidden';
    seguidos.style.visibility = 'hidden';
    resultados.style.visibility = 'visible';
    lista_reproduccion.style.visibility = 'hidden';
    albumes.style.visibility = 'hidden';
    cuenta.style.visibility = 'hidden';


    let search = document.getElementsByClassName("resultados")[0];
    let value = document.getElementById('search').value;
    search.innerHTML='';

    value = filter(value);

    if(["*"].includes(value)){
        value = '';
    }

    for(let i=0; i<allMusic.length; i++){
        let fav ='';
        let index_artist = 0;
        if( allMusic[i].fav === true){
            fav = "fa-solid fa-heart";

        }else{
            fav = "fa-regular fa-heart";
        }

        for(let j=0; j<allArtistas.length; j++){
            if (allMusic[i].artist === allArtistas[j].name){
                index_artist = allArtistas[j].index;
            }
        }
        if (filter(allMusic[i].name).includes(value)||filter(allMusic[i].artist).includes(value)){
            search.innerHTML += "<div class='busq'>\n" +
                "    <div class='busq_container'>\n" +
                "        <img src=" + allMusic[i].img+ " alt='cancion'>\n" +
                "            <div class='overlay_fav'>\n" +
                "                <button type='button' onclick='chooseMusic(" +(i+1)+ ")'>\n" +
                "                    <i class='fa-regular fa-circle-play'></i>\n" +
                "                </button>\n" +
                "            </div>\n" +
                "    </div>\n" +
                "    <div class='titulo_artista_busq'>\n" +
                "        <p><b>" + allMusic[i].name + "</b></p> <p id='artista' onclick='artista_pagina(" + index_artist+ ") '>" +allMusic[i].artist+"</p>\n" +
                "    </div>\n" +
                "    <p class='info'>\n" +
                "        <i class='"+ fav + "' id='"+ allMusic[i].name +"_search' onclick='agregar_fav(" +(i)+ ")'></i>\n" +
                "    </p>\n" +
                "</div>"
        }
    }
}

function agregar_fav(index){
    let fav = document.getElementById(allMusic[index].name +"_search");
    console.log(document.getElementsByClassName(allMusic[index].name +"_search"))
    if(allMusic[index].fav === true){
        fav.className = "fa-regular fa-heart";
        allMusic[index].fav = false;
        alert('Canción eliminada de favoritos');

    }else{
        fav.className = "fa-solid fa-heart";
        allMusic[index].fav = true;
        alert('Canción agregada a favoritos');

    }
}


