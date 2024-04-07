// Módulo de registro

const formulario = document.getElementsByClassName('forms_form')[1];
// const formulario2 = document.getElementById('info_pers2');

// Errores
const errores = {
    usuario: "Nombre de usuario inválido",
    pass: "Contraseña de hasta 8 caracteres de letras minúsculas y números",
    pass2: "Las contraseñas no coinciden",
    nombre: "Nombre no válido",
    apellido: "Apellido no válido",
    mail: "Mail no válido",
    fecha: "Fecha de nacimiento no válida",
    checker: "Marque la casilla de confirmación",
    registrado: "Este correo electrónico ya tiene cuenta"
}

const inputs = {
    u: document.getElementById("fusername"),
    p: document.getElementById("fpassword"),
    p2: document.getElementById("fpassword2"),
    n: document.getElementById("fnombre"),
    a: document.getElementById("fapellidos"),
    m: document.getElementById("femail"),
    f: document.getElementById("ffechanac"),
    c: document.getElementById("fEULA"),
    i: document.getElementById("ffotoperfil")
}

// Validación de campos
function crearCookie(event){
    event.preventDefault();
    // console.log("cookie creada");
    let usuario = inputs.u.value;
    let pass = inputs.p.value;
    let pass2 = inputs.p2.value;
    let nombre = inputs.n.value;
    let apellido = inputs.a.value;
    let mail = inputs.m.value;
    let fecha = inputs.f.value;
    let checker = inputs.c.checked;
    // pick only the filename
    let imagen = inputs.i.value.split('\\').pop();
    let passregex = /[a-z0-9]{1,8}/;
    let mailregex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/
    // let liked = [];
    // let listas = [];

    if (!usuario) {
        alert(errores.usuario);
    }
    else if (!(passregex.test(pass))){
        alert(errores.pass);
    }
    else if (pass !== pass2){
        alert(errores.pass2);
    }
    else if (!nombre){
        alert(errores.nombre);
    }
    else if (!apellido){
        alert(errores.apellido);
    }
    else if (!mailregex.test(mail)){
        alert(errores.mail);
    }
    else if (!fecha){
        alert(errores.fecha);
    }
    else if (!checker){
        alert(errores.checker);
    }
    else {
        // Crear cookie
        let dict_cookie = {"usuario": usuario, "nombre": nombre, "apellido": apellido, "fecha": fecha, "pass": pass, "imagen": 'images/fotoperfil/'+ imagen};
        document.cookie = mail + "=" + JSON.stringify(dict_cookie);
        alert('Registrado con éxito');
        document.cookie = usuario + "=" + mail;
        document.cookie = pass + "=" + usuario;
        document.cookie = 'Activa=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'Activa=' + mail;
        window.location.href = "MainUser.html";
    }

}

if (formulario !== null) {
    formulario.addEventListener("submit", (event) => crearCookie(event));
}



/**
 * Variables
 */
const signupButton = document.getElementById('signup-button'),
    loginButton = document.getElementById('login-button'),
    userForms = document.getElementById('user_options-forms')

/**
 * Add event listener to the "Sign Up" button
 */
signupButton.addEventListener('click', () => {
    userForms.classList.remove('bounceRight')
    userForms.classList.add('bounceLeft')
}, false)

/**
 * Add event listener to the "Login" button
 */
loginButton.addEventListener('click', () => {
    userForms.classList.remove('bounceLeft')
    userForms.classList.add('bounceRight')
}, false)