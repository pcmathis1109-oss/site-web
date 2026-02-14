function saluer() {
    alert("Salut ! Bienvenue sur MonSite 🌐");
}

const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Merci ! Votre message a été envoyé ✉️");
        form.reset();
    });
}