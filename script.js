/* =========================================
   LOGIKA UTAMA ENSIKLOPEDIA (SCRIPT.JS)
   ========================================= */

// 1. SYSTEM FILTER KATEGORI
function filterObjects(category) {
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('searchInput');

    // Reset Search Input saat ganti kategori
    if (searchInput) searchInput.value = '';

    // Update Tombol Active
    buttons.forEach(btn => {
        btn.classList.remove('active');
        const btnCategory = btn.getAttribute('onclick');
        if (btnCategory.includes(`'${category}'`)) {
            btn.classList.add('active');
        }
    });

    // Logika Tampil/Sembunyi Kartu
    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        let shouldShow = false;

        if (category === 'all') {
            // Tampilkan semua kecuali berita
            if (cardCat !== 'berita') shouldShow = true;
        } else {
            // Tampilkan sesuai kategori
            if (cardCat === category) shouldShow = true;
        }

        if (shouldShow) {
            card.classList.remove('hidden');
            // Reset animasi biar play ulang
            card.style.animation = 'none';
            card.offsetHeight; /* Trigger reflow */
            card.style.animation = 'fadeIn 0.5s ease forwards';
        } else {
            card.classList.add('hidden');
        }
    });
}

// 2. SYSTEM PENCARIAN (LIVE SEARCH)
function searchObjects() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.filter-btn');

    if (input.length > 0) {
        buttons.forEach(btn => btn.classList.remove('active'));
    } else {
        const allBtn = document.querySelector(".filter-btn[onclick=\"filterObjects('all')\"]");
        if(allBtn) allBtn.classList.add('active');
    }

    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        const desc = card.querySelector('p').innerText.toLowerCase();
        
        if (title.includes(input) || desc.includes(input)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// 3. TEMA (DARK/LIGHT) & EFEK METEOR
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle ? themeToggle.querySelector('i') : null;

// Cek LocalStorage saat load
if (localStorage.getItem('theme') === 'light') {
    enableLightMode();
}

if(themeToggle) {
    themeToggle.addEventListener('click', () => {
        createMeteorShower();
        if (body.classList.contains('light-mode')) {
            disableLightMode();
        } else {
            enableLightMode();
        }
    });
}

function enableLightMode() {
    body.classList.add('light-mode');
    if(icon) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    localStorage.setItem('theme', 'light');
}

function disableLightMode() {
    body.classList.remove('light-mode');
    if(icon) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    localStorage.setItem('theme', 'dark');
}

function createMeteorShower() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const meteor = document.createElement('div');
            meteor.classList.add('meteor');
            meteor.style.left = Math.random() * 100 + 'vw';
            meteor.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
            
            const colors = ['#ff6b6b', '#ffffff', '#74b9ff'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            meteor.style.background = `linear-gradient(to bottom, transparent, ${randomColor})`;
            
            document.body.appendChild(meteor);
            setTimeout(() => { meteor.remove(); }, 1000);
        }, i * 100);
    }
}

// 4. LINK HANDLER (PESAN BELUM TERSEDIA)
document.addEventListener('DOMContentLoaded', () => {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const link = this.getAttribute('href');
            if (link === '#' || link === '' || link === null) {
                e.preventDefault();
                alert("🚀 Maaf, data objek ini sedang disusun oleh tim DevMula Astro. Coba cek objek lain ya!");
            }
        });
    });
});

// 5. WARP DRIVE SYSTEM (DENGAN FIX BACK BUTTON)
function activateWarpDrive() {
    const allCards = document.querySelectorAll('.card');
    const validLinks = [];

    // Cari link yang valid
    allCards.forEach(card => {
        const link = card.getAttribute('href');
        // Pastikan link bukan #, kosong, atau javascript void
        if (link && link !== '#' && link !== '' && !link.startsWith('javascript')) {
            validLinks.push(link);
        }
    });

    if (validLinks.length === 0) {
        alert("Belum ada destinasi yang siap dijelajahi kapten!");
        return;
    }

    const randomDest = validLinks[Math.floor(Math.random() * validLinks.length)];
    const overlay = document.getElementById('warp-overlay');
    
    if(overlay) {
        overlay.classList.add('active'); // Nyalakan layar hitam
        
        setTimeout(() => {
            window.location.href = randomDest;
        }, 1500);
    }
}

/* ====================================================
   🔥 FIX PENTING: MENGATASI TOMBOL BACK DI HP 🔥
   Fungsi ini akan dijalankan setiap kali halaman tampil,
   termasuk saat user menekan tombol Back dari history.
   ==================================================== */
window.addEventListener('pageshow', function(event) {
    const overlay = document.getElementById('warp-overlay');
    
    // Jika overlay ditemukan, PAKSA matikan kelas 'active'
    if (overlay) {
        overlay.classList.remove('active');
    }
});