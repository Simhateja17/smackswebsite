import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download — SmackCheck",
  description: "Download SmackCheck. Android APK & Play Store available now. iOS TestFlight coming soon. Scan the QR to open on your phone.",
};

export default function Download() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Download</span>
          <h1 className="h-display">Get SmackCheck<br/>on your <span className="accent">phone</span>.</h1>
          <p className="lede" style={{ margin: "26px auto 0" }}>Android is live. iOS TestFlight is rolling out in waves. Either way, your first smack is about 90 seconds away.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="dl-grid">
            <div>
              <div className="dl-options">
                <a href="#" className="dl-card featured">
                  <div className="dl-icon android">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 9 19 6.5l-.5-.3-1.6 2.7a8.5 8.5 0 0 0-9.8 0L5.5 6.2 5 6.5 6.5 9A7 7 0 0 0 4 14h16a7 7 0 0 0-2.5-5zm-9 3.5a.8.8 0 1 1 0-1.5.8.8 0 0 1 0 1.5zm7 0a.8.8 0 1 1 0-1.5.8.8 0 0 1 0 1.5z"/></svg>
                  </div>
                  <div className="dl-info">
                    <div className="top"><span className="pill-status pill-live">● Live</span></div>
                    <h3>Get on Google Play</h3>
                    <p>Auto‑updates, secure install, fastest path to ratings.</p>
                    <div className="v">Android 9.0+ · 38.4 MB</div>
                  </div>
                  <div className="dl-action"><span className="btn btn-primary btn-sm">Install</span></div>
                </a>

                <a href="#" className="dl-card">
                  <div className="dl-icon apk">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 17v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3"/></svg>
                  </div>
                  <div className="dl-info">
                    <div className="top"><span className="pill-status pill-beta">Direct APK</span></div>
                    <h3>Sideload the APK</h3>
                    <p>For testers in regions Play Store hasn't reached yet.</p>
                    <div className="v">v0.9.2 · 38.4 MB · SHA‑256 verified</div>
                  </div>
                  <div className="dl-action"><span className="btn btn-ghost btn-sm">Download .apk</span></div>
                </a>

                <a href="#" className="dl-card">
                  <div className="dl-icon apple">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 12.5c0-2.6 2.1-3.8 2.2-3.9-1.2-1.7-3-2-3.7-2-1.6-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.8-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.4-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.2 3.1-2.5.7-1 1.3-2.4 1.3-2.4-1-.4-3-1.4-3-3.5z"/></svg>
                  </div>
                  <div className="dl-info">
                    <div className="top"><span className="pill-status pill-soon">TestFlight · Soon</span></div>
                    <h3>iOS — coming this season</h3>
                    <p>We're rolling out TestFlight in waves. Join the waitlist for a code.</p>
                    <div className="v">iOS 16+ · invite required</div>
                  </div>
                  <div className="dl-action"><span className="btn btn-ghost btn-sm">Join waitlist</span></div>
                </a>
              </div>
            </div>

            <div className="qr-block">
              <div className="qr">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="#fff"/>
                  <g fill="#000">
                    <rect x="6" y="6" width="22" height="22"/><rect x="10" y="10" width="14" height="14" fill="#fff"/><rect x="13" y="13" width="8" height="8"/>
                    <rect x="72" y="6" width="22" height="22"/><rect x="76" y="10" width="14" height="14" fill="#fff"/><rect x="79" y="13" width="8" height="8"/>
                    <rect x="6" y="72" width="22" height="22"/><rect x="10" y="76" width="14" height="14" fill="#fff"/><rect x="13" y="79" width="8" height="8"/>
                    <rect x="35" y="8" width="3" height="3"/><rect x="40" y="8" width="3" height="3"/><rect x="50" y="8" width="3" height="3"/><rect x="58" y="8" width="3" height="3"/><rect x="64" y="8" width="3" height="3"/>
                    <rect x="35" y="14" width="3" height="3"/><rect x="44" y="14" width="3" height="3"/><rect x="55" y="14" width="3" height="3"/><rect x="60" y="14" width="3" height="3"/>
                    <rect x="32" y="20" width="3" height="3"/><rect x="38" y="20" width="3" height="3"/><rect x="42" y="20" width="3" height="3"/><rect x="48" y="20" width="3" height="3"/><rect x="55" y="20" width="3" height="3"/>
                    <rect x="35" y="26" width="3" height="3"/><rect x="40" y="26" width="3" height="3"/><rect x="46" y="26" width="3" height="3"/><rect x="52" y="26" width="3" height="3"/><rect x="60" y="26" width="3" height="3"/><rect x="66" y="26" width="3" height="3"/>
                    <rect x="8" y="35" width="3" height="3"/><rect x="14" y="35" width="3" height="3"/><rect x="20" y="35" width="3" height="3"/><rect x="32" y="35" width="3" height="3"/><rect x="38" y="35" width="3" height="3"/><rect x="44" y="35" width="3" height="3"/><rect x="56" y="35" width="3" height="3"/><rect x="62" y="35" width="3" height="3"/><rect x="74" y="35" width="3" height="3"/><rect x="84" y="35" width="3" height="3"/>
                    <rect x="11" y="42" width="3" height="3"/><rect x="20" y="42" width="3" height="3"/><rect x="35" y="42" width="3" height="3"/><rect x="42" y="42" width="3" height="3"/><rect x="50" y="42" width="3" height="3"/><rect x="60" y="42" width="3" height="3"/><rect x="68" y="42" width="3" height="3"/><rect x="78" y="42" width="3" height="3"/><rect x="88" y="42" width="3" height="3"/>
                    <rect x="8" y="48" width="3" height="3"/><rect x="18" y="48" width="3" height="3"/><rect x="28" y="48" width="3" height="3"/><rect x="40" y="48" width="3" height="3"/><rect x="48" y="48" width="3" height="3"/><rect x="56" y="48" width="3" height="3"/><rect x="64" y="48" width="3" height="3"/><rect x="80" y="48" width="3" height="3"/>
                    <rect x="14" y="55" width="3" height="3"/><rect x="22" y="55" width="3" height="3"/><rect x="30" y="55" width="3" height="3"/><rect x="42" y="55" width="3" height="3"/><rect x="52" y="55" width="3" height="3"/><rect x="58" y="55" width="3" height="3"/><rect x="68" y="55" width="3" height="3"/><rect x="74" y="55" width="3" height="3"/><rect x="84" y="55" width="3" height="3"/>
                    <rect x="8" y="62" width="3" height="3"/><rect x="18" y="62" width="3" height="3"/><rect x="35" y="62" width="3" height="3"/><rect x="44" y="62" width="3" height="3"/><rect x="50" y="62" width="3" height="3"/><rect x="62" y="62" width="3" height="3"/><rect x="70" y="62" width="3" height="3"/><rect x="80" y="62" width="3" height="3"/><rect x="88" y="62" width="3" height="3"/>
                    <rect x="35" y="72" width="3" height="3"/><rect x="42" y="72" width="3" height="3"/><rect x="55" y="72" width="3" height="3"/><rect x="62" y="72" width="3" height="3"/><rect x="68" y="72" width="3" height="3"/>
                    <rect x="32" y="78" width="3" height="3"/><rect x="42" y="78" width="3" height="3"/><rect x="48" y="78" width="3" height="3"/><rect x="56" y="78" width="3" height="3"/><rect x="64" y="78" width="3" height="3"/><rect x="76" y="78" width="3" height="3"/><rect x="84" y="78" width="3" height="3"/>
                    <rect x="38" y="84" width="3" height="3"/><rect x="44" y="84" width="3" height="3"/><rect x="52" y="84" width="3" height="3"/><rect x="58" y="84" width="3" height="3"/><rect x="68" y="84" width="3" height="3"/><rect x="74" y="84" width="3" height="3"/>
                    <rect x="35" y="90" width="3" height="3"/><rect x="46" y="90" width="3" height="3"/><rect x="55" y="90" width="3" height="3"/><rect x="62" y="90" width="3" height="3"/><rect x="78" y="90" width="3" height="3"/><rect x="86" y="90" width="3" height="3"/>
                  </g>
                  <rect x="42" y="42" width="16" height="16" rx="3" fill="#9B2335"/>
                  <text x="50" y="54" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="800" fill="#fff">S</text>
                </svg>
              </div>
              <h3 className="h-3">Open on your phone</h3>
              <p>Point your camera at the code to install on Android — or save it for later.</p>
              <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
                <span className="chip"><span className="glow-dot" style={{ width: 6, height: 6 }}></span> apk.smackcheck.app</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="requirements">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Before you install</span>
            <h2 className="h-1">A few honest details.</h2>
          </div>
          <div className="req-grid">
            <div className="req-card">
              <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12 9 8h6l4 4v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><path d="M9 12h6"/></svg></div>
              <h4>Requirements</h4>
              <p>Android 9.0+, iOS 16+ (TestFlight). Camera access for capture, optional location for the map.</p>
            </div>
            <div className="req-card">
              <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
              <h4>Privacy</h4>
              <p>Photos analyzed on‑device. Nothing uploads until you confirm. We're CCPA &amp; GDPR compliant.</p>
            </div>
            <div className="req-card">
              <div className="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></svg></div>
              <h4>Beta status</h4>
              <p>v0.9.2 is public beta. You'll get weekly updates and a direct line to the team.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
