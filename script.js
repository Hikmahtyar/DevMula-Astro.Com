/* =========================================
   LOGIKA FILTER & TEMA (FINAL GABUNGAN)
   ========================================= */

// 1. FILTER KATEGORI
function filterObjects(category) {
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.filter-btn');

    // --- A. UPDATE TOMBOL (PAKAI LOGIKA FIX GUGUS BINTANG) ---
    buttons.forEach(btn => {
        btn.classList.remove('active');
        
        // Ambil perintah onclick biar akurat
        const command = btn.getAttribute('onclick');

        if(category === 'all') {
             if(btn.innerText === 'Semua') btn.classList.add('active');
        } 
        // Cek kode onclick, bukan teks tombolnya (Biar Bintang & Gugus Bintang aman)
        else if (command.includes(`'${category}'`)) {
             btn.classList.add('active');
        }
    });

    // --- B. PROSES FILTER KARTU (PAKAI LOGIKA PEMISAH BERITA) ---
    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        let shouldShow = false;

        // Logika: Jika klik 'Semua', Berita JANGAN muncul
        if (category === 'all') {
            if (cardCat !== 'berita') {
                shouldShow = true;
            }
        } 
        // Logika: Jika klik kategori tertentu (termasuk berita), tampilkan yang sesuai
        else {
            if (cardCat === category) {
                shouldShow = true;
            }
        }

        // Eksekusi Tampil/Sembunyi
        if (shouldShow) {
            card.classList.remove('hidden');
            card.style.animation = 'none';
            card.offsetHeight; 
            card.style.animation = 'fadeIn 0.5s ease forwards';
        } else {
            card.classList.add('hidden');
        }
    });
}


// 2. TEMA & METEOR MERAH
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

if (localStorage.getItem('theme') === 'light') {
    enableLightMode();
}

themeToggle.addEventListener('click', () => {
    createMeteorShower();
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

// 3. FUNGSI HUJAN METEOR
function createMeteorShower() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const meteor = document.createElement('div');
            meteor.classList.add('meteor');
            meteor.style.left = Math.random() * 100 + 'vw';
            let duration = Math.random() * 0.5 + 0.5;
            meteor.style.animationDuration = duration + 's';
            document.body.appendChild(meteor);
            setTimeout(() => { meteor.remove(); }, duration * 1000);
        }, i * 50);
    }
}

// 4. LOGIKA LINK BELUM TERSEDIA
document.addEventListener('DOMContentLoaded', () => {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const link = this.getAttribute('href');
            if (link === '#' || link === '' || link === null) {
                e.preventDefault();
                alert("Maaf, artikel ini belum tersedia saat ini. \n Masih dalam pemngembangan! 🚀");
            }
        });
    });
});