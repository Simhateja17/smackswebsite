import type { Metadata } from "next";
import Link from "next/link";
import Phone, { FeedScreen, CaptureScreen, LeaderboardScreen } from "../components/Phone";

export const metadata: Metadata = {
  title: "Press kit  SmackCheck",
  description: "Downloadable logos, brand colors, screenshots and boilerplate copy for journalists writing about SmackCheck.",
};

export default function Press() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Press kit</span>
          <h1 className="h-display">For the <span className="accent">writers</span>.</h1>
          <p className="lede" style={{ margin: "26px auto 30px" }}>Everything you need to cover SmackCheck: logos, brand colors, screenshots and boilerplate copy. Help yourself.</p>
          <Link href="#" className="btn btn-primary">Download full press kit (.zip)</Link>
        </div>
      </section>

      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <div className="quick-facts">
            <div className="qf-item"><div className="lbl">Founded</div><div className="val">2024 · Brooklyn, NY</div></div>
            <div className="qf-item"><div className="lbl">Stage</div><div className="val">Seed (closed Mar 2026)</div></div>
            <div className="qf-item"><div className="lbl">Users</div><div className="val">24,800+ beta</div></div>
            <div className="qf-item"><div className="lbl">Team size</div><div className="val">12</div></div>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Boilerplate</span>
            <h2 className="h-1">The short version.</h2>
          </div>
          <div className="boiler">
            <button className="copy-btn">Copy</button>
            <p><strong>SmackCheck</strong> is the social food app that uses AI to score every dish you eat. Founded in 2024 and based in Brooklyn, SmackCheck combines on‑device computer vision with a community of 24,800+ foodies to build a real‑time map of the best plates in every city.</p>
            <p>The company's flagship feature, the <strong>Smack Score</strong>, rates dishes from 0 to 10 in under a second  breaking down plating, craft and value with model‑generated tasting notes. SmackCheck Labs is backed by [investors] and is currently in public beta on Android with iOS launching in 2026.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Logos</span>
            <h2 className="h-1">Brand mark.</h2>
          </div>
          <div className="press-grid">
            <div className="press-card">
              <div className="press-preview" style={{ background: "#0a0809" }}>
                <div className="logo-lockup-mark">
                  <svg width="78" height="78" viewBox="0 0 24 24" fill="#fff"><path d="M12 2c2.2 3.6 6 5.5 6 10.2 0 3.4-2.7 6.1-6 6.1s-6-2.7-6-6.1c0-2.6 1.4-3.7 2.4-5.6.3 1.5 1.1 2.4 2 2.4 0-2 .8-3.8 1.6-7zM7 21h10v1.2H7z"/></svg>
                </div>
              </div>
              <div className="press-meta"><div><div className="name">Primary mark</div><div className="size">SVG · PNG @ 2x · 3x</div></div><a href="#" className="press-dl">Download</a></div>
            </div>

            <div className="press-card">
              <div className="press-preview" style={{ background: "#0a0809", display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
                <div className="logo-lockup-mark" style={{ width: 70, height: 70, borderRadius: 18 }}><svg width="42" height="42" viewBox="0 0 24 24" fill="#fff"><path d="M12 2c2.2 3.6 6 5.5 6 10.2 0 3.4-2.7 6.1-6 6.1s-6-2.7-6-6.1c0-2.6 1.4-3.7 2.4-5.6.3 1.5 1.1 2.4 2 2.4 0-2 .8-3.8 1.6-7zM7 21h10v1.2H7z"/></svg></div>
                <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-.03em" }}>SmackCheck</div>
              </div>
              <div className="press-meta"><div><div className="name">Horizontal lockup</div><div className="size">SVG · PNG · 2.4 MB</div></div><a href="#" className="press-dl">Download</a></div>
            </div>

            <div className="press-card">
              <div className="press-preview" style={{ background: "#E4E2DF", color: "#0a0809", display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
                <div style={{ width: 70, height: 70, borderRadius: 18, background: "linear-gradient(135deg,#C2293F,#642223)", display: "grid", placeItems: "center", boxShadow: "0 12px 30px -6px rgba(155,35,53,.4)" }}>
                  <svg width="42" height="42" viewBox="0 0 24 24" fill="#fff"><path d="M12 2c2.2 3.6 6 5.5 6 10.2 0 3.4-2.7 6.1-6 6.1s-6-2.7-6-6.1c0-2.6 1.4-3.7 2.4-5.6.3 1.5 1.1 2.4 2 2.4 0-2 .8-3.8 1.6-7zM7 21h10v1.2H7z"/></svg>
                </div>
                <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-.03em", color: "#0a0809" }}>SmackCheck</div>
              </div>
              <div className="press-meta"><div><div className="name">Light lockup</div><div className="size">SVG · for print</div></div><a href="#" className="press-dl">Download</a></div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Colors</span>
            <h2 className="h-1">Brand palette.</h2>
          </div>
          <div className="swatch-grid">
            <div className="sw-card"><div className="sw-color" style={{ background: "#9B2335" }}></div><div className="sw-meta"><div className="sw-name">Smack Red</div><div className="sw-hex">#9B2335</div></div></div>
            <div className="sw-card"><div className="sw-color" style={{ background: "#642223" }}></div><div className="sw-meta"><div className="sw-name">Wine</div><div className="sw-hex">#642223</div></div></div>
            <div className="sw-card"><div className="sw-color" style={{ background: "#BB5B5C" }}></div><div className="sw-meta"><div className="sw-name">Rose</div><div className="sw-hex">#BB5B5C</div></div></div>
            <div className="sw-card"><div className="sw-color" style={{ background: "#0C0F0F", borderRight: "1px solid var(--border)" }}></div><div className="sw-meta"><div className="sw-name">Ink</div><div className="sw-hex">#0C0F0F</div></div></div>
            <div className="sw-card"><div className="sw-color" style={{ background: "#E4E2DF" }}></div><div className="sw-meta"><div className="sw-name">Bone</div><div className="sw-hex">#E4E2DF</div></div></div>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Screenshots</span>
            <h2 className="h-1">In‑app shots.</h2>
          </div>
          <div className="press-grid">
            <div className="press-card"><div className="press-preview" style={{ aspectRatio: "9/16", padding: "30px 0" }}><Phone size="sm"><FeedScreen /></Phone></div><div className="press-meta"><div><div className="name">Feed</div><div className="size">PNG @ 3x · 4.1 MB</div></div><a href="#" className="press-dl">Download</a></div></div>
            <div className="press-card"><div className="press-preview" style={{ aspectRatio: "9/16", padding: "30px 0" }}><Phone size="sm"><CaptureScreen /></Phone></div><div className="press-meta"><div><div className="name">AI Capture</div><div className="size">PNG @ 3x · 3.8 MB</div></div><a href="#" className="press-dl">Download</a></div></div>
            <div className="press-card"><div className="press-preview" style={{ aspectRatio: "9/16", padding: "30px 0" }}><Phone size="sm"><LeaderboardScreen /></Phone></div><div className="press-meta"><div><div className="name">Leaderboard</div><div className="size">PNG @ 3x · 3.2 MB</div></div><a href="#" className="press-dl">Download</a></div></div>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 0 100px" }}>
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <h2 className="h-1">Need something specific?</h2>
          <p className="lede" style={{ margin: "18px auto 26px" }}>A founder quote, a custom screenshot, a video clip, or an embargo. We're easy to work with.</p>
          <a href="mailto:press@smackcheck.app" className="btn btn-primary">Email press@smackcheck.app</a>
        </div>
      </section>
    </main>
  );
}
