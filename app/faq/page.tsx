import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ  SmackCheck",
  description: "Common questions about SmackCheck. AI accuracy, privacy, moderation, community safety, data usage.",
};

export default function FAQ() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>FAQ</span>
          <h1 className="h-display">Answers.<br/>Mostly <span className="accent">honest</span>.</h1>
          <p className="lede" style={{ margin: "26px auto 0" }}>If you can't find it here, mail us at <a href="mailto:hi@smackcheck.app" style={{ color: "var(--brand)" }}>hi@smackcheck.app</a>.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="faq-grid">
            <aside className="faq-side">
              <h5>Topics</h5>
              <a href="#ai" className="active">AI &amp; accuracy</a>
              <a href="#privacy">Privacy</a>
              <a href="#moderation">Moderation</a>
              <a href="#community">Community safety</a>
              <a href="#data">Data &amp; account</a>
              <a href="#billing">Billing</a>
            </aside>
            <div>
              <div className="faq-section" id="ai">
                <h2>AI &amp; accuracy</h2>
                <details className="faq-item" open>
                  <summary className="faq-q">How accurate is the smack score, really?<span className="ic">+</span></summary>
                  <div className="faq-a"><p>The model is right about the dish 96.1% of the time. The smack score correlates with our community's own ratings at 0.84  high, but not perfect. We show a confidence level on every score so you know when to trust it and when to taste for yourself.</p></div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">Can I override the score?<span className="ic">+</span></summary>
                  <div className="faq-a"><p>Always. The AI suggests, you decide. Every override teaches our personalization layer  over time, your scores get more &quot;you&quot; and less average.</p></div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">What if the AI doesn't recognize my dish?<span className="ic">+</span></summary>
                  <div className="faq-a"><p>You can tag it manually. We add anything new to our recognition queue and most get covered within a week. We currently handle 12,400 named dishes across 180 cuisines.</p></div>
                </details>
              </div>

              <div className="faq-section" id="privacy">
                <h2>Privacy</h2>
                <details className="faq-item">
                  <summary className="faq-q">Are my photos uploaded?<span className="ic">+</span></summary>
                  <div className="faq-a"><p>Not unless you post. Inference runs on‑device. Photos only leave your phone when you choose to share publicly or with friends.</p></div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">What data do you collect?<span className="ic">+</span></summary>
                  <div className="faq-a"><p>Account basics (email, handle), your smacks if you post them, and analytics events. We use Supabase for storage, Gemini for the model layer, FCM for push, and Mixpanel for analytics. Full breakdown on the <a href="/privacy" style={{ color: "var(--brand)" }}>Privacy Policy</a> page.</p></div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">Is SmackCheck GDPR / CCPA compliant?<span className="ic">+</span></summary>
                  <div className="faq-a"><p>Yes. You can request, export or delete all of your data from <code>Settings → Privacy</code> at any time. Requests are honored within 14 days.</p></div>
                </details>
              </div>

              <div className="faq-section" id="moderation">
                <h2>Moderation</h2>
                <details className="faq-item">
                  <summary className="faq-q">How do you keep spam and bots out?<span className="ic">+</span></summary>
                  <div className="faq-a"><p>Every account is verified at sign‑up. Reviews are weighted by reputation  new accounts can post, but their smacks don't affect the city map until they've earned some XP. Restaurants can't pay to rank, ever.</p></div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">Can restaurants flag content?<span className="ic">+</span></summary>
                  <div className="faq-a"><p>Yes. Business owners can claim a venue and respond to smacks (one response per smack). They cannot remove honest reviews  only abusive or false ones, which we review within 48 hours.</p></div>
                </details>
              </div>

              <div className="faq-section" id="community">
                <h2>Community safety</h2>
                <details className="faq-item">
                  <summary className="faq-q">Can I make my profile private?<span className="ic">+</span></summary>
                  <div className="faq-a"><p>Yes. Profiles default to public but you can switch to friends‑only or solo from Settings. Per‑smack privacy is also supported.</p></div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">How do I report a user?<span className="ic">+</span></summary>
                  <div className="faq-a"><p>Tap the <code>···</code> menu on any post or profile and select Report. Our trust &amp; safety team responds within 24 hours.</p></div>
                </details>
              </div>

              <div className="faq-section" id="data">
                <h2>Data &amp; account</h2>
                <details className="faq-item">
                  <summary className="faq-q">Can I export my smacks?<span className="ic">+</span></summary>
                  <div className="faq-a"><p>Yes. <code>Settings → Privacy → Export</code> gives you a JSON of every smack, photo and tasting note. We email a download link within an hour.</p></div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">How do I delete my account?<span className="ic">+</span></summary>
                  <div className="faq-a"><p><code>Settings → Account → Delete</code>. Your data is wiped within 30 days. We do not retain photo content after deletion.</p></div>
                </details>
              </div>

              <div className="faq-section" id="billing">
                <h2>Billing</h2>
                <details className="faq-item">
                  <summary className="faq-q">Is SmackCheck free?<span className="ic">+</span></summary>
                  <div className="faq-a"><p>Yes  completely free in beta, no ads. We'll launch an optional Pro tier later for power users (advanced analytics, trip planning, restaurant‑side tools), but the core scoring will always be free.</p></div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
