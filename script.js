function irArriba() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.getElementById('form-contacto').addEventListener('submit', function (e) {
    e.preventDefault();
    const mensajeExito = document.getElementById('mensaje-exito');

    mensajeExito.classList.remove('hidden');
    alert("¡Hola! Los datos del formulario se validaron correctamente.");
});

window.onscroll = function () {
    const btnVolver = document.querySelector('.interactive-btn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnVolver.style.display = "block";
    } else {
        btnVolver.style.display = "none";
    }
};