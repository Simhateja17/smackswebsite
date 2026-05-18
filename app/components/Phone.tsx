const StatusBar = ({ dark }: { dark?: boolean }) => (
  <div className={`statusbar ${dark ? "dark" : ""}`}>
    <span>9:41</span>
    <span className="statusbar-icons">
      <svg viewBox="0 0 16 16" fill="currentColor"><path d="M1 11h2v3H1zM5 8h2v6H5zM9 5h2v9H9zM13 2h2v12h-2z"/></svg>
      <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 3a8.7 8.7 0 0 1 5.7 2.1l1.1-1.2A10.3 10.3 0 0 0 8 1.5 10.3 10.3 0 0 0 1.2 4l1.1 1.1A8.7 8.7 0 0 1 8 3zm0 3a5.7 5.7 0 0 1 3.7 1.4L13 6.2a7.4 7.4 0 0 0-10 0l1.3 1.2A5.7 5.7 0 0 1 8 6zm0 3a2.7 2.7 0 0 1 1.7.6L11 8.4a4.4 4.4 0 0 0-6 0l1.3 1.2A2.7 2.7 0 0 1 8 9zm0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>
      <span className="battery"></span>
    </span>
  </div>
);

const Icon = {
  home: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2h-3v-7H8v7H5a2 2 0 0 1-2-2z"/></svg>,
  search: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>,
  plus: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14"/></svg>,
  trophy: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 4h8v6a4 4 0 0 1-8 0z"/><path d="M16 6h3a3 3 0 0 1-3 3M8 6H5a3 3 0 0 0 3 3M9 14h6v6H9z"/></svg>,
  user: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>,
  heart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"/></svg>,
  comment: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a8 8 0 0 1-12 7l-5 1 1-5a8 8 0 1 1 16-3z"/></svg>,
  share: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8M16 6l-4-4-4 4M12 2v14"/></svg>,
  bookmark: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 3h14v18l-7-5-7 5z"/></svg>,
  flame: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2s4 4 4 8a4 4 0 0 1-8 0c0-1 .5-2 1-3 0 2 1 3 2 3 0-3-1-5 1-8z"/></svg>,
  sparkle: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/></svg>,
  bolt: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4 14h6l-2 8 10-13h-6z"/></svg>,
  map: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/></svg>,
  star: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 .5-5.5 4.5L18 22l-6-4-6 4 1.5-8L2 9.5 9 9z"/></svg>,
  camera: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8a2 2 0 0 1 2-2h2l2-2h6l2 2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="4"/></svg>,
  bell: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10 21a2 2 0 0 0 4 0"/></svg>,
  settings: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>,
  flash: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2 4 14h6l-2 8 10-13h-6z"/></svg>,
  flip: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 0 1 14-7m4 7a9 9 0 0 1-14 7M17 3v4h4M7 21v-4H3"/></svg>,
  medal: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="15" r="6"/><path d="m7 2 5 7 5-7"/></svg>,
  crown: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 8l4 8h12l4-8-6 4-4-8-4 8z"/></svg>,
  chef: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 13a4 4 0 1 1 5-6 4 4 0 0 1 7 3 4 4 0 0 1-2 7H8a4 4 0 0 1-2-4zM6 17h12v4H6z"/></svg>,
  target: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>,
  streak: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2 4 6 6 6 11a6 6 0 0 1-12 0c0-3 2-4 2-7 1 2 2 3 3 3 0-2-1-4 1-7z"/></svg>,
  x: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M6 6l12 12M18 6 6 18"/></svg>,
  filter: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 5h18M6 12h12M10 19h4"/></svg>,
  sliders: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="8" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="8" cy="18" r="2"/><path d="M3 6h3M10 6h11M3 12h3M18 12h3M3 18h3M10 18h11"/></svg>,
};

