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
    // 1. Efek Meteor
    createMeteorShower();

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

/* FUNGSI METEOR MELENGKUNG */
function createMeteorShower() {
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const meteor = document.createElement('div');
            meteor.classList.add('meteor-projectile');
            
            // Posisi acak horizontal
            meteor.style.left = (Math.random() * 80 + 20) + 'vw'; 
            
            // Durasi Slow Motion
            let duration = Math.random() * 1.5 + 1.5; 
            meteor.style.animationDuration = duration + 's';
            
            document.body.appendChild(meteor);
            setTimeout(() => { meteor.remove(); }, duration * 1000 + 100);
        }, i * 300); 
    }
}