// Wrap everything in DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // 🌐 1. Toggle Menu
  const menuToggleBtn = document.getElementById('menu-toggle'); // Assuming you have this
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggleBtn && mobileMenu) {
    menuToggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('scale-y-100');
      mobileMenu.classList.toggle('scale-y-0');
    });
  }

  // 🌀 2. Skill Circle Animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const circle = entry.target.querySelector('.progress-circle');
        const finalOffset = parseFloat(circle.getAttribute('data-offset')) || 40;

        let currentOffset = 251.2;
        const step = (251.2 - finalOffset) / 30;
        let frame = 0;

        const animate = () => {
          if (frame <= 30) {
            circle.setAttribute('stroke-dashoffset', currentOffset - step * frame);
            frame++;
            requestAnimationFrame(animate);
          }
        };

        animate();
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.6,
  });

  document.querySelectorAll('.skill-item').forEach(item => {
    observer.observe(item);
  });

  // 🚀 3. Add more custom scripts below if needed...
});
