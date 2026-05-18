import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About  SmackCheck",
  description: "The story behind SmackCheck. We're a small team building the social food app for people who actually care what's on the plate.",
};

export default function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>About</span>
          <h1 className="h-display">We're building<br/>the app we wanted<br/>to <span className="accent">eat with</span>.</h1>
          <p className="lede" style={{ margin: "26px auto 0" }}>SmackCheck started as a group chat. Then a spreadsheet. Then an obsession. Now it's an app  and a community of 24,800+ people who really care what's on the plate.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="story-grid">
            <div>
              <span className="eyebrow">The story</span>
              <h2 className="h-1" style={{ marginTop: 14 }}>Star ratings don't taste like anything.</h2>
              <p>In 2024 we got tired of arguing about dinner. The five‑star apps were full of bots. The check‑in apps were full of vibes. Nobody was actually scoring the food.</p>
              <p>So we started a Notion doc  every dish, scored 0 to 10, with a tasting note. Within a year it had grown to 4,800 entries across three cities. People kept asking for access. We started saying yes.</p>
              <p>SmackCheck is what that doc became when we let an AI help.</p>
            </div>
            <div className="story-img"><div className="stamp">SmackCheck HQ · Brooklyn · 2025</div></div>
          </div>

          <div className="story-grid r">
            <div>
              <span className="eyebrow">The mission</span>
              <h2 className="h-1" style={{ marginTop: 14 }}>A taste graph for the world.</h2>
              <p>We think great food is the easiest thing in the world to find  and the hardest thing to remember. The dish you couldn't stop thinking about last August? Gone. The bar your friend swore by? Forgotten.</p>
              <p>Our job is to make taste portable. A score, a tasting note, a pin on a map  so the best meal of last year is the first answer to &quot;where should we eat tonight?&quot;</p>
            </div>
            <div className="story-img" style={{ background: "linear-gradient(135deg,rgba(224,169,92,.25),rgba(100,80,30,.15))" }}><div className="stamp">Field notes · 4,812 dishes · 3 cities</div></div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">What we believe</span>
            <h2 className="h-1">Five rules we won't break.</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="num">01 / Taste</div>
              <h3>The dish is the unit.</h3>
              <p>Not the restaurant, not the chef. The plate in front of you tonight. Everything else is downstream.</p>
            </div>
            <div className="value-card">
              <div className="num">02 / Trust</div>
              <h3>No paid placements.</h3>
              <p>Restaurants can't pay to rank. Nobody can. The smack score is the smack score.</p>
            </div>
            <div className="value-card">
              <div className="num">03 / Speed</div>
              <h3>800ms or it doesn't ship.</h3>
              <p>If scoring a dish takes longer than it took to plate, we go back to the workshop.</p>
            </div>
            <div className="value-card">
              <div className="num">04 / Privacy</div>
              <h3>On‑device first.</h3>
              <p>Your photos stay on your phone until you say otherwise. Your taste is yours.</p>
            </div>
            <div className="value-card">
              <div className="num">05 / Community</div>
              <h3>Real foodies, not bots.</h3>
              <p>Anti‑spam from day one. Every account verified, every review weighted by reputation.</p>
            </div>
            <div className="value-card">
              <div className="num">06 / Joy</div>
              <h3>It should feel good.</h3>
              <p>Eating is a happy thing. The app should be too. We optimize for delight before everything else.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "20px 0" }}>
        <div className="wrap">
          <div className="stats-row">
            <div><div className="stat-num">24.8k</div><div className="stat-lbl">Active foodies</div></div>
            <div><div className="stat-num">4.2M</div><div className="stat-lbl">Dishes smacked</div></div>
            <div><div className="stat-num">180</div><div className="stat-lbl">Cuisines covered</div></div>
            <div><div className="stat-num">9</div><div className="stat-lbl">Cities live</div></div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The team</span>
            <h2 className="h-1">Twelve people. One opinion.</h2>
          </div>
          <div className="team-grid">
            <div className="team-card"><div className="team-av" style={{ background: "linear-gradient(135deg,#BB5B5C,#642223)" }}></div><h4>Maya Chen</h4><div className="role">Co‑founder · CEO</div><p>Ex‑Eater. Has eaten in 64 countries. Birria evangelist.</p></div>
            <div className="team-card"><div className="team-av" style={{ background: "linear-gradient(135deg,#6FCFB1,#2a5a4e)" }}></div><h4>Marcus Toledo</h4><div className="role">Co‑founder · CTO</div><p>Built the AI pipeline. Believes ramen is a love language.</p></div>
            <div className="team-card"><div className="team-av" style={{ background: "linear-gradient(135deg,#E0A95C,#8a5a1d)" }}></div><h4>Aria Solano</h4><div className="role">Head of Design</div><p>Sets the bar. Owns the smack score curve.</p></div>
            <div className="team-card"><div className="team-av" style={{ background: "linear-gradient(135deg,#6BA8E0,#28456e)" }}></div><h4>Jay Kim</h4><div className="role">Head of Community</div><p>Curates the city editors. Knows every chef in LES.</p></div>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 0 100px" }}>
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <h2 className="h-display">Want to <span className="accent">help build</span> it?</h2>
          <p className="lede" style={{ margin: "24px auto 30px" }}>We're hiring an iOS engineer, a community lead, and a chef‑in‑residence for the editorial side.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">See open roles</Link>
            <Link href="/contact" className="btn btn-ghost">Get in touch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
