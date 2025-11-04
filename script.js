/*File: script.js*/

// Fungsi yang dijalankan setelah halaman selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    const btnPesan = document.getElementById('btnPesan');
    const btnMode = document.getElementById('btnMode'); 
    
    // palette terang
    const lightColors = [
        '#e3f2fd', 
        '#f3e5f5', 
        '#e8f5e9', 
        '#fff3e0', 
        '#fce4ec', 
        '#f1f8e9'  
    ];

    // Palette gelap 
    const darkColors = [
        '#581845',
        '#0B3D2E',
        '#0B3C5D',
        '#4B0082',
        '#1E1E1E'
    ];
    
    function pickRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // Fungsi set tema 
    function setTheme(isDark) {
        document.body.style.transition = 'background-color 0.5s ease, color 0.3s ease';

        if (isDark) {
            document.body.classList.add('dark-mode');
            btnMode.textContent = 'Mode Terang';
            btnMode.classList.remove('btn-outline-primary');
            btnMode.classList.add('btn-outline-light');
            const warnaGelap = pickRandom(darkColors);
            document.body.style.backgroundColor = warnaGelap;
        } else {
            document.body.classList.remove('dark-mode');
            btnMode.textContent = 'Mode Gelap';
            btnMode.classList.remove('btn-outline-light');
            btnMode.classList.add('btn-outline-primary');
            document.body.style.backgroundColor = '';
        }
        localStorage.setItem('themeDark', isDark ? '1' : '0');
    }

    const savedTheme = localStorage.getItem('themeDark') === '1';
    setTheme(savedTheme);

    // Event untuk toggle tema
    btnMode.addEventListener('click', function() {
        const isDarkNow = document.body.classList.contains('dark-mode');
        setTheme(!isDarkNow);
    });

    // Event listener untuk tombol "Tampilkan Pesan"
    btnPesan.addEventListener('click', function() {
        
        // Menampilkan alert 
        alert('Halo, Ini Saila! Selamat mengerjakan UTS.');

        document.body.style.transition = 'background-color 0.5s ease';

        if (document.body.classList.contains('dark-mode')) {
            const warnaGelapAcak = pickRandom(darkColors);
            document.body.style.backgroundColor = warnaGelapAcak;
        } else {
            const warnaAcak = pickRandom(lightColors);
            document.body.style.backgroundColor = warnaAcak;
        }

        btnPesan.textContent = 'Pesan Ditampilkan!';
        
        setTimeout(function() {
            btnPesan.textContent = 'Tampilkan Pesan';
        }, 2000);
    });
    
    // Efek hover
    btnPesan.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    btnPesan.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Smooth scroll untuk link navigasi
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('Script berhasil dimuat!');
    console.log('Halaman Profil Mahasiswa UDINUS siap digunakan.');
    
});