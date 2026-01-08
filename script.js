// Small interactive behaviors for the Infobloom page

document.addEventListener('DOMContentLoaded', function () {
  // Fill current year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      mainNav.classList.toggle('open');
    });
  }

  // Learn more buttons: simple info popup
  const learnBtns = document.querySelectorAll('.learn-btn');
  learnBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const service = btn.getAttribute('data-service') || 'this service';
      alert(`${service}\n\nThanks for your interest — contact us below to learn more or request a proposal.`);
    });
  });

  // Contact form handling (client-side only)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.textContent = '';

      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        status.style.color = 'crimson';
        status.textContent = 'Please fill in all fields.';
        return;
      }

      // Very simple email format check
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailValid) {
        status.style.color = 'crimson';
        status.textContent = 'Please enter a valid email address.';
        return;
      }

      // Simulate send (replace with real API endpoint when ready)
      status.style.color = 'green';
      status.textContent = 'Sending message…';

      setTimeout(() => {
        status.textContent = 'Thanks! Your message was sent — we will get back to you within 48 hours.';
        form.reset();
      }, 900);
    });
  }
});
