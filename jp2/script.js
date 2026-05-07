// Inicjalizacja animacji przy przewijaniu
ScrollReveal().reveal('.reveal', {
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 200
});

// Obsługa wysyłki (symulacja)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const kg = this.querySelector('input[type="number"]').value;
    
    alert(`Dziękujemy! Twoje zamówienie na ${kg}kg borówek zostało wysłane. Skontaktujemy się z Tobą telefonicznie!`);
    this.reset();
});

// Efekt zmiany koloru menu przy skrolowaniu
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 2px 15px rgba(0,0,0,0.1)";
    } else {
        nav.style.boxShadow = "none";
    }
});
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Pobieranie wartości z pól
    const name = this.querySelectorAll('input')[0].value;
    const phone = this.querySelectorAll('input')[1].value;
    const email = this.querySelectorAll('input')[2].value;
    const kg = this.querySelectorAll('input')[3].value;
    
    alert(`Dziękujemy ${name}!\nZłożono zamówienie na ${kg}kg.\nSkontaktujemy się na numer: ${phone} lub e-mail: ${email}.`);
    
    this.reset(); // Czyści formularz po wysłaniu
});