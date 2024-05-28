function registerGmail() {
    // Obtener los valores de nombre, apellidos y fecha de nacimiento
    let nombre = document.getElementById("n").value.trim();
    let apellidoPaterno = document.getElementById("ap").value.trim();
    let apellidoMaterno = document.getElementById("am").value.trim();
    let fechaNacimiento = document.getElementById("f").value.trim();


    if (!nombre || !apellidoPaterno || !apellidoPaterno || !fechaNacimiento) {
        document.getElementById("mensaje").innerText = "Error: Por favor completa todos los campos.";
        document.getElementById("mensaje").style.color = "red";
        document.getElementById("mensaje").style.display = "block";
        return false;
    }

    let correo = generarCorreo(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento);


    document.getElementById("mensaje").innerText = "Correo generado: " + correo;
    document.getElementById("mensaje").style.color = "white";
    document.getElementById("mensaje").style.display = "block";

  
    document.getElementById("n").value = "";
    document.getElementById("ap").value = "";
    document.getElementById("am").value = "";
    document.getElementById("f").value = "";
    

    return false;
}
function generarCorreo(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento) {

    let inicialesNombre = obtenerIniciales(nombre);

    let caracteresApellidos = obtenerCaracteresApellidos(apellidoPaterno, apellidoMaterno);
    let añoNacimiento = obtenerAñoNacimiento(fechaNacimiento);

    let correo = inicialesNombre + caracteresApellidos + añoNacimiento + "@gmail.com";
    return correo.toLowerCase();
}

function obtenerIniciales(texto) {
    let palabras = texto.trim().split(" ");
    let iniciales = "";
    
    palabras.forEach(function(palabra) {
        iniciales += palabra.charAt(0);
    });
    return iniciales;
}
function obtenerCaracteresApellidos(apellidoPaterno, apellidoMaterno) {

    let caracteres = "";
    if (apellidoMaterno) {
        caracteres += apellidoMaterno.slice(1, 3) + apellidoPaterno.slice(-3);
    } else {
        caracteres += apellidoPaterno.slice(-3);
    }
    return caracteres;
}


function obtenerAñoNacimiento(fecha) {

    let fechaComponentes = fecha.split("-");
    let año = fechaComponentes[0];
    let mes = fechaComponentes[1];
    let dia = fechaComponentes[2];

    return año.slice(-2) + dia + mes;
}

