import type { Metadata } from "next";
import Link from "next/link";
import Phone, { CaptureScreen, FeedScreen, MapScreen } from "../components/Phone";

export const metadata: Metadata = {
  title: "How it works — SmackCheck",
  description: "From plate to score in 800ms. Walk through how SmackCheck captures, analyzes, rates and shares every dish.",
};

export default function HowItWorks() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>How it works</span>
          <h1 className="h-display">From plate to score<br/>in <span className="accent">800 milliseconds</span>.</h1>
          <p className="lede" style={{ margin: "26px auto 0" }}>Five steps, one tap each. The hard part — actually scoring the food — happens on‑device while your camera shutter is still closing.</p>
        </div>
      </section>

      <section style={{ padding: "20px 0 40px" }}>
        <div className="wrap">
          <div className="hiw-rail">
            <div className="hiw-step"><div className="num">1</div><div className="lbl">Capture</div><h3>Snap the plate</h3><p>Open SmackCheck, point, tap. Or pick from your camera roll.</p></div>
            <div className="hiw-step"><div className="num">2</div><div className="lbl">Analyze</div><h3>AI does the work</h3><p>Recognizes the dish, plating, cuisine and likely ingredients.</p></div>
            <div className="hiw-step"><div className="num">3</div><div className="lbl">Rate</div><h3>Confirm or override</h3><p>Accept the smack score or dial it in with your own breakdown.</p></div>
            <div className="hiw-step"><div className="num">4</div><div className="lbl">Share</div><h3>Drop the smack</h3><p>Post to your feed, your friends, or save it as a private taste note.</p></div>
            <div className="hiw-step"><div className="num">5</div><div className="lbl">Discover</div><h3>Find your next</h3><p>The smack feeds the map. Tomorrow's plate is waiting.</p></div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="hiw-detail">
          <div>
            <div className="num-big">01</div>
            <span className="eyebrow">Capture</span>
            <h2 className="h-1" style={{ marginTop: 14 }}>A camera that knows food.</h2>
            <p className="lede">Open the app — you're on capture by default. Tap once for a quick score, hold for a stack of frames so the AI picks the best plating angle automatically.</p>
            <ul style={{ marginTop: 24, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, color: "var(--text-dim)", fontSize: 15 }}>
              <li>• On‑device camera, no upload until you confirm</li>
              <li>• Auto‑levels &amp; warms the photo for natural light</li>
              <li>• Works on plate, bowl, paper bag, food truck wrapper</li>
            </ul>
          </div>
          <div className="phone-wrap"><Phone><CaptureScreen /></Phone></div>
        </div>

        <div className="hiw-detail r">
          <div>
            <div className="num-big">02</div>
            <span className="eyebrow">AI Analysis</span>
            <h2 className="h-1" style={{ marginTop: 14 }}>Sub‑second smack score.</h2>
            <p className="lede">The model identifies the dish, then a flavor pass scores plating, craft and value with confidence. You see the reasoning — not a black box.</p>
            <div className="timing-strip">
              <div className="timing-card"><div className="v">800ms</div><div className="l">Median inference</div></div>
              <div className="timing-card"><div className="v">12.4k</div><div className="l">Named dishes</div></div>
              <div className="timing-card"><div className="v">180</div><div className="l">Cuisines</div></div>
              <div className="timing-card"><div className="v">96.1%</div><div className="l">Dish accuracy</div></div>
            </div>
          </div>
          <div className="phone-wrap"><Phone><CaptureScreen /></Phone></div>
        </div>

        <div className="hiw-detail">
          <div>
            <div className="num-big">03</div>
            <span className="eyebrow">Rate</span>
            <h2 className="h-1" style={{ marginTop: 14 }}>Your taste, your call.</h2>
            <p className="lede">The AI gives you a smack score. You can accept it, slide it, or split it into your own plating / craft / value notes. Every override teaches the model your palate.</p>
            <ul style={{ marginTop: 24, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, color: "var(--text-dim)", fontSize: 15 }}>
              <li>• 0.0–10.0 in 0.1 increments — precision matters</li>
              <li>• Add a one‑line tasting note (or three paragraphs)</li>
              <li>• Tag who you were with, what you drank, what you wore</li>
            </ul>
          </div>
          <div className="phone-wrap"><Phone><FeedScreen /></Phone></div>
        </div>

        <div className="hiw-detail r">
          <div>
            <div className="num-big">04</div>
            <span className="eyebrow">Share</span>
            <h2 className="h-1" style={{ marginTop: 14 }}>Drop the smack.</h2>
            <p className="lede">Post to your feed, send to one friend, or keep it private. Either way it earns XP and feeds the city map — anonymously, if you choose.</p>
            <ul style={{ marginTop: 24, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, color: "var(--text-dim)", fontSize: 15 }}>
              <li>• Public, friends‑only, or solo per smack</li>
              <li>• Group chat stories &amp; trip albums</li>
              <li>• Cross‑post to Instagram with a watermarked card</li>
            </ul>
          </div>
          <div className="phone-wrap"><Phone><FeedScreen /></Phone></div>
        </div>

        <div className="hiw-detail">
          <div>
            <div className="num-big">05</div>
            <span className="eyebrow">Discover</span>
            <h2 className="h-1" style={{ marginTop: 14 }}>The map gets smarter every smack.</h2>
            <p className="lede">Your smacks (and your friends') power a real‑time map of the city's best plates. Tonight's dinner is a tap away.</p>
            <ul style={{ marginTop: 24, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, color: "var(--text-dim)", fontSize: 15 }}>
              <li>• Heatmaps refresh every 5 minutes</li>
              <li>• Filter by cuisine, price, walk distance, friends</li>
              <li>• Curated city guides — &quot;Best ramen in NYC, scored&quot;</li>
            </ul>
          </div>
          <div className="phone-wrap"><Phone><MapScreen /></Phone></div>
        </div>
      </div>

      <section style={{ padding: "100px 0 40px", textAlign: "center" }}>
        <div className="wrap-narrow">
          <h2 className="h-display">That's it.<br/>You just <span className="accent">leveled up</span> dinner.</h2>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 30, flexWrap: "wrap" }}>
            <Link href="/download" className="btn btn-primary">Try it tonight</Link>
            <Link href="/features" className="btn btn-ghost">See every feature</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
