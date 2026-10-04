// Wabi Sabi Vibes — starter interactions
document.querySelectorAll('.heart').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = btn.textContent === '♡' ? '♥' : '♡';
    btn.setAttribute('aria-pressed', btn.textContent === '♥');
  });
});
document.querySelector('.newsletter-form')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Connect this form to your WooCommerce/newsletter provider.');
});
