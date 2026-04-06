function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const successMsg = document.getElementById('success-msg');

    successMsg.classList.remove('hidden');
    alert("¡Hola! Los datos del formulario se validaron correctamente.");
});

window.onscroll = function () {
    const scrollBtn = document.querySelector('.interactive-btn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};