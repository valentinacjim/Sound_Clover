// Módulo para el inicio de sesión

const login_form = document.getElementsByClassName('forms_form')[0];

// Función para obtener la cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const inputs = {
    u: document.getElementById("fusername"),
    p: document.getElementById("fpassword")
}

// Función para comprobar si el usuario existe
function checkCookie(event) {
    // console.log('holi');
    event.preventDefault();
    let usu = inputs.u.value;
    let contr = inputs.p.value;
    let busqueda = getCookie(usu);
    if (busqueda === "") {
        alert("Usuario no registrado");
    }
    else if (usu !== getCookie(contr)) {
        alert("Contraseña incorrecta");
    }
    else {
        // Borramos la cookie activa anterior
        document.cookie = 'Activa=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'Activa=' + getCookie(usu);
        window.location.href = "MainUser.html";
    }
}
if (login_form !== null) {
    login_form.addEventListener("submit", (event) => checkCookie(event));
}
