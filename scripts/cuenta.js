// Módulo para la página de cuenta

// Inputs de la página de cuenta
let inputs = {
    u: document.getElementById("fusername"),
    p: document.getElementById("fpassword"),
    n: document.getElementById("fnombre"),
    m: document.getElementById("femail"),
    f: document.getElementById("ffechanac"),
    i: document.getElementById("ffotoperfil")
}

// Inputs de la página de editar cuenta
let new_inputs = {
    u_n: document.getElementById("new_username"),
    p_n: document.getElementById("new_password"),
    n_n: document.getElementById("new_nombre"),
    a_n: document.getElementById("new_apellidos"),
    m_n: document.getElementById("new_email"),
    f_n: document.getElementById("new_fechanac"),
}

function cuenta() {

    // Rellenar los campos de la página de cuenta
    rellenar_campos_texto();


}

function rellenar_campos_texto() {
    let aux = getCookie('Activa');
    let c = getCookie(aux);
    let obj = JSON.parse(c);
    obj.correo = aux;

    // Rellenar los campos de la página de cuenta
    inputs.u.innerHTML = "Bienvenido/a "+obj.usuario;
    inputs.p.value = obj.pass;
    inputs.n.innerHTML = obj.nombre + ' ' + obj.apellido;
    inputs.m.innerHTML = obj.correo;
    inputs.f.innerHTML = obj.fecha;
    if (obj.imagen !== "images/fotoperfil/") {
        inputs.i.src = obj.imagen;
        inputs.i.style.display = "block";
    }else{
        inputs.i.style.display = "none";
    }
}

// Rellenar los campos de la página de editar cuenta
function rellenar_campos_input() {
    let aux = getCookie('Activa');
    let c = getCookie(aux);
    let obj = JSON.parse(c);
    obj.correo = aux;
    new_inputs.u_n.value = obj.usuario;
    new_inputs.p_n.value = obj.pass;
    new_inputs.n_n.value = obj.nombre;
    new_inputs.a_n.value = obj.apellido;
    new_inputs.m_n.value = obj.correo;
    new_inputs.f_n.value = obj.fecha;
}

// Función para editar la cuenta
function edit(){
    let edit = document.getElementById("info_pers");
    let info = document.getElementById("cuenta_info");
    let edit_button = document.getElementById("edit_button");
    let save_button = document.getElementById("save_button");
    edit.style.display = "block";
    info.style.display = "none";
    edit_button.style.display = "none";
    save_button.style.display = "block";
    rellenar_campos_input()
}

// Función para guardar los cambios de la imagen
function changeImage() {
    let file = document.getElementById("ffotoperfil_none").value.split('\\').pop();
    console.log(file);
    let aux = getCookie('Activa');
    let c = getCookie(aux);
    let obj = JSON.parse(c);
    obj.imagen = 'images/fotoperfil/'+ file;
    document.cookie = aux + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = aux + "=" + JSON.stringify(obj);
    let fotoperfil = document.getElementById('fotoperfil');
    if (JSON.parse(getCookie(getCookie('Activa'))).imagen === 'images/fotoperfil/'){
        fotoperfil.innerHTML= `<i class="fa-regular fa-user"</i>`;
        console.log('no hay imagen');}
    else{ fotoperfil.innerHTML= "<img src=" + JSON.parse(getCookie(getCookie('Activa'))).imagen + ">";
        console.log(JSON.parse(getCookie(getCookie('Activa'))).imagen);}

    if (obj.imagen !== "images/fotoperfil/") {
        inputs.i.src = obj.imagen;
        inputs.i.style.display = "block";
    }else{
        inputs.i.style.display = "none";
    }


}

// Función para guardar los cambios de la cuenta
function changeCookie() {
    let aux = getCookie('Activa');
    let c = getCookie(aux);
    let obj = JSON.parse(c);
    document.cookie = aux + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = obj.usuario + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = obj.pass + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'Activa=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

    obj.usuario = new_inputs.u_n.value;
    obj.pass = new_inputs.p_n.value;
    obj.nombre = new_inputs.n_n.value;
    obj.apellido = new_inputs.a_n.value;
    obj.correo = new_inputs.m_n.value;
    obj.fecha = new_inputs.f_n.value;
    obj.imagen = inputs.i.src;
    // borramos la cookie anterior
    document.cookie = aux + "=" + JSON.stringify(obj);
    document.cookie = obj.usuario + "=" + obj.correo;
    document.cookie = obj.pass + "=" + obj.usuario;
    document.cookie = 'Activa=' + obj.correo;
    inputs.u.innerHTML = "Bienvenido/a "+obj.usuario;
}