const AppBar = () => (
  <div className="appbar">
    <div className="appbar-brand">
      <span className="appbar-brand-mark"><svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2c2.2 3.6 6 5.5 6 10.2 0 3.4-2.7 6.1-6 6.1s-6-2.7-6-6.1c0-2.6 1.4-3.7 2.4-5.6.3 1.5 1.1 2.4 2 2.4 0-2 .8-3.8 1.6-7zM7 21h10v1.2H7z"/></svg></span>
      <span className="appbar-brand-name">SmackCheck</span>
    </div>
    <div className="appbar-actions">
      <div className="appbar-icon">{Icon.bell}</div>
      <div className="appbar-avatar"></div>
    </div>
  </div>
);

export const FeedScreen = () => (
  <>
    <StatusBar />
    <AppBar />
    <div className="greeting">
      <div className="hi">Good morning, Alex 👋</div>
      <div className="ask">Find your <span className="em">next meal</span>.</div>
    </div>
    <div className="search-bar">{Icon.search}<span className="ph">Search dishes, restaurants…</span></div>
    <div className="chips-row">
      <div className="app-chip active">All</div>
      <div className="app-chip">Near me</div>
      <div className="app-chip">Trending</div>
      <div className="app-chip">$$$</div>
    </div>
    <div className="app-sec-head"><span className="t">Following</span></div>
    <div className="stories">
      <div className="story"><div className="story-avatar"><div className="inner" style={{ background: "linear-gradient(135deg,#d4a4a5,#642223)" }}></div></div><div className="story-name">maya</div></div>
      <div className="story"><div className="story-avatar"><div className="inner" style={{ background: "linear-gradient(135deg,#d4a872,#8a5a1d)" }}></div></div><div className="story-name">marcus</div></div>
      <div className="story"><div className="story-avatar"><div className="inner" style={{ background: "linear-gradient(135deg,#c89890,#6a4040)" }}></div></div><div className="story-name">aria</div></div>
      <div className="story"><div className="story-avatar"><div className="inner" style={{ background: "linear-gradient(135deg,#b8aab0,#5a4045)" }}></div></div><div className="story-name">jay</div></div>
      <div className="story"><div className="story-avatar add"><div className="inner">+</div></div><div className="story-name">Add</div></div>
    </div>
    <div className="app-sec-head"><span className="t">Top dishes today</span><span className="a">See all</span></div>
    <div className="dish-row">
      <div className="dish-card">
        <div className="dish-img a"><div className="score-pill"><span className="star">★</span>9.4</div></div>
        <div className="dish-info"><div className="name">Truffle Tagliatelle</div><div className="meta">Cucina Marco · Italian</div></div>
      </div>
      <div className="dish-card">
        <div className="dish-img b"><div className="score-pill"><span className="star">★</span>9.1</div></div>
        <div className="dish-info"><div className="name">Hokkaido Scallops</div><div className="meta">Nami Sushi · Japanese</div></div>
      </div>
    </div>
    <div className="promo-card">
      <div className="num">8</div>
      <div className="lbl">restaurants<br/>near you</div>
      <div className="cta">Explore</div>
    </div>
  </>
);

export const CaptureScreen = () => (
  <>
    <StatusBar dark />
    <div className="capture-bg">
      <div className="capture-photo"></div>
      <div className="capture-overlay"></div>
      <div className="capture-topbar">
        <div className="pill"><span className="dot"></span> Dish recognized</div>
        <div className="x">{Icon.x}</div>
      </div>
      <div className="capture-result">
        <div className="cr-tag-row">
          <span className="cr-tag">AI · Verified</span>
          <span className="cr-tag gold">Editor&apos;s pick</span>
        </div>
        <div className="cr-head">
          <div>
            <div className="cr-dish">Truffle Tagliatelle</div>
            <div className="cr-cuisine">Italian · Fresh pasta · Cucina Marco</div>
          </div>
          <div>
            <div className="cr-score">9.2</div>
            <div className="cr-score-lbl">Smack</div>
          </div>
        </div>
        <div className="cr-bars">
          <div className="cr-bar"><span className="cr-bar-lbl">Plating</span><div className="cr-bar-track"><div className="cr-bar-fill" style={{ width: "94%" }}></div></div><span className="cr-bar-val">9.4</span></div>
          <div className="cr-bar"><span className="cr-bar-lbl">Craft</span><div className="cr-bar-track"><div className="cr-bar-fill" style={{ width: "88%" }}></div></div><span className="cr-bar-val">8.8</span></div>
          <div className="cr-bar"><span className="cr-bar-lbl">Value</span><div className="cr-bar-track"><div className="cr-bar-fill" style={{ width: "78%" }}></div></div><span className="cr-bar-val">7.8</span></div>
        </div>
        <div className="cr-actions">
          <div className="cr-btn ghost">Edit</div>
          <div className="cr-btn primary">Confirm dish</div>
        </div>
      </div>
      <div className="capture-controls">
        <div className="cap-side-btn">{Icon.flash}</div>
        <div className="shutter"></div>
        <div className="cap-side-btn">{Icon.flip}</div>
      </div>
    </div>
  </>
);

