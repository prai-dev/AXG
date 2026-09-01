import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import posts from "../content/posts.json";
import "./LatestNews.css";

function categoryOf(title = "") {
  const t = title.toLowerCase();
  if (/partner|partnership|collaborat|joins|alliance|mou\b/.test(t)) return "Partnership";
  if (/bahrain|licen|regulat|compliance|approv/.test(t)) return "Regulatory";
  if (/aurox|gold/.test(t)) return "Aurox";
  if (/\bryt\b|yield|money-market|fund/.test(t)) return "RYT";
  if (/nasdaq|solowin|opening bell|listing|merger|acquisi|valuation/.test(t)) return "Corporate";
  return "Newsroom";
}
const clean = (s = "") => s.replace(/^\s*(Updated:.*?\d\s*(days?|hours?|minutes?)\s*ago\.?\s*)/i, "").trim();

/* verified external coverage — links open on the publisher's site */
const PRESS = [
  {
    slug: "forbes-ai-agents-wallets",
    source: "Forbes",
    title: "AI Agents Are Getting Wallets. The Compliance Layer Is Catching Up",
    date: "Aug 30, 2026",
    excerpt: "Boaz Sobrado on how Solowin Holdings (AXG) is building the compliance layer — a Know-Your-Agent engine, the AGENPAY project with SC Ventures and a Bahrain-licensed stablecoin subsidiary — so autonomous agents can transact inside regulated finance.",
    url: "https://www.forbes.com/sites/boazsobrado/2026/08/30/ai-agents-are-getting-wallets-the-compliance-layer-is-catching-up/",
    external: true,
  },
  {
    slug: "barchart-bahrain-first-stablecoin-licence",
    source: "Barchart",
    title: "Solowin Has Bahrain's First Stablecoin License. The Coin Comes Next.",
    date: "Aug 28, 2026",
    excerpt: "AX Coin Bahrain B.S.C. (c) was licensed by the Central Bank of Bahrain on June 3 to carry out stablecoin issuer activities — the first granted under that regulator's stablecoin framework.",
    url: "https://www.barchart.com/story/news/4325246/solowin-has-bahrain-s-first-stablecoin-license-the-coin-comes-next",
    external: true,
  },
];

/*
  Newsroom posts that carry a milestone worth leading with: the raw release lead
  is replaced by a tighter line, and the artwork runs monochrome so the card sits
  in the same register as the press cards above.
*/
const FEATURED = {
  "solowin-holdings-nasdaq-axg-announces-ai-infrastructure-expansion-with-100-mw-high-performance-co": {
    cat: "AI infrastructure",
    panel: { big: "100 MW", label: "High-performance computing target" },
    excerpt:
      "AXG Digital, the company's new U.S. division founded in Utah, takes AXG into AI and high-performance computing — data-centre capacity for hyperscalers, cloud providers and AI developers, on top of the KOVAR AI gateway launched in February 2026.",
  },
  "honorary-consul-of-bahrain-in-hong-kong-china-visits-solowin-holdings-axg-headquarters": {
    cat: "Regulatory",
    panel: { big: "Bahrain", label: "Consular visit · Islamic finance" },
    excerpt:
      "The Honorary Consul of the Kingdom of Bahrain and his delegation visited AXG headquarters for talks on stablecoins in Islamic finance. AX Coin remains the first and only issuer licensed under the Central Bank of Bahrain's stablecoin framework.",
  },
  "axg-celebrates-dual-milestones-10-year-anniversary-and-10-000-followers-on-linkedin": {
    cat: "Milestone",
    mono: true,
    excerpt:
      "Ten years on from its founding in 2016, AXG passed 10,000 followers on LinkedIn — a platform now serving over 1 million active users across 90+ countries on two pillars: Digital Asset Tokens and AI Tokens.",
  },
};

const ITEMS = [
  ...PRESS,
  ...posts.slice(0, 3).map((p) => ({ ...p, ...(FEATURED[p.slug] || {}) })),
];   // press first, then our newsroom
const N = ITEMS.length;
const C = 2 * Math.PI * 5.25;         // ring circumference (r = 5.25)
const GAP = 8;
const stripFor = () => (typeof window !== "undefined" && window.innerWidth <= 768 ? 26 : 48);

