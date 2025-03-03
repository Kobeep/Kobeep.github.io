// On DOM load, fade out the preloader
document.addEventListener('DOMContentLoaded', function() {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('fade-out');
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 1000);
  console.log('Kobeeq.eu loaded');
});
