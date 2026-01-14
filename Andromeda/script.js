/* =========================================
   LOGIKA JS ARTIKEL (ANDROMEDA)
   ========================================= */

const themeBtn = document.getElementById('theme-toggle-btn');
const themeIcon = themeBtn.querySelector('i');
const body = document.body;
const meteorContainer = document.getElementById('meteor-container');

// 1. CEK TEMA SAAT PERTAMA LOAD
let currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    enableLightMode();
}

// 2. EVENT CLICK TOMBOL TEMA
themeBtn.addEventListener('click', () => {
    // Panggil Meteor Merah
    createMeteorShower();

    // Ganti Tema dengan jeda sedikit
    setTimeout(() => {
        if (body.classList.contains('light-mode')) {
            disableLightMode();
        } else {
            enableLightMode();
        }
    }, 200);
});

// FUNGSI AKTIFKAN LIGHT MODE
function enableLightMode() {
    body.classList.add('light-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'light');
}

// FUNGSI NONAKTIFKAN LIGHT MODE
function disableLightMode() {
    body.classList.remove('light-mode');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'dark');
}

// 3. FUNGSI METEOR MERAH
function createMeteorShower() {
    // Buat 15 meteor agar tidak berat di HP
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const meteor = document.createElement('div');
            meteor.classList.add('meteor-projectile');
            
            // Posisi acak horizontal
            meteor.style.left = Math.random() * 100 + 'vw';
            
            // Kecepatan bervariasi
            let duration = Math.random() * 0.5 + 0.5;
            meteor.style.animationDuration = duration + 's';
            
            document.body.appendChild(meteor);

            // Hapus setelah selesai
            setTimeout(() => {
                meteor.remove();
            }, duration * 1000);
            
        }, i * 80); // Jeda antar meteor
    }
}