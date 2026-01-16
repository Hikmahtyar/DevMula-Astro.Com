// =========================================
// 1. SYSTEM FILTER & SEARCH (SINKRON)
// =========================================

function filterObjects(category) {
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('searchInput');

    // A. Reset Search Input saat ganti kategori (Biar user tidak bingung)
    if (searchInput) searchInput.value = '';

    // B. Update Tombol Active
    buttons.forEach(btn => {
        btn.classList.remove('active');
        // Cek onclick attribute untuk mencocokkan kategori
        const btnCategory = btn.getAttribute('onclick');
        if (btnCategory.includes(`'${category}'`)) {
            btn.classList.add('active');
        }
    });

    // C. Logika Tampil/Sembunyi Kartu
    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        let shouldShow = false;

        // Jika 'all': Tampilkan semua KECUALI Berita
        if (category === 'all') {
            if (cardCat !== 'berita') shouldShow = true;
        } 
        // Jika kategori spesifik (termasuk berita): Tampilkan yang cocok
        else {
            if (cardCat === category) shouldShow = true;
        }

        // Eksekusi Tampilan dengan Animasi
        if (shouldShow) {
            card.classList.remove('hidden');
            // Trik reset animasi CSS agar main ulang
            card.style.animation = 'none';
            card.offsetHeight; /* Trigger reflow */
            card.style.animation = 'fadeIn 0.5s ease forwards';
        } else {
            card.classList.add('hidden');
        }
    });
}

// =========================================
// 2. SYSTEM PENCARIAN (LIVE SEARCH)
// =========================================

function searchObjects() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Matikan highlight di tombol filter saat user mulai mengetik
    if (input.length > 0) {
        buttons.forEach(btn => btn.classList.remove('active'));
    } else {
        // Jika input dikosongkan kembali, aktifkan tombol 'Semua'
        const allBtn = document.querySelector(".filter-btn[onclick=\"filterObjects('all')\"]");
        if(allBtn) allBtn.classList.add('active');
    }

    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        const desc = card.querySelector('p').innerText.toLowerCase();
        
        // Cari kecocokan di Judul ATAU Deskripsi
        if (title.includes(input) || desc.includes(input)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// =========================================
// 3. TEMA (DARK/LIGHT) & EFEK METEOR
// =========================================

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Cek LocalStorage saat website dimuat
if (localStorage.getItem('theme') === 'light') {
    enableLightMode();
}

themeToggle.addEventListener('click', () => {
    createMeteorShower(); // Efek visual saat klik
    if (body.classList.contains('light-mode')) {
        disableLightMode();
    } else {
        enableLightMode();
    }
});

function enableLightMode() {
    body.classList.add('light-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    localStorage.setItem('theme', 'light');
}

function disableLightMode() {
    body.classList.remove('light-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    localStorage.setItem('theme', 'dark');
}

function createMeteorShower() {
    // Membuat 15 meteor secara acak
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const meteor = document.createElement('div');
            meteor.classList.add('meteor');
            
            // Posisi acak horizontal
            meteor.style.left = Math.random() * 100 + 'vw';
            // Kecepatan acak
            const duration = Math.random() * 0.5 + 0.5;
            meteor.style.animationDuration = duration + 's';
            
            // Variasi Warna Meteor (Merah/Putih/Biru)
            const colors = ['#ff6b6b', '#ffffff', '#74b9ff'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            meteor.style.background = `linear-gradient(to bottom, transparent, ${randomColor})`;
            
            document.body.appendChild(meteor);

            // Hapus elemen setelah animasi selesai agar memori tidak penuh
            setTimeout(() => { meteor.remove(); }, duration * 1000);
        }, i * 100);
    }
}

// =========================================
// 4. LINK HANDLER (PESAN UNDER CONSTRUCTION)
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    const allCards = document.querySelectorAll('.card');
    
    allCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const link = this.getAttribute('href');
            
            // Jika link kosong atau pagar (#)
            if (link === '#' || link === '' || link === null) {
                e.preventDefault();
                // Alert yang lebih ramah
                alert("🚀 Maaf, data objek ini sedang disusun oleh tim DevMula Astro. Coba cek objek lain ya!");
            }
        });
    });
});

// --- WARP DRIVE SYSTEM ---
function activateWarpDrive() {
    // 1. Ambil semua link kartu yang ada di halaman
    const allCards = document.querySelectorAll('.card');
    const validLinks = [];

    // Filter link yang valid (bukan '#' atau kosong)
    allCards.forEach(card => {
        const link = card.getAttribute('href');
        if (link && link !== '#' && link !== 'javascript:void(0)') {
            validLinks.push(link);
        }
    });

    if (validLinks.length === 0) {
        alert("Belum ada destinasi yang siap dijelajahi kapten!");
        return;
    }

    // 2. Pilih satu secara acak
    const randomDest = validLinks[Math.floor(Math.random() * validLinks.length)];

    // 3. Mainkan Animasi
    const overlay = document.getElementById('warp-overlay');
    overlay.classList.add('active');

    // 4. Pindah Halaman setelah 1.5 detik (durasi efek)
    setTimeout(() => {
        window.location.href = randomDest;
    }, 1500);
}