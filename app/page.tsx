"use client";

import Link from "next/link";
import Phone, { FeedScreen, CaptureScreen, MapScreen, LeaderboardScreen, ProfileScreen } from "./components/Phone";

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
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 12.5c0-2.6 2.1-3.8 2.2-3.9-1.2-1.7-3-2-3.7-2-1.6-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.8-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.4-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.2 3.1-2.5.7-1 1.3-2.4 1.3-2.4-1-.4-3-1.4-3-3.5z"/></svg>
                  Download for iOS
                </Link>
                <Link href="/download" className="btn btn-ghost">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 2v20l9-10z"/></svg>
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
      <section data-screen-label="02 Screens" style={{ padding: "80px 0 30px" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">A look inside</span>
            <h2 className="h-1">Built for the way you <span className="accent">eat now</span>.</h2>
            <p className="lede">Five screens. One unfair advantage over every menu, every dinner, every group chat about where to go.</p>
          </div>
        </div>
        <div className="rail">
          <div className="rail-track">
            <div className="rail-card">
              <div className="mono" style={{ marginBottom: 14 }}>01  FEED</div>
              <Phone><FeedScreen /></Phone>
            </div>
            <div className="rail-card">
              <div className="mono" style={{ marginBottom: 14 }}>02  CAPTURE & AI</div>
              <Phone><CaptureScreen /></Phone>
            </div>
            <div className="rail-card">
              <div className="mono" style={{ marginBottom: 14 }}>03  MAP</div>
              <Phone><MapScreen /></Phone>
            </div>
            <div className="rail-card">
              <div className="mono" style={{ marginBottom: 14 }}>04  LEADERBOARD</div>
              <Phone><LeaderboardScreen /></Phone>
            </div>
            <div className="rail-card">
              <div className="mono" style={{ marginBottom: 14 }}>05  PROFILE</div>
              <Phone><ProfileScreen /></Phone>
            </div>
          </div>
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
              <div style={{ position: "absolute", bottom: -20, left: "50%", transform: "translateX(-50%)" }}>
                <Phone size="sm"><CaptureScreen /></Phone>
              </div>
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
              <div className="img a"></div>
              <div className="overlay"></div>
              <div className="score">9.4</div>
              <div className="info">
                <span className="badge">🔥 #1 in Brooklyn</span>
                <h4>Crispy Birria Tacos w/ consommé</h4>
                <div className="meta">Birrieria Catarina · 312 smacks this week</div>
              </div>
            </div>
            <div className="trend-card">
              <div className="img b"></div>
              <div className="overlay"></div>
              <div className="score">9.1</div>
              <div className="info">
                <span className="badge">🍜 Tonkotsu</span>
                <h4>House ramen, 24h broth</h4>
                <div className="meta">Komeya · LES</div>
              </div>
            </div>
            <div className="trend-card">
              <div className="img c"></div>
              <div className="overlay"></div>
              <div className="score">9.0</div>
              <div className="info">
                <span className="badge">🍷 Wine bar</span>
                <h4>Beet tartare, smoked ricotta</h4>
                <div className="meta">Mira · West Village</div>
              </div>
            </div>
            <div className="trend-card">
              <div className="img d"></div>
              <div className="overlay"></div>
              <div className="score">8.9</div>
              <div className="info">
                <span className="badge">🥟 Dim Sum</span>
                <h4>Soup dumplings, pork & crab</h4>
                <div className="meta">Joe&apos;s Shanghai · Flushing</div>
              </div>
            </div>
            <div className="trend-card">
              <div className="img e"></div>
              <div className="overlay"></div>
              <div className="score">8.7</div>
              <div className="info">
                <span className="badge">🍦 Dessert</span>
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
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 12.5c0-2.6 2.1-3.8 2.2-3.9-1.2-1.7-3-2-3.7-2-1.6-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.8-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.4-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.2 3.1-2.5.7-1 1.3-2.4 1.3-2.4-1-.4-3-1.4-3-3.5z"/></svg>
              <div style={{ textAlign: "left" }}><div className="sub">Download on</div><div className="lbl">App Store</div></div>
            </Link>
            <Link href="/download" className="btn-store">
              <svg width="28" height="28" viewBox="0 0 24 24"><path d="M3 2v20l9-10z" fill="#a4c639"/></svg>
              <div style={{ textAlign: "left" }}><div className="sub">Get it on</div><div className="lbl">Google Play</div></div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
