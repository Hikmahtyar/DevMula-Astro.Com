const themeBtn = document.getElementById('theme-toggle-btn');
const themeIcon = themeBtn.querySelector('i');
const body = document.body;

// 1. Cek tema saat website dimuat
let currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') { 
    body.classList.add('light-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// 2. Event Listener Tombol Ganti Tema
themeBtn.addEventListener('click', () => {
    // A. Panggil Animasi Baru (Cosmic Rain)
    createCosmicRain();

    // B. Ganti Tema
    body.classList.toggle('light-mode');

    // C. Simpan & Ganti Ikon
    if (body.classList.contains('light-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});

/* ========================================= */
/* FUNGSI ANIMASI BARU: COSMIC RAIN (RINGAN) */
/* ========================================= */
function createCosmicRain() {
    const container = document.body;
    
    // LOGIKA CERDAS:
    // Jika lebar layar kurang dari 768px (HP), partikel cuma 10.
    // Jika lebih (Laptop), partikel 30. Biar HP gak berat.
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 10 : 30; 

    for (let i = 0; i < particleCount; i++) {
        const drop = document.createElement('div');
        drop.classList.add('cosmic-drop'); // Class baru di CSS

        // 1. Posisi Acak (Sepanjang lebar layar)
        drop.style.left = Math.random() * 100 + 'vw';

        // 2. Kecepatan Acak (Cepat & Snappy: 0.5s - 1.5s)
        let duration = Math.random() * 1 + 0.5; 
        drop.style.animationDuration = duration + 's';

        // 3. Delay Acak (Supaya jatuhnya "tik... tik..." tidak barengan)
        let delay = Math.random() * 0.5; 
        drop.style.animationDelay = delay + 's';
        
        container.appendChild(drop);

        // 4. Hapus elemen segera setelah animasi selesai (PENTING BUAT RAM HP)
        setTimeout(() => {
            drop.remove();
        }, (duration + delay) * 1000 + 100);
    }
}