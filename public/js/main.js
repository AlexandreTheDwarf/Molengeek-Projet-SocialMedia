function animateNumber(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    const range = end - start;
    const startTime = performance.now();

    function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // Proportion du temps écoulé (entre 0 et 1)
        const easeProgress = progress * progress; // Accélération exponentielle

        const current = Math.floor(start + range * easeProgress);
        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            element.textContent = end; // Assure d'atteindre la valeur finale exacte
        }
    }

    requestAnimationFrame(step);
}

// Utilisation
window.onload = () => {
    const duration = 3000; // Durée totale commune pour toutes les animations (3 secondes)
    setTimeout(() => {
        animateNumber("NbrTwitter", 0, 12000, duration); // De 0 à 12 000 en 3 secondes
        animateNumber("NbrYoutube", 0, 5000, duration);  // De 0 à 5 000 en 3 secondes
        animateNumber("NbrFacebook", 0, 7500, duration); // De 0 à 7 500 en 3 secondes
    }, 1000); // Délai global de 1 secondes avant de démarrer
};
