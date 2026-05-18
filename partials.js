/* SmackCheck — shared site partials (nav, footer, logo) */
(function (g) {
  g.scLogo = function (size) {
    const s = size || 30;
    return `<span class="nav-logo-mark" style="width:${s}px;height:${s}px;">
      <svg viewBox="0 0 24 24" width="${s*0.55}" height="${s*0.55}" fill="#fff" aria-hidden="true">
        <path d="M12 2c2.2 3.6 6 5.5 6 10.2 0 3.4-2.7 6.1-6 6.1s-6-2.7-6-6.1c0-2.6 1.4-3.7 2.4-5.6.3 1.5 1.1 2.4 2 2.4 0-2 .8-3.8 1.6-7zM7 21h10v1.2H7z"/>
      </svg>
    </span>`;
  };

  g.scNav = function (active) {
    const link = (href, label) => `<a href="${href}"${active===label?' class="active"':''}>${label}</a>`;
    return `
    <nav class="nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">
          ${g.scLogo(30)}
          <span>SmackCheck</span>
        </a>
        <div class="nav-links">
          ${link('features.html','Features')}
          ${link('how-it-works.html','How it works')}
          ${link('download.html','Download')}
          ${link('blog.html','Blog')}
          ${link('about.html','About')}
        </div>
        <div class="nav-cta">
          <a href="download.html" class="btn btn-ghost btn-sm">Sign in</a>
          <a href="download.html" class="btn btn-primary btn-sm">Get the app</a>
        </div>
      </div>
    </nav>`;
  };

  g.scFooter = function () {
    return `
    <footer class="footer">
      <div class="wrap">
        <div class="footer-grid">
          <div class="footer-col footer-brand">
            <div class="nav-logo">${g.scLogo(34)}<span style="font-size:18px;">SmackCheck</span></div>
            <p>The social food app that scores every dish with AI. Capture, rate, level up — and find the best plate in every city.</p>
            <div style="display:flex;gap:10px;margin-top:18px;">
              <a href="#" class="chip">𝕏 Twitter</a>
              <a href="#" class="chip">IG</a>
              <a href="#" class="chip">TikTok</a>
            </div>
          </div>
          <div class="footer-col">
            <h5>Product</h5>
            <a href="features.html">Features</a>
            <a href="how-it-works.html">How it works</a>
            <a href="download.html">Download</a>
            <a href="#">Changelog</a>
          </div>
          <div class="footer-col">
            <h5>Company</h5>
            <a href="about.html">About</a>
            <a href="blog.html">Blog</a>
            <a href="press.html">Press kit</a>
            <a href="contact.html">Contact</a>
          </div>
          <div class="footer-col">
            <h5>Support</h5>
            <a href="faq.html">FAQ</a>
            <a href="contact.html">Help center</a>
            <a href="#">Community guidelines</a>
            <a href="#">Status</a>
          </div>
          <div class="footer-col">
            <h5>Legal</h5>
            <a href="privacy.html">Privacy</a>
            <a href="terms.html">Terms</a>
            <a href="#">Cookies</a>
            <a href="#">AI disclosure</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 SmackCheck Labs. All rights reserved.</span>
          <span class="mono">v0.9.2 · made with 🌶️ in NYC</span>
        </div>
      </div>
    </footer>`;
  };

  // simple reveal-on-scroll
  g.scInitReveal = function () {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(e=>e.classList.add('in')); return; }
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '-40px' });
    els.forEach(e=>io.observe(e));
  };

  g.scMount = function (active) {
    const navSlot = document.getElementById('site-nav');
    const footSlot = document.getElementById('site-footer');
    if (navSlot) navSlot.outerHTML = g.scNav(active);
    if (footSlot) footSlot.outerHTML = g.scFooter();
    g.scInitReveal();
  };
})(window);
