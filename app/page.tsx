"use client";

import Link from "next/link";
import Phone, { FeedScreen, CaptureScreen } from "./components/Phone";

export default function Home() {
  return (
    <main>
      {/* HERO (dark wine) */}
      <section className="hero band-dark" data-screen-label="01 Hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="hero-eyebrow">
                <span className="chip chip-brand"><span className="glow-dot"></span> AI Dish Analysis · Now in beta</span>
              </div>
              <h1 className="h-display">Every dish<br/>gets a <span className="accent">smack score</span>.</h1>
              <p className="lede hero-sub">SmackCheck is the social food app that scores what you eat with AI  so you stop second‑guessing menus and start finding the best plate in every city.</p>
              <div className="hero-cta">
                <Link href="/download" className="btn btn-primary" style={{ background: "var(--rose)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download for iOS
                </Link>
                <Link href="/download" className="btn btn-ghost">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/></svg>
                  Get on Play Store
                </Link>
              </div>
              <div className="hero-trust">
                <div className="avatars">
                  <span style={{ background: "linear-gradient(135deg,#d4a4a5,#642223)" }}></span>
                  <span style={{ background: "linear-gradient(135deg,#d4a872,#8a5a1d)" }}></span>
                  <span style={{ background: "linear-gradient(135deg,#c89890,#6a4040)" }}></span>
                  <span style={{ background: "linear-gradient(135deg,#b8aab0,#5a4045)" }}></span>
                </div>
                <div>
                  <div className="hero-stars">★★★★★ <span style={{ color: "var(--text-on-dark)", fontWeight: 700 }}>4.9</span></div>
                  <div style={{ fontSize: 12, marginTop: 2 }}>Join 24,800+ foodies already smacking.</div>
                </div>
              </div>
            </div>

            <div className="hero-phones">
              <div className="hero-floating-card hfc-1">
                <div className="hfc-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7z"/></svg></div>
                <div>
                  <div className="hfc-label">AI Score</div>
                  <div className="hfc-value">9.2 · Excellent</div>
                </div>
              </div>
              <div className="hero-floating-card hfc-2">
                <div className="hfc-icon gold"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2 8l4 8h12l4-8-6 4-4-8-4 8z"/></svg></div>
                <div>
                  <div className="hfc-label">+250 XP</div>
                  <div className="hfc-value">Connoisseur unlocked</div>
                </div>
              </div>
              <div className="hero-phone-1"><Phone><FeedScreen /></Phone></div>
              <div className="hero-phone-2"><Phone><CaptureScreen /></Phone></div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className="logo-strip">
        <div className="wrap">
          <div className="logo-strip-label">As featured in</div>
          <div className="logo-strip-row">
            <div className="lg" style={{ fontFamily: "Fraunces,serif", fontStyle: "italic" }}>The Foodist</div>
            <div className="lg" style={{ fontStyle: "italic" }}>Eater Daily</div>
            <div className="lg" style={{ letterSpacing: ".2em", fontWeight: 800 }}>PRODUCT HUNT</div>
            <div className="lg" style={{ fontFamily: "Fraunces,serif" }}>Bon Appétit</div>
            <div className="lg" style={{ fontWeight: 800 }}>TechCrunch</div>
            <div className="lg" style={{ fontFamily: "Fraunces,serif" }}>The Verge</div>
          </div>
        </div>
      </section>

      {/* SCREENSHOT RAIL */}
      <section data-screen-label="02 Screens" style={{ padding: "80px 0 30px", background: "var(--bg)" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">A look inside</span>
            <h2 className="h-1">Built for the way you <span className="accent">eat now</span>.</h2>
            <p className="lede">Five screens. One unfair advantage over every menu, every dinner, every group chat about where to go.</p>
          </div>
        </div>
        <div className="phone-rail">
          {[
            { src: "/images/phone-1-feed.png",        alt: "01 Feed" },
            { src: "/images/phone-2-capture.png",     alt: "02 Capture & AI" },
            { src: "/images/phone-3-map.png",         alt: "03 Map" },
            { src: "/images/phone-4-leaderboard.png", alt: "04 Leaderboard" },
            { src: "/images/phone-5-profile.png",     alt: "05 Profile" },
          ].map(({ src, alt }) => (
            <div key={alt} className="phone-rail-card">
              <img src={src} alt={alt} className="phone-rail-img" />
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE GRID (bento) */}
      <section data-screen-label="03 Features" style={{ padding: "60px 0 80px" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Why people stay</span>
            <h2 className="h-1">More than a rating app.<br/>A whole <span className="accent">taste graph</span>.</h2>
          </div>
          <div className="feat-grid">
            <div className="feat-card tall dark">
              <div className="feat-icon-pill"><span className="ic"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7z"/></svg></span>AI Dish Analysis</div>
              <h3>The smack score, calculated.</h3>
              <p>Snap a plate. Our model scores plating, craft, value and authenticity in under a second  then tags the dish, cuisine and likely ingredients.</p>
            </div>
            <div className="feat-card">
              <div className="feat-icon-pill"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 12a8 8 0 0 1-12 7l-5 1 1-5a8 8 0 1 1 16-3z"/></svg></span>Social Feed</div>
              <h3>Follow taste, not influencers.</h3>
              <p>A feed of real dishes from real people, ranked by how good the food actually is  not how many filters they used.</p>
            </div>
            <div className="feat-card">
              <div className="feat-icon-pill"><span className="ic"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 8l4 8h12l4-8-6 4-4-8-4 8z"/></svg></span>XP & Levels</div>
              <h3>Eat. Earn. Level up.</h3>
              <p>Every smack you log earns XP. Hit streaks, unlock new cuisines, and climb from Snacker to Master Palate.</p>
            </div>
            <div className="feat-card wide">
              <div className="feat-icon-pill"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z"/></svg></span>Social Map</div>
              <h3>The best plate on every block  pinned.</h3>
              <p>A live map of the highest‑smacked dishes near you, filtered by cuisine, price, vibe or your friends. No more &quot;where should we eat?&quot;</p>
              <div style={{ position: "absolute", right: -30, bottom: -40, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle,rgba(100,34,35,.10),transparent 60%)" }}></div>
            </div>
            <div className="feat-card">
              <div className="feat-icon-pill"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M8 4h8v6a4 4 0 0 1-8 0z"/><path d="M16 6h3a3 3 0 0 1-3 3M8 6H5a3 3 0 0 0 3 3"/></svg></span>Challenges</div>
              <h3>Weekly missions, real badges.</h3>
              <p>&quot;Find a 9+ dumpling this week.&quot; Compete with friends. Cash in badges that actually mean something at the table.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI SHOWCASE */}
      <section className="band-soft" style={{ padding: "100px 0" }}>
        <div className="wrap">
          <div className="ai-grid">
            <div>
              <span className="eyebrow">AI dish analysis</span>
              <h2 className="h-1" style={{ marginTop: 16 }}>The model that learned<br/>to actually <span className="accent">taste</span>.</h2>
              <p className="lede" style={{ marginTop: 22 }}>We trained on 4.2M smacked dishes across 180 cuisines. Now SmackCheck can recognize, score and explain your plate  and tell you why it works.</p>
              <div className="ai-stack" style={{ marginTop: 36 }}>
                <div className="ai-step"><div className="ai-step-num">1</div><div><h4>Vision pass</h4><p>Identifies the dish, plating style, portion, garnish and likely cuisine.</p></div></div>
                <div className="ai-step"><div className="ai-step-num">2</div><div><h4>Flavor model</h4><p>Cross‑references 4.2M dishes to estimate technique, freshness signals and seasoning balance.</p></div></div>
                <div className="ai-step"><div className="ai-step-num">3</div><div><h4>Smack score</h4><p>A 0–10 score with plating, craft and value breakdowns  plus a one‑line tasting note.</p></div></div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Phone><CaptureScreen /></Phone>
            </div>
          </div>
        </div>
      </section>

      {/* GAMIFICATION BANNER */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <div className="gami-banner">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="eyebrow" style={{ justifyContent: "center" }}>Gamification, in numbers</span>
              <h2 className="h-1" style={{ marginTop: 14 }}>Foodies don&apos;t sleep <span className="accent">on this</span>.</h2>
            </div>
            <div className="gami-stats">
              <div className="gami-stat"><div className="num"><span className="em">4.2</span>M</div><div className="lbl">dishes smacked</div></div>
              <div className="gami-stat"><div className="num"><span className="em">12.8</span>M</div><div className="lbl">XP earned this month</div></div>
              <div className="gami-stat"><div className="num"><span className="em">186</span>k</div><div className="lbl">badges unlocked</div></div>
              <div className="gami-stat"><div className="num"><span className="em">39</span> days</div><div className="lbl">average streak</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <section style={{ padding: "60px 0 80px" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Trending now</span>
            <h2 className="h-1">What the city is <span className="accent">smacking on</span> this week.</h2>
          </div>
          <div className="trending-grid">
            <div className="trend-card big">
              <img src="/images/birria-tacos.png" alt="Crispy Birria Tacos" className="img a" style={{ objectFit: "cover", width: "100%", height: "100%", position: "absolute", inset: 0 }} />
              <div className="overlay"></div>
              <div className="score">9.4</div>
              <div className="info">
                <h4>Crispy Birria Tacos w/ consommé</h4>
                <div className="meta">Birrieria Catarina · 312 smacks this week</div>
              </div>
            </div>
            <div className="trend-card">
              <img src="/images/trending-ramen.png" alt="House ramen" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div className="overlay"></div>
              <div className="score">9.1</div>
              <div className="info">
                <h4>House ramen, 24h broth</h4>
                <div className="meta">Komeya · LES</div>
              </div>
            </div>
            <div className="trend-card">
              <img src="/images/trending-biryani.png" alt="Chicken Biryani" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div className="overlay"></div>
              <div className="score">9.0</div>
              <div className="info">
                <h4>Chicken Biryani</h4>
                <div className="meta">Mira · West Village</div>
              </div>
            </div>
            <div className="trend-card">
              <img src="/images/trending-dumplings.png" alt="Soup dumplings" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div className="overlay"></div>
              <div className="score">8.9</div>
              <div className="info">
                <h4>Soup dumplings, pork & crab</h4>
                <div className="meta">Joe&apos;s Shanghai · Flushing</div>
              </div>
            </div>
            <div className="trend-card">
              <img src="/images/trending-gelato.png" alt="Olive oil & sea salt gelato" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div className="overlay"></div>
              <div className="score">8.7</div>
              <div className="info">
                <h4>Olive oil & sea salt gelato</h4>
                <div className="meta">Soft Swerve · LES</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="band-soft" style={{ padding: "100px 0" }}>
        <div className="wrap">
          <div className="sec-head center">
            <span className="eyebrow">Why SmackCheck</span>
            <h2 className="h-1">Not another <span className="accent">star rating</span>.</h2>
            <p className="lede">Other apps ask the crowd. We score the dish.</p>
          </div>
          <div className="compare">
            <div className="compare-row head">
              <div>Feature</div>
              <div className="smack cell">SmackCheck</div>
              <div className="cell">Yelp</div>
              <div className="cell">Beli</div>
              <div className="cell">Untappd</div>
            </div>
            <div className="compare-row"><div className="feat-name">AI dish‑level scoring</div><div className="cell yes smack-col"><span className="compare-check">✓</span></div><div className="cell"><span className="compare-x"></span></div><div className="cell"><span className="compare-x"></span></div><div className="cell"><span className="compare-x"></span></div></div>
            <div className="compare-row"><div className="feat-name">Per‑dish ratings (not restaurant)</div><div className="cell yes smack-col"><span className="compare-check">✓</span></div><div className="cell"><span className="compare-x"></span></div><div className="cell yes"><span className="compare-check">✓</span></div><div className="cell yes"><span className="compare-check">✓</span></div></div>
            <div className="compare-row"><div className="feat-name">XP, levels & streaks</div><div className="cell yes smack-col"><span className="compare-check">✓</span></div><div className="cell"><span className="compare-x"></span></div><div className="cell"><span className="compare-x"></span></div><div className="cell yes"><span className="compare-check">✓</span></div></div>
            <div className="compare-row"><div className="feat-name">Friend leaderboards</div><div className="cell yes smack-col"><span className="compare-check">✓</span></div><div className="cell"><span className="compare-x"></span></div><div className="cell yes"><span className="compare-check">✓</span></div><div className="cell"><span className="compare-x"></span></div></div>
            <div className="compare-row"><div className="feat-name">Stories & social feed</div><div className="cell yes smack-col"><span className="compare-check">✓</span></div><div className="cell"><span className="compare-x"></span></div><div className="cell"><span className="compare-x"></span></div><div className="cell"><span className="compare-x"></span></div></div>
            <div className="compare-row"><div className="feat-name">Live trending map</div><div className="cell yes smack-col"><span className="compare-check">✓</span></div><div className="cell yes"><span className="compare-check">✓</span></div><div className="cell"><span className="compare-x"></span></div><div className="cell"><span className="compare-x"></span></div></div>
            <div className="compare-row"><div className="feat-name">Free, no ads</div><div className="cell yes smack-col"><span className="compare-check">✓</span></div><div className="cell"><span className="compare-x"></span></div><div className="cell yes"><span className="compare-check">✓</span></div><div className="cell yes"><span className="compare-check">✓</span></div></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "100px 0" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Reviews from the table</span>
            <h2 className="h-1">Foodies don&apos;t shut up <span className="accent">about it</span>.</h2>
          </div>
          <div className="test-grid">
            <div className="test-card">
              <div className="test-stars">★★★★★</div>
              <p className="quote">&quot;I deleted Beli the day I downloaded SmackCheck. The AI score actually tracks with what my friends and I think  it&apos;s wild.&quot;</p>
              <div className="test-author"><div className="av"></div><div><div className="name">Camila R.</div><div className="sub">Brooklyn · 612 smacks</div></div></div>
            </div>
            <div className="test-card">
              <div className="test-stars">★★★★★</div>
              <p className="quote">&quot;I went to a wedding in Lisbon and rebuilt my whole itinerary from the SmackCheck map. Best paella of my life was a 9.6 pin.&quot;</p>
              <div className="test-author"><div className="av" style={{ background: "linear-gradient(135deg,#d4a872,#8a5a1d)" }}></div><div><div className="name">Marcus T.</div><div className="sub">San Francisco · Level 22</div></div></div>
            </div>
            <div className="test-card">
              <div className="test-stars">★★★★★</div>
              <p className="quote">&quot;The leaderboards turned my group chat into a competitive sport. I&apos;m currently winning. This is my Roman empire.&quot;</p>
              <div className="test-author"><div className="av" style={{ background: "linear-gradient(135deg,#c89890,#6a4040)" }}></div><div><div className="name">Aria S.</div><div className="sub">Austin · #3 in city</div></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section style={{ padding: "60px 0 40px" }}>
        <div className="wrap-narrow">
          <div className="waitlist">
            <span className="eyebrow">Coming soon</span>
            <h2 className="h-1">iOS waitlist <span className="accent">is open</span>.</h2>
            <p>We&apos;re rolling out TestFlight in waves. Drop your email and we&apos;ll send a code the moment your slot opens.</p>
            <form className="waitlist-form" onSubmit={(e) => { e.preventDefault(); const b = e.currentTarget.querySelector('button'); if(b) { b.textContent = "You're in ✓"; (b as HTMLButtonElement).disabled = true; } }}>
              <input className="waitlist-input" type="email" placeholder="you@email.com" required />
              <button className="btn" type="submit">Join waitlist</button>
            </form>
            <div className="ticks">
              <span>No spam</span>
              <span>One launch email</span>
              <span>Priority TestFlight access</span>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section className="download-cta">
        <div className="wrap-narrow">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Ready when you are</span>
          <h2 className="h-display" style={{ marginTop: 20 }}>Your next great<br/>meal is one <span className="accent">smack</span> away.</h2>
          <div className="stores">
            <Link href="/download" className="btn-store">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div style={{ textAlign: "left" }}><div className="sub">Download on</div><div className="lbl">App Store</div></div>
            </Link>
            <Link href="/download" className="btn-store">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/></svg>
              <div style={{ textAlign: "left" }}><div className="sub">Get it on</div><div className="lbl">Google Play</div></div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
