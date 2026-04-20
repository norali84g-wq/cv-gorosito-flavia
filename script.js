
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const success = document.getElementById('success-message');
    success.classList.remove('hidden');
    alert("¡Hola Nora! Los datos del formulario se validaron correctamente.");
});