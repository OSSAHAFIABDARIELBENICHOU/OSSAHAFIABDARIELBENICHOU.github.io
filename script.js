// 1. Animation de "Typewriter" pour le texte d'accueil
const heroText = document.querySelector('.hero-text p');
const text = heroText.textContent;
heroText.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

// 2. Gestion de l'apparition fluide (Intersection Observer)
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Si c'est la section compétences, on anime les barres
            if (entry.target.classList.contains('skills')) {
                animateBars();
            }
        }
    });
}, observerOptions);

// On applique l'observateur sur chaque section
document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal');
    observer.observe(section);
});

// 3. Fonction pour animer les barres de progression
function animateBars() {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
}

window.onload = typeWriter;
