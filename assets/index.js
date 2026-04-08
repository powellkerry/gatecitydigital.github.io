// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach((el) => observer.observe(el));

// Nav scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.padding = window.scrollY > 60 ? '14px 56px' : '20px 56px';
});

// Scroll each section button to the next section
const sectionScrollButtons = document.querySelectorAll('[data-scroll-next]');
sectionScrollButtons.forEach((button) => {
  const currentSection = button.closest('section');
  let nextSection = currentSection?.nextElementSibling;

  while (nextSection && nextSection.tagName !== 'SECTION') {
    nextSection = nextSection.nextElementSibling;
  }

  if (!nextSection) {
    button.disabled = true;
    button.setAttribute('aria-hidden', 'true');
    return;
  }

  button.addEventListener('click', () => {
    nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Contact form success message
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('contact') === 'complete') {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('contact-success');
  if (form) form.style.display = 'none';
  if (success) success.style.display = 'block';

  success.scrollIntoView();
}

// Turnstile CAPTCHA callback
window.onTurnstileToken = (token) => {
  document.getElementById('cf-turnstile-response').value = token;
};

// Turnstile CAPTCHA validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    const token = document.getElementById('cf-turnstile-response')?.value;
    if (!token) {
      e.preventDefault();
      alert('Please complete the CAPTCHA before submitting.');
    }
  });
}

