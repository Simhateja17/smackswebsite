import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — SmackCheck",
  description: "SmackCheck Terms of Service. Moderation rules, user conduct, account termination, content ownership.",
};

export default function Terms() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Legal</span>
          <h1 className="h-display">Terms of <span className="accent">Service</span></h1>
          <p className="lede" style={{ margin: "26px auto 0" }}>The agreement between you and SmackCheck Labs.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="legal-grid">
            <aside className="legal-side">
              <h5>On this page</h5>
              <a href="#accept" className="active">Acceptance</a>
              <a href="#eligibility">Eligibility</a>
              <a href="#accounts">Accounts</a>
              <a href="#content">Your content</a>
              <a href="#conduct">User conduct</a>
              <a href="#moderation">Moderation rules</a>
              <a href="#ai">AI scoring</a>
              <a href="#termination">Termination</a>
              <a href="#disclaimers">Disclaimers</a>
              <a href="#liability">Liability</a>
              <a href="#governing">Governing law</a>
            </aside>

            <div className="legal-body">
              <div className="legal-meta">
                <div><b>Effective:</b> May 1, 2026</div>
                <div><b>Last updated:</b> May 12, 2026</div>
                <div><b>Version:</b> 1.4</div>
              </div>

              <h2 id="accept">1. Acceptance of terms</h2>
              <p>By creating an account, downloading or using SmackCheck (&quot;the app&quot;, &quot;the service&quot;), you agree to these Terms and our <Link href="/privacy">Privacy Policy</Link>. If you don't agree, don't use the service.</p>

              <h2 id="eligibility">2. Eligibility</h2>
              <p>You must be at least 13 years old to use SmackCheck. If you're in a region that requires parental consent for minors, you must have it.</p>

              <h2 id="accounts">3. Your account</h2>
              <ul>
                <li>One account per person. You're responsible for activity on your account.</li>
                <li>Keep your credentials safe. Notify us immediately if compromised.</li>
                <li>Account handles are first‑come, first‑served. Trademark disputes are handled at our discretion.</li>
              </ul>

              <h2 id="content">4. Your content</h2>
              <p>You retain ownership of every smack, photo, tasting note and comment you post (collectively, &quot;User Content&quot;). By posting, you grant SmackCheck a worldwide, royalty‑free, non‑exclusive license to host, display, reproduce and distribute that content <strong>solely for the purpose of operating the service</strong>.</p>
              <p>This license ends when you delete the content — except where it has already been re‑shared by other users, in which case it ends when they delete it too.</p>

              <h2 id="conduct">5. User conduct</h2>
              <p>Don't be a person nobody wants to eat with. Specifically, don't:</p>
              <ul>
                <li>Post content that harasses, threatens, dehumanizes or discriminates against anyone.</li>
                <li>Post sexual content, gore, or content that exploits minors.</li>
                <li>Impersonate others — chefs, restaurants, public figures, or other users.</li>
                <li>Spam, scrape, or use bots to inflate XP, scores or follower counts.</li>
                <li>Submit fake reviews — paid, coerced, or competitive sabotage.</li>
                <li>Reverse engineer the AI model or attempt to extract training data.</li>
                <li>Use the service to violate any law or third‑party right.</li>
              </ul>

              <h2 id="moderation">6. Moderation rules</h2>
              <p>We moderate content using a combination of automated systems and a human trust &amp; safety team.</p>
              <ul>
                <li><strong>First offense:</strong> warning, content removed.</li>
                <li><strong>Repeat offenses:</strong> 7‑day post suspension.</li>
                <li><strong>Severe violations</strong> (harassment, fraud, illegal content): immediate permanent ban.</li>
              </ul>
              <p>You can appeal any moderation decision at <a href="mailto:appeals@smackcheck.app">appeals@smackcheck.app</a>. We review every appeal within 7 business days.</p>

              <h2 id="ai">7. AI scoring &amp; recommendations</h2>
              <p>The smack score and recommendations are produced by machine‑learning models and may be wrong. You agree to:</p>
              <ul>
                <li>Not rely on a smack score for allergen, dietary, religious or medical decisions.</li>
                <li>Not use AI outputs to defame restaurants or chefs.</li>
                <li>Acknowledge the model has known weaknesses on niche or regional cuisines.</li>
              </ul>

              <h2 id="termination">8. Termination</h2>
              <p>You can delete your account at any time from <code>Settings → Account</code>. We may suspend or terminate accounts that violate these Terms, with notice when feasible and immediately for severe violations. Termination doesn't affect rights or obligations that survive (license, disclaimers, liability).</p>

              <h2 id="disclaimers">9. Disclaimers</h2>
              <p>The service is provided &quot;as is.&quot; We don't warrant uninterrupted operation, freedom from bugs, or the accuracy of any smack score or recommendation. To the maximum extent permitted by law, we disclaim all implied warranties.</p>

              <h2 id="liability">10. Limitation of liability</h2>
              <p>To the maximum extent permitted by law, SmackCheck Labs is not liable for indirect, incidental, consequential, or punitive damages, or for any food poisoning, allergic reaction, or restaurant‑side dispute. Our aggregate liability for any claim arising out of the service is capped at the greater of $100 or the amount you paid us in the prior 12 months.</p>

              <h2 id="governing">11. Governing law &amp; disputes</h2>
              <p>These Terms are governed by the laws of the State of New York, without regard to conflict of laws. Disputes are resolved by binding arbitration in New York County, except for small‑claims matters and injunctive relief.</p>

              <h2>12. Contact</h2>
              <p>SmackCheck Labs, Inc.<br/>68 Jay Street, Brooklyn, NY 11201<br/>Legal inquiries: <a href="mailto:legal@smackcheck.app">legal@smackcheck.app</a></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
