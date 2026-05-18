"use client";

import Link from "next/link";

export default function Contact() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Contact</span>
          <h1 className="h-display">Say <span className="accent">hello</span>.</h1>
          <p className="lede" style={{ margin: "26px auto 0" }}>Real humans, fast replies. Pick a lane below or fill the form — whichever's faster.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <div className="contact-card">
                <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a9 9 0 0 1-9 9 9 9 0 0 1-7-3.5L3 21l4-2.5a9 9 0 1 1 14-7z"/></svg></div>
                <div style={{ flex: 1 }}>
                  <h3>Support</h3>
                  <p>Stuck on something? Found a bug? We typically reply within 4 hours during the day.</p>
                  <a href="mailto:help@smackcheck.app">help@smackcheck.app →</a>
                </div>
              </div>
              <div className="contact-card">
                <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM12 14a8 8 0 0 0-8 8h12M19 18l3 3M22 18l-3 3"/></svg></div>
                <div style={{ flex: 1 }}>
                  <h3>Partnerships</h3>
                  <p>Restaurants, chefs, city editors, dish creators. Let's build something together.</p>
                  <a href="mailto:partners@smackcheck.app">partners@smackcheck.app →</a>
                </div>
              </div>
              <div className="contact-card">
                <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16v12H4zM4 9h16M8 12h4M8 15h6"/></svg></div>
                <div style={{ flex: 1 }}>
                  <h3>Press</h3>
                  <p>Embargo? Quote? Founder interview? We're happy to chat.</p>
                  <a href="mailto:press@smackcheck.app">press@smackcheck.app →</a>
                  &nbsp;·&nbsp;<Link href="/press">Press kit →</Link>
                </div>
              </div>
              <div className="contact-card">
                <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21v-1a8 8 0 0 1 16 0v1M11 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg></div>
                <div style={{ flex: 1 }}>
                  <h3>Careers</h3>
                  <p>Engineers, designers, chefs‑in‑residence. We're small but growing.</p>
                  <a href="mailto:hiring@smackcheck.app">hiring@smackcheck.app →</a>
                </div>
              </div>

              <div className="office-strip">
                <span className="dot"></span>
                <div className="info"><b>SmackCheck Labs HQ</b><br/><span style={{ color: "var(--text-dim)" }}>68 Jay Street · Brooklyn, NY 11201</span></div>
                <div className="mono">Open now</div>
              </div>
            </div>

            <div className="form-card">
              <h3 className="h-3" style={{ marginBottom: 6 }}>Send us a note</h3>
              <p style={{ color: "var(--text-dim)", fontSize: 14, marginBottom: 24 }}>We read everything. Reply within one business day.</p>
              <form onSubmit={(e) => { e.preventDefault(); const b = e.currentTarget.querySelector('button'); if(b) { b.textContent = 'Sent ✓'; (b as HTMLButtonElement).disabled = true; } }}>
                <div className="form-cols">
                  <div className="form-row"><label>Your name</label><input required placeholder="Maya Chen" /></div>
                  <div className="form-row"><label>Email</label><input type="email" required placeholder="you@email.com" /></div>
                </div>
                <div className="form-row"><label>What's this about?</label>
                  <select>
                    <option>Support / bug report</option>
                    <option>Partnership inquiry</option>
                    <option>Press / interview</option>
                    <option>Careers</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div className="form-row"><label>Message</label><textarea required placeholder="Tell us what's on your mind…"></textarea></div>
                <button type="submit" className="btn btn-primary">Send message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
