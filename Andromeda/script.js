/* =========================================
   LOGIKA JS ARTIKEL (ANDROMEDA)
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    
    // Inisialisasi AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // ELEMENT SELECTORS
    const themeBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = themeBtn.querySelector('i');
    const body = document.body;
    const progressBar = document.querySelector(".reading-progress-bar");

    // 1. SYSTEM TEMA (DARK/LIGHT)
    let currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
        enableLightMode();
    }

    themeBtn.addEventListener('click', () => {
        createMeteorShower(); // Efek Visual
        
        // Animasi transisi icon
        themeBtn.style.transform = "rotate(180deg)";
        setTimeout(() => themeBtn.style.transform = "rotate(0deg)", 300);

        setTimeout(() => {
            if (body.classList.contains('light-mode')) {
                disableLightMode();
            } else {
                enableLightMode();
            }
        }, 150);
    });

    function enableLightMode() {
        body.classList.add('light-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    }

    function disableLightMode() {
        body.classList.remove('light-mode');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    }

    // 2. SYSTEM METEOR SHOWER
    function createMeteorShower() {
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const meteor = document.createElement('div');
                meteor.classList.add('meteor-projectile');
                
                // Posisi Acak
                meteor.style.left = Math.random() * 100 + 'vw';
                
                // Kecepatan & Durasi Acak
                let duration = Math.random() * 0.5 + 0.6;
                meteor.style.animationDuration = duration + 's';
                
                document.body.appendChild(meteor);

                // Hapus elemen setelah animasi
                setTimeout(() => { meteor.remove(); }, duration * 1000);
                
            }, i * 100);
        }
    }

    // 3. READING PROGRESS BAR
    window.onscroll = function() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    };

});