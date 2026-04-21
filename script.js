/* ============================================
   ODINA — Tug'ilgan kun taklifnomasi
   JavaScript logic
   ============================================ */

// ============================================
// Countdown timer — 14 may 2026
// ============================================
const targetDate = new Date('2026-05-14T00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';

    // Bayram boshlandi - yozuvni o'zgartirish
    const label = document.querySelector('.countdown-label');
    if (label) label.textContent = "🎉 BAYRAM BOSHLANDI! 🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ============================================
// Modal - Welcome
// ============================================
const modal = document.getElementById('welcomeModal');
const closeModalBtn = document.getElementById('closeModal');
const music = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicOn = document.getElementById('musicOn');
const musicOff = document.getElementById('musicOff');

// Sahifa ochilganda modalni ko'rsatish
window.addEventListener('load', () => {
  setTimeout(() => {
    modal.classList.add('active');
  }, 400);
});

// "Rahmat!" tugmasi bosilsa — modalni yopish va musiqani boshlash
closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  playMusic();
});

// Modal tashqarisiga bosilsa — yopish
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    playMusic();
  }
});

// ============================================
// Musiqa boshqaruvi
// ============================================
let musicPlaying = false;
let musicLoaded = false;

// Fayl yuklanganmi yoki yo'qligini tekshirish
music.addEventListener('canplaythrough', () => {
  musicLoaded = true;
  console.log('✓ Musiqa fayli yuklandi');
});

music.addEventListener('error', (e) => {
  console.warn('⚠️ Musiqa faylini yuklab bo\'lmadi. "happy-birthday-piano.mp3" fayli mavjudligini tekshiring.');
  console.warn('Error:', music.error);
});

function playMusic() {
  music.volume = 0.25; // Past tovush (0.0 - 1.0)
  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        musicPlaying = true;
        musicOn.style.display = 'block';
        musicOff.style.display = 'none';
        musicToggle.classList.add('playing');
        console.log('♪ Musiqa boshlandi');
      })
      .catch((err) => {
        musicPlaying = false;
        musicOn.style.display = 'none';
        musicOff.style.display = 'block';
        musicToggle.classList.remove('playing');
        console.log('Musiqa bloklangan:', err.message);
        // Foydalanuvchiga indikator - tugma pulse qilsin
        musicToggle.classList.add('attention');
      });
  }
}

function pauseMusic() {
  music.pause();
  musicPlaying = false;
  musicOn.style.display = 'none';
  musicOff.style.display = 'block';
  musicToggle.classList.remove('playing');
}

musicToggle.addEventListener('click', () => {
  musicToggle.classList.remove('attention');
  if (musicPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});

// Birinchi tap/click bo'lsa - musiqani boshlashga urinish (ishonchli)
let firstInteractionHandled = false;
function handleFirstInteraction() {
  if (firstInteractionHandled) return;
  firstInteractionHandled = true;
  if (!musicPlaying) {
    playMusic();
  }
}
document.addEventListener('click', handleFirstInteraction, { once: false });
document.addEventListener('touchstart', handleFirstInteraction, { once: false });

// ============================================
// Gullar yog'ilishi (petals)
// ============================================
function createPetal() {
  const petalsContainer = document.querySelector('.petals');
  const petal = document.createElement('div');
  petal.className = 'petal';

  // Tasodifiy joylashuv va parametrlar
  const left = Math.random() * 100;
  const duration = 8 + Math.random() * 8; // 8-16 soniya
  const delay = Math.random() * 3;
  const size = 8 + Math.random() * 8;

  petal.style.left = `${left}%`;
  petal.style.animationDuration = `${duration}s`;
  petal.style.animationDelay = `${delay}s`;
  petal.style.width = `${size}px`;
  petal.style.height = `${size}px`;

  petalsContainer.appendChild(petal);

  // Animatsiya tugagandan keyin elementni o'chirish
  setTimeout(() => {
    petal.remove();
  }, (duration + delay) * 1000);
}

// Har 600ms da yangi gul chiqaradi
function startPetalRain() {
  // Boshida bir nechta gul
  for (let i = 0; i < 6; i++) {
    setTimeout(() => createPetal(), i * 300);
  }
  // Keyin davomiy ravishda
  setInterval(createPetal, 600);
}

startPetalRain();

// ============================================
// "Sizni yaxshi ko'ramiz" widget - bosilganda yurak yuborish
// ============================================
const loveWidget = document.getElementById('loveWidget');

loveWidget.addEventListener('click', () => {
  // 5 ta yurak yuboramiz
  for (let i = 0; i < 5; i++) {
    setTimeout(() => createFlyingHeart(), i * 100);
  }
});

function createFlyingHeart() {
  const heart = document.createElement('div');
  heart.textContent = '💗';
  heart.style.cssText = `
    position: fixed;
    bottom: 80px;
    left: ${30 + Math.random() * 40}px;
    font-size: ${18 + Math.random() * 14}px;
    pointer-events: none;
    z-index: 999;
    animation: flyHeart 2.5s ease-out forwards;
  `;
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 2500);
}

// Yurak animatsiyasini dinamik qo'shish
const style = document.createElement('style');
style.textContent = `
  @keyframes flyHeart {
    0% {
      transform: translateY(0) scale(0.5) rotate(0deg);
      opacity: 0;
    }
    15% {
      opacity: 1;
      transform: translateY(-20px) scale(1.2) rotate(-10deg);
    }
    100% {
      transform: translateY(-200px) scale(0.8) rotate(20deg) translateX(${Math.random() > 0.5 ? '' : '-'}60px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ============================================
// Parol kartochkasi - bosilganda nusxalash
// ============================================
const passwordCard = document.querySelector('.password-card');
if (passwordCard) {
  passwordCard.style.cursor = 'pointer';
  passwordCard.addEventListener('click', () => {
    navigator.clipboard.writeText('Yaxshi kayfiyat').then(() => {
      const note = passwordCard.querySelector('.password-card__note');
      const originalText = note.textContent;
      note.textContent = 'nusxalandi ✓';
      note.style.color = '#4CAF50';
      setTimeout(() => {
        note.textContent = originalText;
        note.style.color = '';
      }, 1800);
    }).catch(() => {
      // Clipboard API mavjud bo'lmasa - indamay o'tamiz
    });
  });
}

// ============================================
// Smooth scroll reveal - elementlar ko'rinishida
// ============================================
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Reveal qilinadigan elementlar
document.querySelectorAll('.invitation, .features, .birthday-final').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity 1s ease, transform 1s ease';
  observer.observe(el);
});

// Feature kartochkalari staggered reveal
document.querySelectorAll('.feature-card').forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
});

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.feature-card').forEach((card) => {
  cardObserver.observe(card);
});
