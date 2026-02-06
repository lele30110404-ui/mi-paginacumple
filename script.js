// Animaciones al hacer scroll
const animated = document.querySelectorAll('.animate, .animate-delay');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.3 });

animated.forEach(el => observer.observe(el));

// Pausar otras canciones cuando una se reproduce
const audios = document.querySelectorAll('audio');

audios.forEach(audio => {
  audio.addEventListener('play', () => {
    audios.forEach(a => {
      if (a !== audio) a.pause();
    });
  });
});

// Corazoncito siguiendo el cursor 💗
const heart = document.createElement('div');
heart.innerHTML = '💗';
heart.style.position = 'fixed';
heart.style.pointerEvents = 'none';
heart.style.fontSize = '18px';
heart.style.opacity = '0.7';
document.body.appendChild(heart);

document.addEventListener('mousemove', e => {
  heart.style.left = e.pageX + 10 + 'px';
  heart.style.top = e.pageY + 10 + 'px';
});
