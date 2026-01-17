/* =========================================
   LOGIKA EXOPLANET (FULL 40 PLANET + SCIENTIFIC DATA)
   ========================================= */

const planetsDB = {
    'bumi': [
        { 
            name: "Kepler-186f", dist: "500 LY", type: "Super-Earth", habit: 85, 
            img: "https://gdb.voanews.com/ff0e0846-76d7-4f61-8021-d5e888e6d84b_w1080_h608.jpg", 
            desc: "Planet seukuran Bumi pertama di zona layak huni. Bintangnya lebih dingin dari Matahari, membuat tanaman di sini mungkin berwarna merah.",
            mass: "1.7 x Bumi", radius: "1.2 x Bumi", orbit: "130 Hari", disc: "2014", temp: "-85°C", gravity: "1.3 G", star: "M-Dwarf", method: "Transit", atmos: ["Nitrogen", "CO2", "Metana"] 
        },
        { 
            name: "Proxima Centauri b", dist: "4.2 LY", type: "Exo-Earth", habit: 70, 
            img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnsbJdfiiUEDNe7NeCdECHrZnauLvaDGjuie7QHXAb-wI4cWibY0wAA4eQ-Ruywzv1AmZsI-iY9ApV10F4HHEEUBssPXXFuX9KCzi8CObI9CQsyNCxQhx8t0bXyq2JAk1ueYu-KQlr6x4/w0/proxima+b.jpg", 
            desc: "Tetangga terdekat. Mengalami penguncian pasang surut (satu sisi siang abadi).",
            mass: "1.3 x Bumi", radius: "1.0 x Bumi", orbit: "11.2 Hari", disc: "2016", temp: "-39°C", gravity: "1.1 G", star: "Proxima (Merah)", method: "Radial Velocity", atmos: ["Tipis", "Angin Surya"] 
        },
        { 
            name: "TRAPPIST-1e", dist: "39 LY", type: "Terrestrial", habit: 95, 
            img: "https://images.steamusercontent.com/ugc/1613934509120981691/E05BF2926593A41C2F352337FEBDDEB2227EC467/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            desc: "Sangat mirip Bumi, kemungkinan besar memiliki lautan air cair yang luas.",
            mass: "0.7 x Bumi", radius: "0.9 x Bumi", orbit: "6.1 Hari", disc: "2017", temp: "-20°C", gravity: "0.9 G", star: "Ultra-Cool Dwarf", method: "Transit", atmos: ["Oksigen", "Uap Air"] 
        },
        { 
            name: "Teegarden b", dist: "12 LY", type: "Terrestrial", habit: 98, 
            img: "https://assets.science.nasa.gov/dynamicimage/assets/science/astro/exo-explore/assets/content/planets/superearth-7.jpg", 
            desc: "Punya Indeks Kesamaan Bumi (ESI) tertinggi. Mengorbit bintang yang sangat tenang.",
            mass: "1.05 x Bumi", radius: "1.0 x Bumi", orbit: "4.9 Hari", disc: "2019", temp: "28°C", gravity: "1.0 G", star: "M-Dwarf", method: "Radial Velocity", atmos: ["Nitrogen", "Awan Air"] 
        },
        { name: "Kepler-452b", dist: "1400 LY", type: "Super-Earth", habit: 80, img: "https://external-preview.redd.it/43nlm0CFv9O-dc_cJ_GZjOwW0T1pLd3_anWFA0Rn4Oc.jpg?width=1080&crop=smart&auto=webp&s=3c773754ae99b9ab6f265181f0c795f3af906514", desc: "Sepupu Bumi yang lebih tua 1.5 miliar tahun.", mass: "5 x Bumi", radius: "1.6 x Bumi", orbit: "385 Hari", disc: "2015", temp: "-8°C", gravity: "2.0 G", star: "G-Type (Kuning)", method: "Transit", atmos: ["Tebal", "Berawan"] },
        { name: "TOI-700 d", dist: "100 LY", type: "Terrestrial", habit: 88, img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzKNenHLgpizWZOUIawJJkPvGgIbyVCye3us2QbelTQTGx3uzTlbGkx2e5HJpv8crmK2oWlYJ4h9-AfRji-pDvDK0FVBr8NBFPuHuUjtPo8MLUkfPitT6Pk1dhKgLzFg9C_MuaobULKkcIa8EGbjtA5ZJDjqFHoIEWts5kLPr7CVhLP93wcUidZN6x-9E/s16000-rw/TOI700d.jpg", desc: "Menerima 86% energi yang diterima Bumi dari Matahari.", mass: "1.7 x Bumi", radius: "1.2 x Bumi", orbit: "37 Hari", disc: "2020", temp: "-4°C", gravity: "1.1 G", star: "M-Dwarf", method: "Transit", atmos: ["CO2", "H2O"] },
        { name: "LHS 1140 b", dist: "40 LY", type: "Super-Earth", habit: 60, img: "https://sm.mashable.com/t/mashable_in/article/w/webb-teles/webb-telescope-may-have-just-revealed-an-alien-world-with-ai_79cx.1248.jpg", desc: "Planet berbatu raksasa, mungkin memiliki lautan magma di masa lalu.", mass: "6.5 x Bumi", radius: "1.4 x Bumi", orbit: "25 Hari", disc: "2017", temp: "-50°C", gravity: "3.2 G", star: "M-Dwarf", method: "Transit", atmos: ["Oksigen", "Nitrogen"] },
        { name: "Ross 128 b", dist: "11 LY", type: "Terrestrial", habit: 86, img: "https://planetary.s3.amazonaws.com/web/assets/video/ross128b.jpg", desc: "Bintang induknya tenang, tidak sering menyemburkan flare mematikan.", mass: "1.4 x Bumi", radius: "1.1 x Bumi", orbit: "9.9 Hari", disc: "2017", temp: "7°C", gravity: "1.12 G", star: "M-Dwarf", method: "Radial Velocity", atmos: ["Unknown"] },
        { name: "Kepler-1649c", dist: "300 LY", type: "Terrestrial", habit: 92, img: "https://i0.wp.com/shasthrasnehi.com/wp-content/uploads/2020/04/n1.jpg?resize=415%2C276&ssl=1", desc: "Ukuran dan suhu sangat identik dengan Bumi.", mass: "1.06 x Bumi", radius: "1.06 x Bumi", orbit: "19.5 Hari", disc: "2020", temp: "-39°C", gravity: "1.0 G", star: "M-Dwarf", method: "Transit", atmos: ["Nitrogen", "Metana"] },
        { name: "Gliese 667 Cc", dist: "23 LY", type: "Super-Earth", habit: 85, img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirJrGavaBr7bZrL_8f1o1ZWi1qsPLSU3UAlQf7PEbB2wqOcs2kbPffcRb0_mmzwUIY7pEhG30ykov32n9LeocigJ_M3nmS8dNzq99S7kVnDEQACPfcHc9lbf1ldKhfZyzjsEZ2spG7API/s1920/gliese+163c.jpg", desc: "Pemandangan langitnya memiliki 3 matahari.", mass: "3.8 x Bumi", radius: "1.5 x Bumi", orbit: "28 Hari", disc: "2011", temp: "4°C", gravity: "1.6 G", star: "Triple Star", method: "Radial Velocity", atmos: ["Tebal", "CO2"] }
    ],
    'jupiter': [
        { name: "HD 189733 b", dist: "63 LY", type: "Hot Jupiter", habit: 0, img: "https://assets.science.nasa.gov/dynamicimage/assets/science/astro/exo-explore/2024/03/HD189733b.jpg", desc: "Hujan kaca cair horizontal dengan angin 7000 km/jam.", mass: "1.1 Jup", radius: "1.1 Jup", orbit: "2.2 Hari", disc: "2005", temp: "1000°C", gravity: "2.5 G", star: "K-Type", method: "Transit", atmos: ["Silikat (Kaca)", "Metana"] },
        { name: "WASP-12b", dist: "870 LY", type: "Hot Jupiter", habit: 0, img: "https://science.nasa.gov/wp-content/uploads/2016/07/wasp12b.png", desc: "Sedang dimakan bintangnya hingga berbentuk lonjong.", mass: "1.4 Jup", radius: "1.9 Jup", orbit: "1.1 Hari", disc: "2008", temp: "2200°C", gravity: "1.8 G", star: "G-Type", method: "Transit", atmos: ["Logam Berat", "CO"] },
        { name: "KELT-9b", dist: "670 LY", type: "Ultra-Hot", habit: 0, img: "https://cdn.sci.news/images/2017/06/image_4924f-KELT-9b.jpg", desc: "Planet terpanas, molekul di sini terurai karena panas.", mass: "2.8 Jup", radius: "1.9 Jup", orbit: "1.5 Hari", disc: "2017", temp: "4300°C", gravity: "2.0 G", star: "A-Type (Biru)", method: "Transit", atmos: ["Besi Uap", "Titanium"] },
        { name: "TrES-2b", dist: "750 LY", type: "Dark Giant", habit: 0, img: "https://www.spitzer.caltech.edu/system/articles/images/2276/original/ssc2020-12_Rec.jpg?1596837221", desc: "Planet tergelap, memantulkan <1% cahaya.", mass: "1.2 Jup", radius: "1.3 Jup", orbit: "2.5 Hari", disc: "2011", temp: "980°C", gravity: "1.5 G", star: "G-Type", method: "Transit", atmos: ["Sodium", "Potassium"] },
        { name: "Kepler-7b", dist: "3000 LY", type: "Puffy Giant", habit: 0, img: "https://cdn.sci.news/images/2013/10/image_1422f-Kepler-7b.jpg", desc: "Sangat ringan, densitasnya seperti gabus (styrofoam).", mass: "0.4 Jup", radius: "1.5 Jup", orbit: "4.8 Hari", disc: "2010", temp: "1200°C", gravity: "0.4 G", star: "G-Type", method: "Transit", atmos: ["Hidrogen", "Helium"] },
        { name: "51 Pegasi b", dist: "50 LY", type: "Hot Jupiter", habit: 0, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JMHI1kM3XzakB88FnyhaoD6HNorekeoKQg&s", desc: "Exoplanet pertama yang ditemukan mengorbit bintang mirip Matahari.", mass: "0.5 Jup", radius: "1.9 Jup", orbit: "4.2 Hari", disc: "1995", temp: "1000°C", gravity: "0.4 G", star: "G-Type", method: "Radial Velocity", atmos: ["CO", "H2O"] },
        { name: "HAT-P-7b", dist: "1000 LY", type: "Hot Jupiter", habit: 0, img: "https://assets.science.nasa.gov/dynamicimage/assets/science/astro/exo-explore/assets/content/planets/gasgiant-7.jpg", desc: "Awan terbuat dari korundum (mineral rubi & safir).", mass: "1.8 Jup", radius: "1.4 Jup", orbit: "2.2 Hari", disc: "2008", temp: "2500°C", gravity: "2.1 G", star: "F-Type", method: "Transit", atmos: ["Rubi", "Safir"] },
        { name: "WASP-121b", dist: "850 LY", type: "Hot Jupiter", habit: 0, img: "https://cdn.discovermagazine.com/assets/image/56765/wasp-121b-x.jpg", desc: "Atmosfernya bocor logam berat ke luar angkasa.", mass: "1.2 Jup", radius: "1.8 Jup", orbit: "1.3 Hari", disc: "2015", temp: "2500°C", gravity: "1.2 G", star: "F-Type", method: "Transit", atmos: ["Besi", "Magnesium"] },
        { name: "HD 209458 b", dist: "159 LY", type: "Osiris", habit: 0, img: "https://upload.wikimedia.org/wikipedia/commons/8/84/Osiris_%28HD209458b%29_planet_illustration.jpeg", desc: "Planet pertama yang atmosfernya terdeteksi menguap.", mass: "0.7 Jup", radius: "1.3 Jup", orbit: "3.5 Hari", disc: "1999", temp: "1100°C", gravity: "0.9 G", star: "G-Type", method: "Transit", atmos: ["H2O", "Sodium"] },
        { name: "HR 8799 e", dist: "129 LY", type: "Super-Jupiter", habit: 0, img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GRAVITY_instrument_breaks_new_ground_in_exoplanet_imaging_HR_8799e.jpg", desc: "Planet muda yang masih bersinar terang akibat panas pembentukan.", mass: "7 Jup", radius: "1.2 Jup", orbit: "45 Tahun", disc: "2010", temp: "800°C", gravity: "10 G", star: "A-Type", method: "Direct Imaging", atmos: ["Metana", "Amonia"] }
    ],
    'neptunus': [
        { name: "Gliese 436 b", dist: "30 LY", type: "Hot Neptune", habit: 10, img: "https://i0.wp.com/langitselatan.com/wp-content/uploads/2012/07/gj436c.jpg?resize=500%2C281", desc: "Memiliki 'es panas' yang tetap padat meski suhu tinggi.", mass: "22 Bumi", radius: "4.3 Bumi", orbit: "2.6 Hari", disc: "2004", temp: "439°C", gravity: "1.2 G", star: "M-Dwarf", method: "Transit", atmos: ["Hidrogen", "Helium"] },
        { name: "K2-18b", dist: "124 LY", type: "Mini-Neptune", habit: 40, img: "https://assets.science.nasa.gov/dynamicimage/assets/science/astro/exo-explore/assets/content/planets/superearth-7.jpg", desc: "Ada uap air di atmosfer, kandidat dunia laut (Hycean).", mass: "8.6 Bumi", radius: "2.6 Bumi", orbit: "33 Hari", disc: "2015", temp: "-2°C", gravity: "1.3 G", star: "M-Dwarf", method: "Transit", atmos: ["Uap Air", "Hidrogen"] },
        { name: "HAT-P-26b", dist: "450 LY", type: "Neptunian", habit: 5, img: "https://assets.science.nasa.gov/dynamicimage/assets/science/astro/exo-explore/assets/content/planets/neptunelike-8.jpg", desc: "Atmosfer kaya hidrogen dan helium, dengan tanda air.", mass: "18 Bumi", radius: "6.3 Bumi", orbit: "4.2 Hari", disc: "2010", temp: "700°C", gravity: "0.8 G", star: "K-Type", method: "Transit", atmos: ["H2O", "H/He"] },
        { name: "GJ 3470 b", dist: "96 LY", type: "Warm Neptune", habit: 10, img: "https://assets.science.nasa.gov/dynamicimage/assets/science/astro/exo-explore/assets/content/planets/neptunelike-8.jpg", desc: "Memiliki langit biru akibat hamburan Rayleigh.", mass: "14 Bumi", radius: "4.6 Bumi", orbit: "3.3 Hari", disc: "2012", temp: "600°C", gravity: "0.7 G", star: "M-Dwarf", method: "Transit", atmos: ["Langit Biru", "H/He"] },
        { name: "WASP-107b", dist: "200 LY", type: "Super-Puff", habit: 0, img: "https://mediasvc.eurekalert.org/Api/v1/Multimedia/da50320e-4c4f-41f5-b7d1-354599b66992/Rendition/low-res/Content/Public", desc: "Sangat ringan seperti kapas gula.", mass: "30 Bumi", radius: "10 Bumi", orbit: "5.7 Hari", disc: "2017", temp: "500°C", gravity: "0.1 G", star: "K-Type", method: "Transit", atmos: ["Helium", "Pasir"] },
        { name: "Kepler-138d", dist: "218 LY", type: "Water World", habit: 30, img: "https://www.exoplanetkyoto.org/exohtml/Planets/DeepBlueWhite.bmp", desc: "Diduga sebagian besar adalah air bertekanan tinggi.", mass: "1 Bumi", radius: "1.2 Bumi", orbit: "23 Hari", disc: "2014", temp: "100°C", gravity: "0.7 G", star: "M-Dwarf", method: "Transit", atmos: ["Uap Air", "Tebal"] },
        { name: "TOI-1231 b", dist: "90 LY", type: "Sub-Neptune", habit: 20, img: "https://assets.science.nasa.gov/dynamicimage/assets/science/astro/exo-explore/2023/09/t/TOI1231b_1280.jpeg", desc: "Awan air tebal menghalangi pandangan ke permukaan.", mass: "15 Bumi", radius: "3.6 Bumi", orbit: "24 Hari", disc: "2020", temp: "60°C", gravity: "1.1 G", star: "M-Dwarf", method: "Transit", atmos: ["H2O", "Metana"] },
        { name: "NGTS-4b", dist: "920 LY", type: "Forbidden", habit: 0, img: "https://eyes.nasa.gov/apps/exo/assets/image/thumbnail/exoplanet/kepler-16-b-list.webp", desc: "Planet terlarang di 'Gurun Neptunus'.", mass: "20 Bumi", radius: "3.2 Bumi", orbit: "1.3 Hari", disc: "2018", temp: "1000°C", gravity: "2.0 G", star: "K-Type", method: "Transit", atmos: ["Logam", "Debu"] },
        { name: "Kepler-11e", dist: "2000 LY", type: "Mini-Neptune", habit: 0, img: "https://assets.science.nasa.gov/dynamicimage/assets/science/astro/exo-explore/assets/content/planets/neptunelike-8.jpg", desc: "Bagian dari sistem planet yang sangat padat.", mass: "8 Bumi", radius: "4.5 Bumi", orbit: "32 Hari", disc: "2011", temp: "300°C", gravity: "0.5 G", star: "G-Type", method: "Transit", atmos: ["H/He"] },
        { name: "Kepler-16b", dist: "200 LY", type: "Circumbinary", habit: 0, img: "https://preview.redd.it/artwork-501-kepler-16b-v0-oo2ikkdvx45f1.png?auto=webp&s=a49e70c80258a43cacbb09b34806f1bb60c6ca18", desc: "Seperti Tatooine, mengorbit 2 bintang.", mass: "0.3 Jup", radius: "0.7 Jup", orbit: "229 Hari", disc: "2011", temp: "-70°C", gravity: "1.2 G", star: "Binary", method: "Transit", atmos: ["H/He", "Dingin"] }
    ],
    'mars': [
        { name: "Kepler-138b", dist: "218 LY", type: "Sub-Earth", habit: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTN5_Fcauors7QBJQea3XT-J2iog5sJnca1A&s", desc: "Salah satu exoplanet terkecil, ukurannya mirip Mars.", mass: "0.07 Bumi", radius: "0.5 Bumi", orbit: "10 Hari", disc: "2014", temp: "200°C", gravity: "0.3 G", star: "M-Dwarf", method: "Transit", atmos: ["Tipis"] },
        { name: "L 98-59b", dist: "35 LY", type: "Terrestrial", habit: 10, img: "https://assets.science.nasa.gov/dynamicimage/assets/science/astro/exo-explore/assets/content/planets/terrestrial-4.jpg", desc: "Kering dan berbatu, lebih kecil dari Bumi.", mass: "0.4 Bumi", radius: "0.8 Bumi", orbit: "2.3 Hari", disc: "2019", temp: "300°C", gravity: "0.8 G", star: "M-Dwarf", method: "Transit", atmos: ["CO2", "Sulfur"] },
        { name: "Kepler-444b", dist: "117 LY", type: "Rocky", habit: 0, img: "https://www.glasgowworld.com/jpim-static/image/2023/01/12/12/star2.jpg?crop=3:2,smart&trim=&width=1200&auto=webp&quality=75", desc: "Mengorbit salah satu bintang tertua di galaksi.", mass: "Unk", radius: "0.4 Bumi", orbit: "3.6 Hari", disc: "2015", temp: "500°C", gravity: "0.5 G", star: "K-Type (Tua)", method: "Transit", atmos: ["Tidak Ada"] },
        { name: "TRAPPIST-1b", dist: "39 LY", type: "Rocky", habit: 10, img: "https://upload.wikimedia.org/wikipedia/commons/b/b3/TRAPPIST-1b_artist_impression_2018.png", desc: "Sangat panas, mirip Venus atau Merkurius.", mass: "0.8 Bumi", radius: "1.1 Bumi", orbit: "1.5 Hari", disc: "2017", temp: "120°C", gravity: "0.8 G", star: "Ultra-Cool Dwarf", method: "Transit", atmos: ["CO2 Tebal"] },
        { name: "Proxima d", dist: "4.2 LY", type: "Sub-Earth", habit: 15, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0WssPyChW_U-wQ7nQb7S1Tz80UhUqUBGUlQ&s", desc: "Planet paling ringan di sistem Proxima.", mass: "0.26 Bumi", radius: "0.8 Bumi", orbit: "5.1 Hari", disc: "2022", temp: "87°C", gravity: "0.4 G", star: "Proxima", method: "Radial Velocity", atmos: ["Unknown"] },
        { name: "Kepler-37b", dist: "210 LY", type: "Sub-Earth", habit: 0, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2HY-Gk05kCjeamRvy19dXHjVm2UC9vZdOrQ&s", desc: "Hanya sedikit lebih besar dari Bulan kita.", mass: "0.01 Bumi", radius: "0.3 Bumi", orbit: "13 Hari", disc: "2013", temp: "420°C", gravity: "0.1 G", star: "G-Type", method: "Transit", atmos: ["Tidak Ada"] },
        { name: "CoRoT-7b", dist: "489 LY", type: "Super-Earth", habit: 0, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8hvpf-ScMeNShiEogeixkAyHfxxsXnzpvQ&s", desc: "Lautan lava mendidih di sisi siangnya.", mass: "4.8 Bumi", radius: "1.6 Bumi", orbit: "0.85 Hari", disc: "2009", temp: "2000°C", gravity: "1.8 G", star: "K-Type", method: "Transit", atmos: ["Uap Batu"] },
        { name: "55 Cancri e", dist: "40 LY", type: "Carbon", habit: 0, img: "https://thephrase.s3.ap-southeast-1.amazonaws.com/2022/06/Screenshot_2022-06-14-14-09-20-74_a27b88515698e5a58d06d430da63049d.jpg", desc: "Planet Berlian super padat.", mass: "8 Bumi", radius: "1.9 Bumi", orbit: "0.7 Hari", disc: "2004", temp: "2300°C", gravity: "2.0 G", star: "K-Type", method: "Transit", atmos: ["HCN", "Karbon"] },
        { name: "Kepler-10b", dist: "560 LY", type: "Lava World", habit: 0, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1g01FjI5Gim_XsfnkYoTpoappxIYznuMQhQ&s", desc: "Permukaan melelehkan besi.", mass: "3.3 Bumi", radius: "1.4 Bumi", orbit: "0.8 Hari", disc: "2011", temp: "1500°C", gravity: "1.5 G", star: "G-Type", method: "Transit", atmos: ["Uap Silikat"] },
        { name: "GJ 1132 b", dist: "39 LY", type: "Rocky", habit: 5, img: "https://science.nasa.gov/wp-content/uploads/2024/03/GH1200.jpg", desc: "Atmosfer sekundernya beregenerasi dari vulkanisme.", mass: "1.6 Bumi", radius: "1.2 Bumi", orbit: "1.6 Hari", disc: "2015", temp: "130°C", gravity: "1.2 G", star: "M-Dwarf", method: "Transit", atmos: ["Metana", "HCN"] }
    ]
};

// GLOBAL STATE
let currentCategory = 'bumi';
let selectedDist = 0;
let selectedSpeed = 0;

// --- 2. LOGIKA DROPDOWN & INIT ---
function setupCustomDropdowns() {
    setupSingleDropdown('planetWrapper', 'planetSelectedText', 'planetOptions', (val, text) => {
        selectedDist = parseFloat(val);
    });
    setupSingleDropdown('vehicleWrapper', 'vehicleSelectedText', null, (val, text) => {
        selectedSpeed = parseFloat(val);
    });
}

function setupSingleDropdown(wrapperId, textId, optionsId, onSelect) {
    const wrapper = document.getElementById(wrapperId);
    const textSpan = document.getElementById(textId);
    const trigger = wrapper.querySelector('.custom-select-trigger');
    const containerToListen = optionsId ? document.getElementById(optionsId) : wrapper.querySelector('.custom-options');
    
    trigger.addEventListener('click', (e) => {
        document.querySelectorAll('.custom-select-wrapper').forEach(w => { if(w !== wrapper) w.classList.remove('open'); });
        wrapper.classList.toggle('open');
        e.stopPropagation();
    });

    containerToListen.addEventListener('click', (e) => {
        if (e.target.classList.contains('option')) {
            const val = e.target.getAttribute('data-value');
            const label = e.target.textContent;
            textSpan.textContent = label;
            wrapper.classList.remove('open');
            onSelect(val, label);
        }
    });
}
window.addEventListener('click', () => { document.querySelectorAll('.custom-select-wrapper').forEach(w => w.classList.remove('open')); });

function populatePlanetOptions() {
    const container = document.getElementById('planetOptions');
    container.innerHTML = '';
    for (const cat in planetsDB) {
        if(planetsDB[cat].length > 0) {
            const divider = document.createElement('div');
            divider.textContent = cat.toUpperCase();
            divider.style.cssText = "padding:5px 15px; font-size:0.7rem; color:var(--text-muted); background:rgba(0,0,0,0.2);";
            container.appendChild(divider);
            planetsDB[cat].forEach(p => {
                const div = document.createElement('div');
                div.className = 'option';
                const cleanDist = parseFloat(p.dist.replace(/[^0-9.]/g, ''));
                div.setAttribute('data-value', cleanDist);
                div.textContent = `${p.name} (${p.dist})`;
                container.appendChild(div);
            });
        }
    }
}

// --- 3. LOGIKA KALKULATOR ---
function calculateTravel() {
    if(!selectedDist || !selectedSpeed) { alert("Pilih planet dan kendaraan dulu!"); return; }
    const btn = document.querySelector('.btn-calc');
    const loader = document.getElementById('loader');
    const resultBox = document.getElementById('calcResult');
    const output = document.getElementById('timeOutput');
    const funFact = document.getElementById('funFact');

    document.getElementById('btnText').textContent = "Menghitung...";
    loader.classList.remove('hidden');
    resultBox.classList.add('hidden');
    
    setTimeout(() => {
        const LY_IN_KM = 9460730472580; 
        const years = (selectedDist * LY_IN_KM) / selectedSpeed / (24 * 365);
        
        output.textContent = years < 1 ? Math.round(years*365) + " Hari" : Math.round(years).toLocaleString('id-ID') + " Tahun";
        if(selectedSpeed > 1000000000) funFact.textContent = "🚀 Teknologi Warp Drive!";
        else if(years > 1000000) funFact.textContent = "☠️ Butuh ribuan generasi manusia.";
        else funFact.textContent = "📦 Perjalanan panjang dimulai.";

        document.getElementById('btnText').textContent = "Hitung Lagi";
        loader.classList.add('hidden');
        resultBox.classList.remove('hidden');
    }, 1500);
}

// --- 4. RENDER GRID PLANET ---
function renderPlanets(dataToRender) {
    const grid = document.getElementById('planetGrid');
    grid.innerHTML = '';
    
    if(!dataToRender || dataToRender.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:var(--text-muted);">Data sedang diambil teleskop...</div>';
        return;
    }

    dataToRender.forEach((p) => {
        let barColor = p.habit >= 80 ? '#00ff88' : (p.habit >= 40 ? '#f59e0b' : '#ef4444');
        const card = document.createElement('div');
        card.className = 'obs-card';
        card.onclick = () => openModal(p); 
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${p.img}')">
                <span class="planet-tag">${p.type}</span>
            </div>
            <div class="card-info">
                <h3>${p.name}</h3>
                <div class="stats-row">
                    <div class="stat-item"><small>Jarak</small><strong>${p.dist}</strong></div>
                    <div class="stat-item" style="text-align:right;"><small>Orbit</small><strong>${p.orbit}</strong></div>
                </div>
                <div class="habit-container">
                    <div class="habit-label"><span>Potensi Huni</span><span style="color:${barColor}">${p.habit}%</span></div>
                    <div class="habit-track"><div class="habit-fill" style="width:${p.habit}%; background:${barColor}"></div></div>
                </div>
                <p class="short-desc">${p.desc}</p>
                <button class="btn-detail-card"><i class="fas fa-search-plus"></i> Analisa Lengkap</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function setCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(b => {
        b.classList.remove('active');
        if(b.textContent.toLowerCase().includes(cat)) b.classList.add('active');
    });
    renderPlanets(planetsDB[cat]);
}

function filterPlanets() {
    const keyword = document.getElementById('planetSearch').value.toLowerCase();
    let results = [];
    if(keyword.length > 0) {
        for(const cat in planetsDB) {
            const matches = planetsDB[cat].filter(p => p.name.toLowerCase().includes(keyword));
            results = [...results, ...matches];
        }
    } else {
        results = planetsDB[currentCategory];
    }
    renderPlanets(results);
}

// --- 5. LOGIKA MODAL DETAIL (DENGAN FIX TAMPILAN) ---
function openModal(p) {
    // 1. Isi Data seperti biasa
    document.getElementById('mName').textContent = p.name;
    document.getElementById('mType').textContent = p.type;
    document.getElementById('mDesc').textContent = p.desc;
    document.getElementById('mMethod').textContent = `Metode: ${p.method || 'Unknown'}`;
    
    document.getElementById('mMass').textContent = p.mass || "?";
    document.getElementById('mRadius').textContent = p.radius || "?";
    document.getElementById('mGravity').textContent = p.gravity || "Unknown";
    document.getElementById('mTemp').textContent = p.temp || "Unknown";
    
    document.getElementById('mOrbit').textContent = p.orbit;
    document.getElementById('mDist').textContent = p.dist;
    document.getElementById('mStar').textContent = p.star || "Unknown";
    document.getElementById('mDisc').textContent = p.disc;
    document.getElementById('mHabit').textContent = p.habit + '%';
    
    document.getElementById('modalHeaderBg').style.backgroundImage = `url('${p.img}')`;

    // 2. Render Atmosfer
    const atmosBox = document.getElementById('mAtmosBox');
    atmosBox.innerHTML = ''; 
    if (p.atmos && Array.isArray(p.atmos)) {
        p.atmos.forEach(gas => {
            const badge = document.createElement('span');
            badge.className = 'chem-badge';
            if(gas.includes("Metana") || gas.includes("Kaca") || gas.includes("Logam") || gas.includes("CO")) badge.classList.add('danger');
            if(gas.includes("Oksigen") || gas.includes("Air") || gas.includes("Nitrogen")) badge.classList.add('safe');
            badge.textContent = gas;
            atmosBox.appendChild(badge);
        });
    }

    // --- BAGIAN PENTING: PAKSA MUNCUL ---
    const modal = document.getElementById('planetModal');
    
    // 1. Ubah display jadi Flex dulu (agar layout terbentuk)
    modal.style.display = 'flex';
    
    // 2. Beri jeda sedikit, lalu tambah class active (untuk animasi opacity)
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('planetModal');
    
    // 1. Hapus class active (biar animasi fade out jalan)
    modal.classList.remove('active');
    
    // 2. Tunggu 300ms (sesuai durasi animasi), lalu sembunyikan total
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Tutup jika klik di luar
window.onclick = function(e) { 
    if(e.target == document.getElementById('planetModal')) closeModal(); 
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    populatePlanetOptions();
    setupCustomDropdowns();
    renderPlanets(planetsDB['bumi']);
    
    const btnTheme = document.getElementById('themeToggle');
    if(localStorage.getItem('exoTheme') === 'light') {
        document.body.classList.add('light-mode');
        btnTheme.querySelector('i').className = 'fas fa-sun';
    }
    btnTheme.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        btnTheme.querySelector('i').className = isLight ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('exoTheme', isLight ? 'light' : 'dark');
    });
});