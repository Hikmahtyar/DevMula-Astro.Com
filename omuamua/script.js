const themeBtn = document.getElementById('theme-toggle-btn');
const themeIcon = themeBtn.querySelector('i');
const body = document.body;

// Cek tema saat load
let currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') { 
    body.classList.add('light-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Event Listener Tombol Tema
themeBtn.addEventListener('click', () => {
    // 1. Panggil Animasi Spesial 'Oumuamua
    spawnAlienVisitors();

    // 2. Ganti Tema Halus
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

/* --- FUNGSI ANIMASI BARU: ALIEN VISITOR --- */
function spawnAlienVisitors() {
    // Munculkan beberapa objek sekaligus (misal 5)
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const visitor = document.createElement('div');
            visitor.classList.add('alien-visitor');
            
            // Posisi awal acak di sebelah kiri layar (biar melintas ke kanan)
            // Mulai dari -10vw sampai 30vw secara horizontal
            visitor.style.left = (Math.random() * 40 - 10) + 'vw'; 
            // Mulai dari ketinggian acak di atas layar
            visitor.style.top = (Math.random() * -20 - 10) + 'vh';
            
            // Durasi bervariasi agar tidak seragam (antara 2s - 4s)
            let duration = Math.random() * 2 + 2; 
            visitor.style.animationDuration = duration + 's';
            
            document.body.appendChild(visitor);
            
            // Hapus elemen setelah animasi selesai
            setTimeout(() => { visitor.remove(); }, duration * 1000 + 100);
        }, i * 300); // Jeda antar kemunculan
    }
}