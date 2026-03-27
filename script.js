// Acción visible requerida por el punto C de las consignas
function irArriba() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Validación del formulario
document.getElementById('form-contacto').addEventListener('submit', function (e) {
    e.preventDefault();
    const exito = document.getElementById('mensaje-exito');
    exito.classList.remove('oculto');
    alert("¡Hola Nora! Los datos del formulario se validaron correctamente.");
});