document.getElementById("form-encuentranos").addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    document.getElementById("respuesta-encuentranos").innerHTML = `Hola <strong>${nombre} ${apellido}</strong>, su mensaje ha sido enviado correctamente.`;
    console.log(`Formulario Encuéntranos enviado por: ${nombre} ${apellido}`);
});

document.getElementById("form-comunicate").addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre-com").value;
    const apellido = document.getElementById("apellido-com").value;
    document.getElementById("respuesta-comunicate").innerHTML = `Hola <strong>${nombre} ${apellido}</strong>, su mensaje ha sido enviado correctamente.`;
    console.log(`Formulario Comunícate enviado por: ${nombre} ${apellido}`);
});
