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
   LOGIKA SYSTEM KUIS (ALIEN EDITION) 👽
   ========================================= */

// Bank Soal Lengkap (15 Soal)
const fullQuizData = [
    { q: "Apa nama galaksi tetangga terdekat Bima Sakti?", options: ["Andromeda", "Triangulum", "Sombrero", "Whirlpool"], answer: 0 },
    { q: "Planet mana yang dijuluki 'Bintang Kejora'?", options: ["Mars", "Jupiter", "Venus", "Saturnus"], answer: 2 },
    { q: "Apa yang ada di pusat Bima Sakti?", options: ["Matahari", "Black Hole Supermasif", "Bintang Neutron", "Planet Raksasa"], answer: 1 },
    { q: "Berapa lama cahaya Matahari sampai ke Bumi?", options: ["1 Detik", "8 Menit", "1 Jam", "1 Tahun"], answer: 1 },
    { q: "Satelit alami terbesar milik Saturnus adalah...", options: ["Europa", "Ganymede", "Titan", "Phobos"], answer: 2 },
    { q: "Planet 'Merah' di Tata Surya adalah...", options: ["Merkurius", "Mars", "Jupiter", "Venus"], answer: 1 },
    { q: "Kita tinggal di galaksi...", options: ["Andromeda", "Triangulum", "Bima Sakti", "Magellan"], answer: 2 },
    { q: "Manusia pertama di Bulan?", options: ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "Elon Musk"], answer: 2 },
    { q: "Bintang terpanas berwarna...", options: ["Merah", "Kuning", "Putih", "Biru"], answer: 3 },
    { q: "Planet terbesar di Tata Surya?", options: ["Bumi", "Saturnus", "Jupiter", "Uranus"], answer: 2 },
    { q: "Apa itu 'Bintang Jatuh'?", options: ["Meteor terbakar", "Bintang meledak", "Komet", "UFO"], answer: 0 },
    { q: "Rasi bintang berbentuk Kalajengking?", options: ["Orion", "Scorpio", "Leo", "Gemini"], answer: 1 },
    { q: "Planet tanpa satelit alami?", options: ["Bumi", "Mars", "Merkurius", "Neptunus"], answer: 2 },
    { q: "Lapisan luar Matahari saat gerhana?", options: ["Inti", "Fotosfer", "Korona", "Kromosfer"], answer: 2 },
    { q: "1 Tahun di sana = 165 Tahun Bumi. Planet apa?", options: ["Uranus", "Neptunus", "Saturnus", "Pluto"], answer: 1 }
];

// Variabel Game
let gameQuestions = [];
let currentQIndex = 0;
let score = 0;
let lives = 3; // Nyawa awal
let isGameOver = false;

// Selectors
const overlay = document.getElementById('quiz-overlay');
const viewStart = document.getElementById('view-start');
const viewGame = document.getElementById('view-game');
const viewResult = document.getElementById('view-result');
const viewAlien = document.getElementById('view-alien');

const qText = document.getElementById('question-text');
const optContainer = document.getElementById('options-container');
const scoreDisplay = document.getElementById('score-display');
const livesDisplay = document.getElementById('lives-display');
const finalScore = document.getElementById('final-score');

// 1. FUNGSI BUKA TUTUP
function openQuiz() {
    overlay.classList.add('active');
    showView('start'); // Selalu mulai dari Start Screen
}

function closeQuiz() {
    overlay.classList.remove('active');
}

// 2. LOGIKA PINDAH LAYAR
function showView(viewName) {
    // Sembunyikan semua view
    viewStart.classList.add('hidden');
    viewGame.classList.add('hidden');
    viewResult.classList.add('hidden');
    viewAlien.classList.add('hidden');

    // Munculkan yang diminta
    if(viewName === 'start') viewStart.classList.remove('hidden');
    if(viewName === 'game') viewGame.classList.remove('hidden');
    if(viewName === 'result') viewResult.classList.remove('hidden');
    if(viewName === 'alien') viewAlien.classList.remove('hidden');
}

// 3. MULAI GAME (RESET & SHUFFLE)
function startQuizGame() {
    score = 0;
    lives = 3;
    currentQIndex = 0;
    isGameOver = false;
    updateStats();

    // Acak Soal (Fisher-Yates Shuffle)
    gameQuestions = [...fullQuizData].sort(() => Math.random() - 0.5);
    // Ambil 10 soal saja per sesi biar ga kepanjangan (Opsional)
    gameQuestions = gameQuestions.slice(0, 10); 

    showView('game');
    loadQuestion();
}

// 4. LOAD PERTANYAAN
function loadQuestion() {
    if (currentQIndex >= gameQuestions.length) {
        finishGame(); // Soal habis, menang
        return;
    }

    const currentData = gameQuestions[currentQIndex];
    qText.innerText = `${currentQIndex + 1}. ${currentData.q}`;
    optContainer.innerHTML = '';

    currentData.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.classList.add('btn-option');
        btn.onclick = () => checkAnswer(index, currentData.answer, btn);
        optContainer.appendChild(btn);
    });
}

// 5. CEK JAWABAN (THE CORE LOGIC)
function checkAnswer(selectedIndex, correctIndex, btn) {
    if(isGameOver) return;

    // Kunci tombol
    const allBtns = optContainer.querySelectorAll('.btn-option');
    allBtns.forEach(b => b.disabled = true);

    if (selectedIndex === correctIndex) {
        // BENAR
        btn.classList.add('correct');
        score += 10;
        updateStats();
        setTimeout(() => {
            currentQIndex++;
            loadQuestion();
        }, 800);
    } else {
        // SALAH
        btn.classList.add('wrong');
        allBtns[correctIndex].classList.add('correct'); // Kasih tau yang bener
        lives--;
        updateStats();

        // Cek Nyawa Habis (ALIEN DETECTED!)
        if (lives <= 0) {
            isGameOver = true;
            setTimeout(() => showView('alien'), 1000);
        } else {
            setTimeout(() => {
                currentQIndex++;
                loadQuestion();
            }, 1000);
        }
    }
}

// 6. UPDATE STATUS (NYAWA & SKOR)
function updateStats() {
    scoreDisplay.innerText = `Skor: ${score}`;
    // Ubah angka nyawa jadi ikon hati
    let heartString = "";
    for(let i=0; i<lives; i++) heartString += "❤️";
    // Kalau nyawa habis kasih tengkorak
    if(lives===0) heartString = "💀";
    livesDisplay.innerText = heartString;
}

// 7. GAME SELESAI (MENANG)
function finishGame() {
    finalScore.innerText = score;
    showView('result');
}