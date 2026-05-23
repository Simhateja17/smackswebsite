import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features  SmackCheck",
  description: "A deep dive into every SmackCheck feature: AI dish analysis, social feed, stories, leaderboards, challenges, XP, badges, social map and trending discovery.",
};

export default function Features() {
  return (
    <main>
      <section className="page-hero" data-screen-label="01 Header">
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Features</span>
          <h1 className="h-display">Built for people<br/>who take food <span className="accent">seriously</span>.</h1>
          <p className="lede" style={{ margin: "26px auto 0" }}>Nine features. One obsession: helping you find  and remember  the dishes worth eating again.</p>
        </div>
      </section>

      <div className="wrap">
        <div className="deep-feat" data-screen-label="02 AI">
          <div>
            <span className="chip chip-brand"><span className="glow-dot"></span> AI</span>
            <h2 className="h-1">AI dish analysis that <span style={{ color: "var(--brand)" }}>actually tastes</span>.</h2>
            <p className="lede">Point your camera. Get a smack score in 800ms. Trained on 4.2M dishes, the model breaks down plating, craft, value and authenticity  then tags the cuisine and ingredients so you can search your own history later.</p>
            <ul>
              <li>180 cuisines and 12,400 named dishes recognized</li>
              <li>Sub‑second on‑device inference, no upload required</li>
              <li>Confidence score &amp; reasoning shown for every result</li>
              <li>Override the AI  your taste is the source of truth</li>
            </ul>
          </div>
          <div className="phone-wrap">
            <img
              src="/images/phone-2-capture-clean.png"
              alt="Capture and AI screen"
              className="deep-phone-shot"
            />
          </div>
        </div>

        <div className="deep-feat reverse" data-screen-label="03 Feed">
          <div>
            <span className="chip chip-brand">Feed</span>
            <h2 className="h-1">A social feed for taste, not vibes.</h2>
            <p className="lede">Real plates from real eaters, ranked by how good the food actually is. No sponsored posts. No filters that make a sandwich look like a sunset.</p>
            <ul>
              <li>Follow friends, chefs and city‑specific curators</li>
              <li>Save dishes to taste‑maps that travel with you</li>
              <li>Comment, react, and quote‑smack like a tasting note</li>
              <li>Privacy controls: public, friends‑only, or solo</li>
            </ul>
          </div>
          <div className="phone-wrap">
            <img
              src="/images/phone-1-feed-clean.png"
              alt="Feed screen"
              className="deep-phone-shot"
            />
          </div>
        </div>

        <div className="deep-feat" data-screen-label="04 Map">
          <div>
            <span className="chip chip-brand">Map</span>
            <h2 className="h-1">The best plate on every block.</h2>
            <p className="lede">A live map of the highest‑smacked dishes near you. Filter by cuisine, price, vibe, dietary, or your friends. The &quot;where should we eat?&quot; group chat is dead.</p>
            <ul>
              <li>City heatmaps update in real time</li>
              <li>Smart filters: under $20, walkable, open late, group‑friendly</li>
              <li>Save lists, share routes, drop pins for later</li>
              <li>Works offline  your saves come with you on the plane</li>
            </ul>
          </div>
          <div className="phone-wrap">
            <img
              src="/images/phone-3-map-clean.png"
              alt="Map screen"
              className="deep-phone-shot"
            />
          </div>
        </div>

        <div className="deep-feat reverse" data-screen-label="05 Leaderboard">
          <div>
            <span className="chip chip-brand">Leaderboard</span>
            <h2 className="h-1">Compete with your group chat.</h2>
            <p className="lede">Climb global, friends and city leaderboards. Earn XP for every smack, double XP for new cuisines, and crown a Taste Champion every month.</p>
            <ul>
              <li>Friends, city &amp; global boards  refresh weekly</li>
              <li>Streak multipliers reward consistency over volume</li>
              <li>Seasons end with city‑specific trophies</li>
              <li>Friendly rivalry, not a casino  anti‑grind by design</li>
            </ul>
          </div>
          <div className="phone-wrap">
            <img
              src="/images/phone-4-leaderboard-clean.png"
              alt="Leaderboard screen"
              className="deep-phone-shot"
            />
          </div>
        </div>

        <div className="deep-feat" data-screen-label="06 Profile">
          <div>
            <span className="chip chip-brand">XP &amp; Badges</span>
            <h2 className="h-1">Your taste, leveled up.</h2>
            <p className="lede">Every smack earns XP. Hit streaks, unlock cuisines, and grow from Snacker to Master Palate  with 64 badges across discovery, range, depth, and consistency.</p>
            <ul>
              <li>14 levels from Snacker to Master Palate</li>
              <li>64 badges across discovery, range, depth &amp; consistency</li>
              <li>Stories, challenges and weekly missions feed your XP</li>
              <li>Your profile is a public résumé of your taste</li>
            </ul>
          </div>
          <div className="phone-wrap">
            <img
              src="/images/phone-5-profile-clean.png"
              alt="Profile screen"
              className="deep-phone-shot"
            />
          </div>
        </div>
      </div>

      <section className="badge-showcase">
        <div className="wrap">
          <div className="sec-head center">
            <span className="eyebrow">Badges</span>
            <h2 className="h-1">64 ways to flex your palate.</h2>
          </div>
          <div className="badge-row">
            <div className="bs-card"><div className="bs-circle brand">🔥</div><div className="name">First Smack</div><div className="desc">Score your first dish</div></div>
            <div className="bs-card"><div className="bs-circle gold">👑</div><div className="name">City Champion</div><div className="desc">#1 in your city</div></div>
            <div className="bs-card"><div className="bs-circle brand">⚡</div><div className="name">30‑Day Streak</div><div className="desc">A month, daily</div></div>
            <div className="bs-card"><div className="bs-circle mint">🌿</div><div className="name">Globe Trotter</div><div className="desc">15 cuisines logged</div></div>
            <div className="bs-card"><div className="bs-circle sky">🥟</div><div className="name">Dumpling Devotee</div><div className="desc">50 dumplings smacked</div></div>
            <div className="bs-card"><div className="bs-circle gold">⭐</div><div className="name">Perfect 10</div><div className="desc">Find a 10.0 dish</div></div>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 0" }}>
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <h2 className="h-display">Ready to <span className="accent">start scoring</span>?</h2>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 30, flexWrap: "wrap" }}>
            <Link href="/download" className="btn btn-primary">Download SmackCheck</Link>
            <Link href="/how-it-works" className="btn btn-ghost">See how it works</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
