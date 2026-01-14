const themeBtn = document.getElementById('theme-toggle-btn');
const themeIcon = themeBtn.querySelector('i');
const body = document.body;
const meteorContainer = document.getElementById('meteor-container');

let currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') { enableLightMode(); }

themeBtn.addEventListener('click', () => {
    createMeteorShower();
    setTimeout(() => {
        if (body.classList.contains('light-mode')) { disableLightMode(); } 
        else { enableLightMode(); }
    }, 200);
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

function createMeteorShower() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const meteor = document.createElement('div');
            meteor.classList.add('meteor-projectile');
            meteor.style.left = Math.random() * 100 + 'vw';
            let duration = Math.random() * 0.5 + 0.5;
            meteor.style.animationDuration = duration + 's';
            document.body.appendChild(meteor);
            setTimeout(() => { meteor.remove(); }, duration * 1000);
        }, i * 80); 
    }
}