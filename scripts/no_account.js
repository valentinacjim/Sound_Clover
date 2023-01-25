let home_pag = document.getElementsByClassName("musica")[0];
let discover = document.getElementsByClassName("page")[0];
let genre = document.getElementsByClassName("page")[1];


function home_page() {
    home_pag.style.visibility = 'visible';
    discover.style.visibility = 'hidden';
    genre.style.visibility = 'hidden';
}

function discover_page() {
    home_pag.style.visibility = 'hidden';
    discover.style.visibility = 'visible';
    genre.style.visibility = 'hidden';
}

function genre_page(genero) {
    home_pag.style.visibility = 'hidden';
    discover.style.visibility = 'hidden';
    genre.style.visibility = 'visible';
    genre_content(genero);
}

function genre_content(genero){
    let titulo = document.getElementsByClassName("nombre_genero")[0];
    let cover = document.getElementById("cover_genero");
    let contenido = document.getElementsByClassName("content")[0];
    contenido.innerHTML = "";
    cover.src = allGeneros[genero].imagen;
    console.log(cover);
    titulo.innerHTML = allGeneros[genero].name;
    for (let i = 0; i < allMusic.length; i++) {
        if (allGeneros[genero].canciones.includes(allMusic[i].name)) {
            contenido.innerHTML += "<div class='cancion'\n>\n" +
                " <div class='cancion_container'>\n" +
                "    <img src=" + allMusic[i].img + " alt='cancion_"+ allMusic[i].name +"' onclick='alertas()'>\n" +
                " </div>\n" +
                " <div class='titulo_artista'>\n" +
                "    <p onclick='alertas()'>" + allMusic[i].name + "<br> "+allMusic[i].artist +" </p>\n" +
                " </div>\n" +
                "</div>"
        }
    }
    // contenido.innerHTML += "<div class='spacer-3'\n>\n";
}

function alertas(){
    alert("Inicie sesión para disfrutar de todo el contenido.");
}

