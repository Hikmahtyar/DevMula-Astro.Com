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

/* =========================================
   6. LOGIKA SYSTEM KUIS (THE BRAIN) 🧠
   ========================================= */

// Bank Soal (Total 15 Soal)
const quizData = [
    {
        q: "Apa nama galaksi tetangga terdekat Bima Sakti?",
        options: ["Andromeda", "Triangulum", "Sombrero", "Whirlpool"],
        answer: 0 // Andromeda
    },
    {
        q: "Planet mana yang dijuluki 'Bintang Kejora'?",
        options: ["Mars", "Jupiter", "Venus", "Saturnus"],
        answer: 2 // Venus
    },
    {
        q: "Benda langit apa yang punya gravitasi terkuat hingga cahaya tidak bisa lolos?",
        options: ["Bintang Neutron", "Black Hole", "Supernova", "Nebula"],
        answer: 1 // Black Hole
    },
    {
        q: "Berapa lama waktu yang dibutuhkan cahaya Matahari sampai ke Bumi?",
        options: ["1 Detik", "8 Menit", "1 Jam", "1 Tahun"],
        answer: 1 // 8 Menit
    },
    {
        q: "Apa nama satelit alami terbesar milik planet Saturnus?",
        options: ["Europa", "Ganymede", "Titan", "Phobos"],
        answer: 2 // Titan
    },
    {
        q: "Planet manakah yang dikenal sebagai 'Planet Merah'?",
        options: ["Merkurius", "Mars", "Jupiter", "Venus"],
        answer: 1 // Mars
    },
    {
        q: "Apa nama galaksi tempat Tata Surya kita berada?",
        options: ["Andromeda", "Triangulum", "Bima Sakti", "Magellan"],
        answer: 2 // Bima Sakti
    },
    {
        q: "Siapakah manusia pertama yang menginjakkan kaki di Bulan?",
        options: ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "Elon Musk"],
        answer: 2 // Neil Armstrong
    },
    {
        q: "Warna bintang apa yang menandakan suhu paling panas?",
        options: ["Merah", "Kuning", "Putih", "Biru"],
        answer: 3 // Biru
    },
    {
        q: "Planet terbesar di Tata Surya adalah...",
        options: ["Bumi", "Saturnus", "Jupiter", "Uranus"],
        answer: 2 // Jupiter
    },
    {
        q: "Fenomena 'Bintang Jatuh' sebenarnya adalah...",
        options: ["Meteor yang terbakar", "Bintang meledak", "Komet lewat", "Alien mendarat"],
        answer: 0 // Meteor
    },
    {
        q: "Apa nama rasi bintang yang berbentuk seperti Kalajengking?",
        options: ["Orion", "Scorpio", "Leo", "Gemini"],
        answer: 1 // Scorpio
    },
    {
        q: "Planet manakah yang tidak memiliki satelit alami (Bulan)?",
        options: ["Bumi", "Mars", "Merkurius", "Neptunus"],
        answer: 2 // Merkurius (dan Venus)
    },
    {
        q: "Lapisan terluar Matahari yang terlihat saat gerhana total disebut...",
        options: ["Inti", "Fotosfer", "Korona", "Kromosfer"],
        answer: 2 // Korona
    },
    {
        q: "Satu tahun di planet ini setara dengan 165 tahun di Bumi. Planet apa itu?",
        options: ["Uranus", "Neptunus", "Saturnus", "Pluto"],
        answer: 1 // Neptunus
    }
];

// Variabel Kontrol
const quizOverlay = document.getElementById('quiz-overlay');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const quizResult = document.getElementById('quiz-result');
const quizContent = document.getElementById('quiz-content');

// Fungsi Buka Kuis
function openQuiz() {
    quizOverlay.classList.add('active');
    loadRandomQuestion();
}

// Fungsi Tutup Kuis
function closeQuiz() {
    quizOverlay.classList.remove('active');
}

// Fungsi Load Soal Acak
function loadRandomQuestion() {
    // Reset Tampilan
    quizContent.style.display = 'block';
    quizResult.classList.remove('active');
    optionsContainer.innerHTML = '';

    // Ambil soal acak
    const randomIndex = Math.floor(Math.random() * quizData.length);
    const currentQuiz = quizData[randomIndex];

    // Tampilkan Soal
    questionText.innerText = currentQuiz.q;

    // Tampilkan Opsi Jawaban
    currentQuiz.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.classList.add('btn-option');
        // Saat diklik, cek jawaban
        btn.onclick = () => checkAnswer(index, currentQuiz.answer, btn);
        optionsContainer.appendChild(btn);
    });
}

// Fungsi Cek Jawaban (Logic Cerdas)
function checkAnswer(selectedIndex, correctIndex, btnElement) {
    // Kunci semua tombol biar gak bisa klik lagi
    const allBtns = optionsContainer.querySelectorAll('.btn-option');
    allBtns.forEach(btn => btn.disabled = true);

    if (selectedIndex === correctIndex) {
        // JIKA BENAR
        btnElement.classList.add('correct');
        showResult(true);
    } else {
        // JIKA SALAH
        btnElement.classList.add('wrong');
        // Kasih tau mana yang bener
        allBtns[correctIndex].classList.add('correct');
        showResult(false);
    }
}

// Fungsi Tampilkan Hasil
function showResult(isCorrect) {
    setTimeout(() => {
        quizContent.style.display = 'none';
        quizResult.classList.add('active');
        
        const icon = document.getElementById('result-icon');
        const title = document.getElementById('result-title');
        const desc = document.getElementById('result-desc');

        if(isCorrect) {
            icon.innerText = "🎉";
            title.innerText = "Luar Biasa!";
            title.style.color = "#00b894";
            desc.innerText = "Wawasan kamu sekelas Astronaut NASA!";
        } else {
            icon.innerText = "☄️";
            title.innerText = "Nyaris...";
            title.style.color = "#d63031";
            desc.innerText = "Jangan menyerah, ayo coba soal lain!";
        }
    }, 800); // Jeda sedikit biar user lihat jawaban dulu
}