export const LeaderboardScreen = () => (
  <>
    <StatusBar />
    <AppBar />
    <div className="greeting" style={{ paddingBottom: 8 }}>
      <div className="ask">Top <span className="em">tasters</span> this week</div>
    </div>
    <div className="lb-tabs-row">
      <div className="app-chip">Global</div>
      <div className="app-chip active">Friends</div>
      <div className="app-chip">City</div>
    </div>
    <div className="podium">
      <div className="podium-spot">
        <div className="podium-avatar s"><div className="inner"></div></div>
        <div className="podium-name">marcus</div>
        <div className="podium-xp">42.1k XP</div>
        <div className="podium-rank" style={{ color: "#A8A29E" }}>2</div>
      </div>
      <div className="podium-spot" style={{ marginBottom: 8 }}>
        <div className="podium-avatar"><div className="podium-crown">{Icon.crown}</div><div className="inner"></div></div>
        <div className="podium-name">maya</div>
        <div className="podium-xp">48.6k XP</div>
        <div className="podium-rank">1</div>
      </div>
      <div className="podium-spot">
        <div className="podium-avatar b"><div className="inner"></div></div>
        <div className="podium-name">jay.k</div>
        <div className="podium-xp">39.0k XP</div>
        <div className="podium-rank" style={{ color: "#BB5B5C" }}>3</div>
      </div>
    </div>
    <div className="lb-list">
      <div className="lb-row"><div className="lb-rank">4</div><div className="lb-avatar"></div><div className="lb-info"><div className="lb-name">aria_eats</div><div className="lb-sub">12 smacks this week</div></div><div className="lb-xp">36.4k</div></div>
      <div className="lb-row me"><div className="lb-rank">5</div><div className="lb-avatar" style={{ background: "linear-gradient(135deg,#d4a4a5,#3d1418)" }}></div><div className="lb-info"><div className="lb-name">you</div><div className="lb-sub">+2 from last week ↑</div></div><div className="lb-xp">34.2k</div></div>
      <div className="lb-row"><div className="lb-rank">6</div><div className="lb-avatar" style={{ background: "linear-gradient(135deg,#c89890,#6a4040)" }}></div><div className="lb-info"><div className="lb-name">sofia.r</div><div className="lb-sub">9 smacks this week</div></div><div className="lb-xp">31.8k</div></div>
      <div className="lb-row"><div className="lb-rank">7</div><div className="lb-avatar" style={{ background: "linear-gradient(135deg,#b8aab0,#5a4045)" }}></div><div className="lb-info"><div className="lb-name">danny.t</div><div className="lb-sub">7 smacks this week</div></div><div className="lb-xp">28.9k</div></div>
    </div>
  </>
);

