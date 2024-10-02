// Transição suave ao clicar nos links de navegação
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        const targetSection = document.querySelector(targetID);

        // Suave rolagem para a seção alvo
        window.scrollTo({
            top: targetSection.offsetTop - 80, // Ajuste para compensar o cabeçalho fixo
            behavior: 'smooth'
        });
    });
});

// Efeito de fade-in ao rolar a página
const faders = document.querySelectorAll('.experience-card, .habilidades ul li, section');
const appearOptions = {
    threshold: 0.3, // A porcentagem do elemento visível antes de aplicar o efeito
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear'); // Adiciona classe para ativar efeito
            appearOnScroll.unobserve(entry.target); // Para de observar após o efeito
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader); // Aplica a observação para cada elemento
});

// Efeito de mudança no cabeçalho ao rolar a página
const header = document.querySelector('header');
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        header.classList.add('scrolled'); // Adiciona classe quando o scroll passa de 100px
    } else {
        header.classList.remove('scrolled'); // Remove a classe se o scroll for menor
    }
});