const themeBtn = document.getElementById('theme-toggle-btn');
const themeIcon = themeBtn.querySelector('i');
const body = document.body;

// Cek tema yang tersimpan saat pertama kali load
let currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') { 
    body.classList.add('light-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Event Listener saat tombol diklik
themeBtn.addEventListener('click', () => {
    
    // 1. Munculkan efek meteor (biar dramatis)
    createMeteorShower();

    // 2. Langsung ganti class (Tanpa Delay)
    // CSS transition yang akan membuatnya halus (fade in/out)
    body.classList.toggle('light-mode');

    // 3. Ganti Ikon & Simpan ke LocalStorage
    if (body.classList.contains('light-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});

/* --- FUNGSI METEOR DRAMATIS --- */
function createMeteorShower() {
    // Jumlah meteor (8 buah cukup agar tidak berat)
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const meteor = document.createElement('div');
            meteor.classList.add('meteor-projectile');
            
            // Posisi acak horizontal (melebar sedikit keluar layar)
            meteor.style.left = (Math.random() * 120 - 10) + 'vw'; 
            
            // Durasi acak (Slow Motion effect: 1.5s - 3s)
            let duration = Math.random() * 1.5 + 1.5; 
            meteor.style.animationDuration = duration + 's';
            
            document.body.appendChild(meteor);
            
            // Hapus elemen setelah animasi selesai
            setTimeout(() => { meteor.remove(); }, duration * 1000 + 100);
        }, i * 300); // Jeda antar meteor muncul
    }
}