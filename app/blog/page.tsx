import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — SmackCheck",
  description: "Food guides, restaurant spotlights, community stories and product updates from the SmackCheck team.",
};

export default function Blog() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Blog</span>
          <h1 className="h-display">The <span className="accent">smack</span> journal.</h1>
          <p className="lede" style={{ margin: "26px auto 0" }}>Food guides, restaurant spotlights, community stories and what we're shipping. Updated every Thursday.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="feat-post">
            <div className="blog-thumb t1 thumb">
              <span className="pill">Featured · Guide</span>
            </div>
            <div className="body">
              <div className="blog-meta">
                <span>City Guide</span><span className="dot"></span><span>14 min read</span><span className="dot"></span><span>May 12, 2026</span>
              </div>
              <h2>The 15 best birria tacos in NYC, scored.</h2>
              <p>We ate at 47 birrierias from the Bronx to Bay Ridge over three weeks. The Smack Score didn't lie — but the top three weren't where we expected. A field guide for the consommé‑obsessed.</p>
              <div className="blog-author">
                <div className="av"></div>
                <span className="name">Maya Chen · Co‑founder</span>
              </div>
            </div>
          </div>

          <div className="filter-bar">
            <span className="chip active">All</span>
            <span className="chip">Food guides</span>
            <span className="chip">Restaurant spotlights</span>
            <span className="chip">Community stories</span>
            <span className="chip">Product updates</span>
            <span className="chip">Behind the AI</span>
          </div>

          <div className="blog-grid">
            <article className="blog-card">
              <div className="blog-thumb t2"><span className="pill">Restaurant spotlight</span></div>
              <div className="blog-body">
                <div className="blog-meta"><span>Spotlight</span><span className="dot"></span><span>6 min</span></div>
                <h3>Komeya's 24‑hour broth is changing what NYC thinks about ramen.</h3>
                <p>Chef Akari Sato spends 24 hours on a single batch. We spent a week figuring out why.</p>
                <div className="blog-author"><div className="av" style={{ background: "linear-gradient(135deg,#6FCFB1,#2a5a4e)" }}></div><span className="name">Marcus Toledo</span></div>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-thumb t3"><span className="pill">Community</span></div>
              <div className="blog-body">
                <div className="blog-meta"><span>Community</span><span className="dot"></span><span>4 min</span></div>
                <h3>Meet the 100 foodies who've smacked the most dishes in 2026.</h3>
                <p>From a 78‑year‑old retired chef in Queens to a 19‑year‑old college freshman in Berkeley.</p>
                <div className="blog-author"><div className="av" style={{ background: "linear-gradient(135deg,#E0A95C,#8a5a1d)" }}></div><span className="name">Aria Solano</span></div>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-thumb t4"><span className="pill">Behind the AI</span></div>
              <div className="blog-body">
                <div className="blog-meta"><span>Engineering</span><span className="dot"></span><span>12 min</span></div>
                <h3>How we got the smack model under 800ms on a Pixel 6.</h3>
                <p>A deep technical post about quantization, mobile inference, and one really aggressive cache.</p>
                <div className="blog-author"><div className="av" style={{ background: "linear-gradient(135deg,#6BA8E0,#28456e)" }}></div><span className="name">Jay Kim</span></div>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-thumb t5"><span className="pill">Food guide</span></div>
              <div className="blog-body">
                <div className="blog-meta"><span>Guide</span><span className="dot"></span><span>9 min</span></div>
                <h3>A scientific ranking of every olive oil gelato in Manhattan.</h3>
                <p>Three of us. Forty‑eight scoops. One serious data set. Includes the controversial 9.4.</p>
                <div className="blog-author"><div className="av"></div><span className="name">Maya Chen</span></div>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-thumb t6"><span className="pill">Product</span></div>
              <div className="blog-body">
                <div className="blog-meta"><span>Update</span><span className="dot"></span><span>3 min</span></div>
                <h3>What's new in v0.9.2 — Map heatmaps &amp; group trip planning.</h3>
                <p>Faster map, smarter filters, and you can now plan a whole eating trip with three friends.</p>
                <div className="blog-author"><div className="av" style={{ background: "linear-gradient(135deg,#6FCFB1,#2a5a4e)" }}></div><span className="name">Marcus Toledo</span></div>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-thumb t7"><span className="pill">Restaurant spotlight</span></div>
              <div className="blog-body">
                <div className="blog-meta"><span>Spotlight</span><span className="dot"></span><span>7 min</span></div>
                <h3>The neighborhood spot in Bushwick that quietly scored a 9.4.</h3>
                <p>Birrieria Catarina has been open for eight months. Most New Yorkers haven't heard of them yet.</p>
                <div className="blog-author"><div className="av" style={{ background: "linear-gradient(135deg,#E0A95C,#8a5a1d)" }}></div><span className="name">Aria Solano</span></div>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-thumb t8"><span className="pill">Food guide</span></div>
              <div className="blog-body">
                <div className="blog-meta"><span>Guide</span><span className="dot"></span><span>11 min</span></div>
                <h3>Eating in Lisbon: a 4‑day itinerary built entirely from smack scores.</h3>
                <p>The SmackCheck map plus 4 days of jet lag. Includes the 9.6 paella nobody saw coming.</p>
                <div className="blog-author"><div className="av"></div><span className="name">Maya Chen</span></div>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-thumb t1"><span className="pill">Community</span></div>
              <div className="blog-body">
                <div className="blog-meta"><span>Community</span><span className="dot"></span><span>5 min</span></div>
                <h3>Why we made it impossible for restaurants to pay for ranking.</h3>
                <p>The architectural decision that means SmackCheck will never be Yelp.</p>
                <div className="blog-author"><div className="av" style={{ background: "linear-gradient(135deg,#6BA8E0,#28456e)" }}></div><span className="name">Jay Kim</span></div>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-thumb t2"><span className="pill">Behind the AI</span></div>
              <div className="blog-body">
                <div className="blog-meta"><span>Engineering</span><span className="dot"></span><span>8 min</span></div>
                <h3>What we got wrong about regional Mexican food (and how we fixed it).</h3>
                <p>Why the model was scoring Oaxacan dishes 0.4 too low — and how we built the fix.</p>
                <div className="blog-author"><div className="av" style={{ background: "linear-gradient(135deg,#6FCFB1,#2a5a4e)" }}></div><span className="name">Marcus Toledo</span></div>
              </div>
            </article>
          </div>

          <div style={{ textAlign: "center", padding: "60px 0 100px" }}>
            <a href="#" className="btn btn-ghost">Load more posts</a>
          </div>
        </div>
      </section>
    </main>
  );
}
