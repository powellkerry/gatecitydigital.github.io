// Navigation and Footer Components
const NAV_HTML = `<div class="rainbow-stripe"></div>

<nav>
  <a href="index.html" class="nav-logo">Sage & Rainbow 🏳️‍🌈</a>
  <ul class="nav-links">
    <li><a href="mission.html">Mission</a></li>
    <li><a href="resources.html">Resources</a></li>
    <li><a href="youth.html">Youth</a></li>
    <li><a href="health.html">Health</a></li>
    <li><a href="hiv.html">HIV</a></li>
    <li><a href="suicide.html">Crisis Help</a></li>
    <li><a href="pride.html">Pride</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="js:blank" target="_blank" class="nav-cta">♥ Donate</a></li>
  </ul>
  <button class="hamburger" onclick="toggleMobile()"><span></span><span></span><span></span></button>
</nav>

<div class="mobile-menu" id="mobileMenu">
  <ul>
    <li><a href="index.html" onclick="toggleMobile()">🏠 Home</a></li>
    <li><a href="mission.html" onclick="toggleMobile()">💜 Our Mission</a></li>
    <li><a href="resources.html" onclick="toggleMobile()">📍 Local Resources</a></li>
    <li><a href="youth.html" onclick="toggleMobile()">🌱 Youth Resources</a></li>
    <li><a href="health.html" onclick="toggleMobile()">❤️ LGBT Health</a></li>
    <li><a href="hiv.html" onclick="toggleMobile()">🔴 HIV Resources</a></li>
    <li><a href="suicide.html" onclick="toggleMobile()">💛 Suicide Prevention</a></li>
    <li><a href="bullying.html" onclick="toggleMobile()">🛡️ Stop Bullying</a></li>
    <li><a href="seniors.html" onclick="toggleMobile()">🌟 LGBT Seniors</a></li>
    <li><a href="gsa.html" onclick="toggleMobile()">🏫 School GSAs</a></li>
    <li><a href="volunteer.html" onclick="toggleMobile()">🤝 Volunteer</a></li>
    <li><a href="pride.html" onclick="toggleMobile()">🏳️‍🌈 Idaho Pride</a></li>
    <li><a href="contact.html" onclick="toggleMobile()">✉️ Contact</a></li>
  </ul>
</div>`;

const FOOTER_HOME_HTML = `<footer>
    <div class="footer-rainbow"></div>
    <div class="footer-top">
      <div>
        <div class="footer-logo">Sage & Rainbow 🏳️‍🌈</div>
        <p class="footer-desc">LGBTQ+ Advocates of Southeastern Idaho — a safe and affirming community for everyone.</p>
        <p class="footer-desc-email"><a href="mailto:contact@sageandrainbow.org">contact@sageandrainbow.org</a></p>
        <p class="footer-desc-city">Pocatello, Idaho</p>
        <div class="footer-social">
          <a href="https://www.facebook.com/pages/Sage-Rainbow-LGBT-Advocates-of-Southeastern-Idaho-Inc/282554538470857" target="_blank">Facebook</a>
          <a href="https://www.twitter.com/SageAndRainbow" target="_blank">Twitter/X</a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Navigate</h5>
        <ul>
          <li><a href="mission.html">Our Mission</a></li>
          <li><a href="resources.html">Local Resources</a></li>
          <li><a href="youth.html">Youth Resources</a></li>
          <li><a href="health.html">LGBT Health</a></li>
          <li><a href="hiv.html">HIV Resources</a></li>
          <li><a href="pride.html">Idaho Pride</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Support</h5>
        <ul>
          <li><a href="suicide.html">Crisis Help</a></li>
          <li><a href="bullying.html">Stop Bullying</a></li>
          <li><a href="seniors.html">LGBT Seniors</a></li>
          <li><a href="gsa.html">School GSAs</a></li>
          <li><a href="volunteer.html">Volunteer</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="disclaimer.html">Disclaimer</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© Sage & Rainbow LGBTQ Advocates of Southeastern Idaho, Inc.</p>
      <p>Not affiliated with any Pride production or companies. All rights reserved.</p>
    </div>
  </footer>`;

function toggleMobile() {
  document.getElementById('mobileMenu')?.classList.toggle('open');
}

function setupMobileMenuClose() {
  document.addEventListener('click', e => {
    const m = document.getElementById('mobileMenu');
    const h = document.querySelector('.hamburger');
    if (m && m.classList.contains('open') && !m.contains(e.target) && !h.contains(e.target)) {
      m.classList.remove('open');
    }
  });
}

function injectNav() {
  const body = document.body;
  body.insertAdjacentHTML('afterbegin', NAV_HTML);
  setupMobileMenuClose();
}

function injectFooter() {
  const body = document.body;
  body.insertAdjacentHTML('beforeend', FOOTER_HOME_HTML);
}

// Auto-inject on page load
document.addEventListener('DOMContentLoaded', () => {
  // Check if nav already exists (for index.html which includes it directly)
  if (!document.querySelector('nav')) {
    injectNav();
  }
  setupMobileMenuClose();
});
