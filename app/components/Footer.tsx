import Link from "next/link";

const LogoMark = ({ size = 30 }: { size?: number }) => (
  <span className="nav-logo-mark" style={{ width: size, height: size }}>
    <svg viewBox="0 0 24 24" width={size * 0.55} height={size * 0.55} fill="#fff" aria-hidden="true">
      <path d="M12 2c2.2 3.6 6 5.5 6 10.2 0 3.4-2.7 6.1-6 6.1s-6-2.7-6-6.1c0-2.6 1.4-3.7 2.4-5.6.3 1.5 1.1 2.4 2 2.4 0-2 .8-3.8 1.6-7zM7 21h10v1.2H7z"/>
    </svg>
  </span>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <div className="nav-logo"><LogoMark size={34} /><span style={{ fontSize: 18 }}>SmackCheck</span></div>
            <p>The social food app that scores every dish with AI. Capture, rate, level up — and find the best plate in every city.</p>
            <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
              <a href="#" className="chip">𝕏 Twitter</a>
              <a href="#" className="chip">IG</a>
              <a href="#" className="chip">TikTok</a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Product</h5>
            <Link href="/features">Features</Link>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/download">Download</Link>
            <a href="#">Changelog</a>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/press">Press kit</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h5>Support</h5>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Help center</Link>
            <a href="#">Community guidelines</a>
            <a href="#">Status</a>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="#">Cookies</a>
            <a href="#">AI disclosure</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SmackCheck Labs. All rights reserved.</span>
          <span className="mono">v0.9.2 · made with 🌶️ in NYC</span>
        </div>
      </div>
    </footer>
  );
}
