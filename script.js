/* =========================================
   ENSIKLOPEDIA SEMESTA - MAIN LOGIC
   ========================================= */

// --- 1. SYSTEM FILTER KATEGORI ---
function filterObjects(category) {
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('searchInput');

    // Reset Search Input saat ganti kategori
    if (searchInput) searchInput.value = '';

    // Update Tombol Active
    buttons.forEach(btn => {
        btn.classList.remove('active');
        // Cek onclick attribute untuk mencocokkan kategori
        const btnOnclick = btn.getAttribute('onclick');
        if (btnOnclick && btnOnclick.includes(`'${category}'`)) {
            btn.classList.add('active');
        }
    });

    // Logika Tampil/Sembunyi Kartu
    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        let shouldShow = false;

        if (category === 'all') {
            // Tampilkan semua kecuali berita (opsional, tergantung preferensi)
            if (cardCat !== 'berita') shouldShow = true;
        } else {
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

// --- 2. SYSTEM PENCARIAN (LIVE SEARCH) ---
function searchObjects() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Matikan highlight tombol filter saat mencari
    if (input.length > 0) {
        buttons.forEach(btn => btn.classList.remove('active'));
    } else {
        // Kembalikan ke 'Semua' jika kosong
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

// --- 3. WARP DRIVE SYSTEM (FIXED) 🚀 ---
function activateWarpDrive() {
    const allCards = document.querySelectorAll('.card');
    const validLinks = [];

    // Cari link yang valid dari kartu yang ada
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

    // Pilih destinasi acak
    const randomDest = validLinks[Math.floor(Math.random() * validLinks.length)];
    const overlay = document.getElementById('warp-overlay');
    
    // Aktifkan Efek Layar Hitam
    if(overlay) {
        overlay.classList.add('active'); 
        
        // Pindah halaman setelah 1.5 detik (tunggu animasi selesai)
        setTimeout(() => {
            window.location.href = randomDest;
        }, 1500);
    } else {
        // Fallback jika overlay tidak ada di HTML
        window.location.href = randomDest;
    }
}

// --- 4. ANTI-STUCK BACK BUTTON FIX ---
// Mematikan layar hitam saat user menekan tombol Back di HP
window.addEventListener('pageshow', function(event) {
    const overlay = document.getElementById('warp-overlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
});


/* =========================================
   LOGIKA SYSTEM KUIS (ALIEN EDITION) 👽
   ========================================= */

// Bank Soal Lengkap
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
let lives = 3; 
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

// FUNGSI BUKA TUTUP KUIS
function openQuiz() {
    if(overlay) {
        overlay.classList.add('active');
        showView('start');
    }
}

function closeQuiz() {
    if(overlay) overlay.classList.remove('active');
}

// LOGIKA PINDAH LAYAR
function showView(viewName) {
    // Sembunyikan semua view
    if(viewStart) viewStart.classList.add('hidden');
    if(viewGame) viewGame.classList.add('hidden');
    if(viewResult) viewResult.classList.add('hidden');
    if(viewAlien) viewAlien.classList.add('hidden');

    // Munculkan yang diminta
    if(viewName === 'start' && viewStart) viewStart.classList.remove('hidden');
    if(viewName === 'game' && viewGame) viewGame.classList.remove('hidden');
    if(viewName === 'result' && viewResult) viewResult.classList.remove('hidden');
    if(viewName === 'alien' && viewAlien) viewAlien.classList.remove('hidden');
}

// MULAI GAME
function startQuizGame() {
    score = 0;
    lives = 3;
    currentQIndex = 0;
    isGameOver = false;
    updateStats();

    // Acak Soal
    gameQuestions = [...fullQuizData].sort(() => Math.random() - 0.5).slice(0, 10); 
    showView('game');
    loadQuestion();
}

// LOAD PERTANYAAN
function loadQuestion() {
    if (currentQIndex >= gameQuestions.length) {
        finishGame(); 
        return;
    }

    const currentData = gameQuestions[currentQIndex];
    if(qText) qText.innerText = `${currentQIndex + 1}. ${currentData.q}`;
    if(optContainer) {
        optContainer.innerHTML = '';
        currentData.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.innerText = opt;
            btn.classList.add('btn-option');
            btn.onclick = () => checkAnswer(index, currentData.answer, btn);
            optContainer.appendChild(btn);
        });
    }
}

// CEK JAWABAN
function checkAnswer(selectedIndex, correctIndex, btn) {
    if(isGameOver) return;

    const allBtns = optContainer.querySelectorAll('.btn-option');
    allBtns.forEach(b => b.disabled = true);

    if (selectedIndex === correctIndex) {
        btn.classList.add('correct');
        score += 10;
        updateStats();
        setTimeout(() => {
            currentQIndex++;
            loadQuestion();
        }, 800);
    } else {
        btn.classList.add('wrong');
        allBtns[correctIndex].classList.add('correct');
        lives--;
        updateStats();

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

// UPDATE STATUS
function updateStats() {
    if(scoreDisplay) scoreDisplay.innerText = `Skor: ${score}`;
    let heartString = "";
    for(let i=0; i<lives; i++) heartString += "❤️";
    if(lives===0) heartString = "💀";
    if(livesDisplay) livesDisplay.innerText = heartString;
}

// GAME SELESAI
function finishGame() {
    if(finalScore) finalScore.innerText = score;
    showView('result');
}