export const MapScreen = () => (
  <>
    <StatusBar />
    <div className="map-screen">
      <div className="map-bg"></div>
      <div className="map-grid"></div>
      <div className="map-road" style={{ left: 0, right: 0, top: "55%", height: 6 }}></div>
      <div className="map-road" style={{ top: 0, bottom: 0, left: "40%", width: 5 }}></div>
      <div className="map-road" style={{ top: "30%", bottom: 0, left: "72%", width: 4, transform: "rotate(8deg)", transformOrigin: "top left" }}></div>
      <div className="map-search">{Icon.search}<span className="ph">Truffle pasta near me…</span></div>
      <div className="map-pin" style={{ left: "26%", top: "42%" }}><div className="map-pin-dot"></div><div className="map-pin-score">9.2</div></div>
      <div className="map-pin" style={{ left: "55%", top: "35%" }}><div className="map-pin-dot"></div><div className="map-pin-score">8.7</div></div>
      <div className="map-pin" style={{ left: "42%", top: "62%" }}><div className="map-pin-dot" style={{ background: "#C68A3E", boxShadow: "0 8px 18px -4px rgba(198,138,62,.5),0 0 0 2px rgba(255,255,255,.85)" }}></div><div className="map-pin-score">9.4</div></div>
      <div className="map-pin" style={{ left: "78%", top: "55%" }}><div className="map-pin-dot"></div><div className="map-pin-score">8.1</div></div>
      <div className="map-pin" style={{ left: "18%", top: "72%" }}><div className="map-pin-dot"></div><div className="map-pin-score">7.9</div></div>
      <div className="map-card-pop">
        <div className="map-card-img"></div>
        <div className="map-card-info">
          <div className="map-card-name">Birrieria Catarina</div>
          <div className="map-card-cui">Mexican · 0.4 mi · 124 smacks</div>
        </div>
        <div className="map-card-score">9.4</div>
      </div>
    </div>
  </>
);

export const ProfileScreen = () => (
  <>
    <StatusBar />
    <div className="appbar">
      <div className="appbar-brand"><span className="appbar-brand-mark"><svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2c2.2 3.6 6 5.5 6 10.2 0 3.4-2.7 6.1-6 6.1s-6-2.7-6-6.1c0-2.6 1.4-3.7 2.4-5.6.3 1.5 1.1 2.4 2 2.4 0-2 .8-3.8 1.6-7zM7 21h10v1.2H7z"/></svg></span><span className="appbar-brand-name">Profile</span></div>
      <div className="appbar-actions"><div className="appbar-icon">{Icon.share}</div><div className="appbar-icon">{Icon.settings}</div></div>
    </div>
    <div className="profile-hero">
      <div className="profile-avatar"><div className="inner"></div></div>
      <div>
        <div className="profile-name">Alex Chen</div>
        <div className="profile-handle">@alex.eats · NYC</div>
      </div>
      <div className="profile-bio">Hunting the best birria in the five boroughs. 🌮</div>
    </div>
    <div className="profile-stats">
      <div className="pstat"><div className="v">312</div><div className="l">SMACKS</div></div>
      <div className="pstat"><div className="v">14.2k</div><div className="l">FOLLOWERS</div></div>
      <div className="pstat"><div className="v">28</div><div className="l">DAY STREAK</div></div>
    </div>
    <div className="xp-block">
      <div className="xp-row"><span className="xp-level">Level 18 · Connoisseur</span><span className="xp-next">34,200 / 40,000 XP</span></div>
      <div className="xp-bar"><div className="xp-fill"></div></div>
    </div>
    <div className="app-sec-head" style={{ paddingTop: 0 }}><span className="t">Badges</span><span className="a">17 of 64</span></div>
    <div className="badge-grid">
      <div className="badge brand">{Icon.flame}</div>
      <div className="badge gold">{Icon.crown}</div>
      <div className="badge gold">{Icon.medal}</div>
      <div className="badge brand">{Icon.streak}</div>
      <div className="badge">{Icon.chef}</div>
      <div className="badge">{Icon.target}</div>
      <div className="badge locked">{Icon.star}</div>
      <div className="badge locked">{Icon.trophy}</div>
    </div>
  </>
);

export default function Phone({ children, size, style }: { children: React.ReactNode; size?: "lg" | "sm"; style?: React.CSSProperties }) {
  const cls = size === "lg" ? " phone-lg" : size === "sm" ? " phone-sm" : "";
  return (
    <div className={`phone${cls}`} style={style}>
      <div className="phone-screen">
        <div className="phone-notch"></div>
        {children}
      </div>
    </div>
  );
}