/* three copies of the list, so a column always sits on both sides and the rail
   can keep travelling one way; the middle copy is the live one */
const RAIL = [...ITEMS, ...ITEMS, ...ITEMS];

export default function LatestNews() {
  const [idx, setIdx] = useState(N);     // rail position of the open card
  const [animate, setAnimate] = useState(true);
  const viewRef = useRef(null);
  const [cardW, setCardW] = useState(0);
  const [strip, setStrip] = useState(stripFor);

  useEffect(() => {
    const measure = () => {
      const v = viewRef.current;
      if (!v) return;
      const cs = getComputedStyle(v);
      const s = stripFor();
      const inner = v.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      setStrip(s);
      setCardW(Math.max(200, inner - (s + GAP) * 2));   // one column stays visible each side
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* once the rail leaves the middle copy, jump back a list length with no
     transition — the view is identical, so the loop is seamless */
  const onRailEnd = (e) => {
    if (e.propertyName !== "transform") return;
    if (idx >= 2 * N || idx < N) {
      const wrapped = (((idx - N) % N) + N) % N + N;
      setAnimate(false);
      setIdx(wrapped);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    }
  };

  const go = (to) => { setAnimate(true); setIdx(to); };
  const next = () => go(idx + 1);
  const prev = () => go(idx - 1);

  return (
    <section className="latest">
      <div className="wrapx">
        <h2 className="latest__title">See the Latest <span>from AlloyX</span></h2>
      </div>

      <div className="latest__viewport" ref={viewRef}>
        <div
          className={`latest__track ${animate ? "" : "is-instant"}`}
          style={{ transform: `translateX(${-(idx - 1) * (strip + GAP)}px)` }}
          onTransitionEnd={onRailEnd}
        >
          {RAIL.map((p, i) => {
            const isActive = i === idx;
            return (
              <article
                key={i}
                className={`slot ${isActive ? "is-active" : ""}`}
                style={{ width: isActive ? `${cardW}px` : `${strip}px` }}
                onClick={isActive ? undefined : () => go(i)}
              >
                <div className="slot__inner" style={{ width: `${cardW}px` }}>
                  <div className={`ncard__media ${p.external || p.panel ? "ncard__media--press" : ""} ${p.mono ? "ncard__media--mono" : ""}`}>
                    {p.external ? (
                      <span className="ncard__outlet">{p.source}</span>
                    ) : p.panel ? (
                      <>
                        <span className="ncard__outlet">{p.panel.big}</span>
                        <span className="ncard__panellabel">{p.panel.label}</span>
                      </>
                    ) : (
                      <img src={p.img} alt="" loading="lazy" />
                    )}
                  </div>

                  <div className="ncard__body">
                    <div className="ncard__meta">
                      <span className="ncard__cat">{p.external ? p.source : (p.cat || categoryOf(p.title))}</span>
                      <span className="ncard__dot">•</span>
                      <span className="ncard__date">{p.date}</span>
                    </div>
                    <h3 className="ncard__title">{p.title}</h3>
                    {p.excerpt && <p className="ncard__desc">{clean(p.excerpt)}</p>}
                    {p.external
                      ? <a href={p.url} target="_blank" rel="noopener noreferrer" className="ncard__more">Read on {p.source}</a>
                      : <Link to={`/post/${p.slug}`} className="ncard__more">Read More</Link>}
                  </div>

                  {isActive && (
                    <svg className="ncard__ring" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                      <circle cx="6" cy="6" r="5.25" fill="none" stroke="#B1B1B1" strokeWidth="1.5" opacity="0.15" />
                      <circle key={idx} className="progress-circle" cx="6" cy="6" r="5.25" fill="none"
                        stroke="#B1B1B1" strokeWidth="1.5" opacity="0.9" strokeDasharray={C}
                        onAnimationEnd={next} />
                    </svg>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <button className="latest__sr" onClick={prev}>Previous article</button>
      <button className="latest__sr" onClick={next}>Next article</button>
    </section>
  );
}
