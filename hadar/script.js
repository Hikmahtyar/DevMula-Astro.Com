const themeBtn = document.getElementById('theme-toggle-btn');
const themeIcon = themeBtn.querySelector('i');
const body = document.body;

// Cek tema saat load
let currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') { 
    body.classList.add('light-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Event Listener
themeBtn.addEventListener('click', () => {
    // 1. Animasi Cosmic Rain
    createCosmicRain();

    // 2. Ganti Tema
    body.classList.toggle('light-mode');

    // 3. Simpan & Ganti Ikon
    if (body.classList.contains('light-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});

/* FUNGSI COSMIC RAIN (ANTI-LAG) */
function createCosmicRain() {
    const container = document.body;
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 10 : 30; 

    for (let i = 0; i < particleCount; i++) {
        const drop = document.createElement('div');
        drop.classList.add('cosmic-drop'); 

        drop.style.left = Math.random() * 100 + 'vw';
        
        let duration = Math.random() * 1 + 0.5; 
        drop.style.animationDuration = duration + 's';
        
        let delay = Math.random() * 0.5; 
        drop.style.animationDelay = delay + 's';
        
        container.appendChild(drop);

        setTimeout(() => { drop.remove(); }, (duration + delay) * 1000 + 100);
    }
}