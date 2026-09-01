import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS, CHIPS } from "../content/products";
import "./HeroBento.css";

function DottedLine({ pts }) {
  const W = 460, H = 150, pad = 8;
  const max = Math.max(...pts), min = Math.min(...pts);
  const dots = pts.map((v, i) => {
    const x = pad + (i / (pts.length - 1)) * (W - pad * 2);
    const y = H - pad - ((v - min) / (max - min || 1)) * (H - pad * 2);
    return [x, y];
  });
  return (
    <svg className="spark" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
      {[0.2, 0.4, 0.6, 0.8].map((g) => <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} className="spark__grid" />)}
      {dots.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3.1" className="spark__dot" />)}
    </svg>
  );
}
/* smooth area line for real market series */
function LineChart({ pts, accent = "#677FE3" }) {
  const W = 460, H = 150, pad = 10;
  const max = Math.max(...pts), min = Math.min(...pts);
  const x = (i) => pad + (i / (pts.length - 1)) * (W - pad * 2);
  const y = (v) => H - pad - ((v - min) / (max - min || 1)) * (H - pad * 2);
  const d = pts.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const area = `${d} L${x(pts.length - 1).toFixed(1)},${H} L${x(0).toFixed(1)},${H} Z`;
  return (
    <svg className="spark" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={accent} stopOpacity="0.28" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((g) => <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} className="spark__grid" />)}
      <path d={area} fill="url(#lg)" />
      <path d={d} fill="none" stroke={accent} strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={x(pts.length - 1)} cy={y(pts[pts.length - 1])} r="3.6" fill={accent} />
    </svg>
  );
}

/* compact bar trend for a period change */
function MiniTrend({ pts, accent = "#C6A15B" }) {
  const max = Math.max(...pts), min = Math.min(...pts);
  return (
    <div className="minitrend" aria-hidden="true">
      {pts.map((v, i) => (
        <i key={i} style={{
          height: `${8 + ((v - min) / (max - min || 1)) * 92}%`,
          background: accent,
          opacity: 0.28 + (i / pts.length) * 0.72,
        }} />
      ))}
    </div>
  );
}

function Bars({ vals }) {
  return (
    <svg className="bars" viewBox="0 0 320 150" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="barg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#C7D9F5" /><stop offset="1" stopColor="#4E79C7" />
        </linearGradient>
      </defs>
      {vals.map((v, i) => {
        const w = 46, gap = 14, x = 10 + i * (w + gap), h = (v / 100) * 130, y = 150 - h;
        return <rect key={i} className="bar" x={x} y={y} width={w} height={h} rx="7" fill="url(#barg)" opacity={0.55 + i * 0.11} />;
      })}
    </svg>
  );
}

function MetricCard({ m, cls, badge }) {
  const numeric = ["spark", "bars", "chips", "line", "delta"].includes(m.type);
  return (
    <div className={`stat ${cls} ${numeric ? "" : "stat--factcard"}`}>
      <div className="stat__top"><span className="stat__label">{m.label}</span>{badge && <span className="badge">{badge}</span>}</div>
      {numeric
        ? <div className="stat__num serifnum">{m.value}</div>
        : <div className="stat__fact">{m.value}</div>}
      {m.note && <span className="stat__note">{m.note}</span>}
      {m.type === "spark" && <DottedLine pts={m.data} />}
      {m.type === "line" && <LineChart pts={m.data} accent={m.accent} />}
      {m.type === "delta" && <MiniTrend pts={m.data} accent={m.accent} />}
      {m.type === "bars" && <Bars vals={m.data} />}
      {m.type === "chips" && <div className="chips">{CHIPS.map((c) => <span key={c} className="chip">{c}</span>)}</div>}
      {m.type === "chains" && (
        <div className="netlist">
          {m.data.map((n) => (
            <span key={n.name} className="net" title={n.name}>
              <img className="net__ico" src={n.icon} alt={n.name} loading="lazy" />
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function HeroBento() {
  const pinRef = useRef(null);
  const [step, setStep] = useState(0);
  const [pinned, setPinned] = useState(true);
  const stepRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setPinned(false); return; }
    const pin = pinRef.current;
    if (!pin) return;
    let raf = 0;
    const clamp01 = (v) => Math.min(1, Math.max(0, v));
    const easeOut = (t) => 1 - (1 - t) * (1 - t);
    const apply = () => {
      raf = 0;
      const vh = window.innerHeight || 1;
      const total = pin.offsetHeight - vh;
      const rect = pin.getBoundingClientRect();
      const p = clamp01(-rect.top / (total || 1));
      const n = PRODUCTS.length;
      const s = Math.min(n - 1, Math.floor(p * n));
      const within = p * n - s;
      if (s !== stepRef.current) { stepRef.current = s; setStep(s); }
      pin.style.setProperty("--reveal", easeOut(clamp01(within / 0.5)).toFixed(3));
    };
    const sch = () => { if (!raf) raf = requestAnimationFrame(apply); };
    apply();
    window.addEventListener("scroll", sch, { passive: true });
    window.addEventListener("resize", sch);
    return () => { window.removeEventListener("scroll", sch); window.removeEventListener("resize", sch); if (raf) cancelAnimationFrame(raf); };
  }, []);

  const cur = PRODUCTS[step];

  return (
    <section className={`bentowrap ${pinned ? "" : "bentowrap--flat"}`}>
      <div className="wrapx">
        <div className="bento__head">
          <span className="bento__eyebrow">Digital Tokens · Nasdaq: AXG</span>
          <h2 className="bento__title">Stablecoins, tokenized yield &amp; gold.</h2>
          <p className="bento__dek">Regulated on-chain products — mobilizing tokens 24/7.</p>
        </div>
      </div>

      <div className="bento__pin" ref={pinRef}>
        <div className="bento__sticky">
          <div className="wrapx">
            <div className="bento__frame">
              <div className="bento__grid">
                <div className="acc">
                  {PRODUCTS.map((p, i) => {
                    const active = i === step;
                    const Icon = p.Icon;
                    return (
                      <div key={p.key} className={`acc__item ${active ? "is-active" : ""}`}>
                        <div className="acc__head">
                          <span className="acc__name">{p.name}</span>
                          <span className="acc__tag">{p.tag}</span>
                        </div>
                        <div className="acc__body">
                          <div className="acc__inner">
                            <span className="acc__icon"><Icon size={20} /></span>
                            <p className="acc__desc">{p.desc}</p>
                            <div className="acc__foot">
                              <div className="chains">
                                <i className="chain chain--eth">Ξ</i><i className="chain chain--sol">◎</i><i className="chain chain--poly">⬡</i>
                              </div>
                              <Link to={p.to} className="btn-black">Discover {p.name} <ArrowUpRight size={15} /></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <MetricCard m={cur.metrics[0]} cls="stat--tvl" badge={cur.name} />
                <MetricCard m={cur.metrics[1]} cls="stat--reach" />
                <MetricCard m={cur.metrics[2]} cls="stat--users" badge={cur.name} />
              </div>

              <div className="bento__steps" role="tablist" aria-label="Products">
                {PRODUCTS.map((p, i) => (
                  <span key={p.key} className={`sdot ${i === step ? "sdot--on" : ""}`} aria-label={p.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile: each product as its own full card with its own metrics */}
      <div className="bento__mobile wrapx">
        {PRODUCTS.map((p) => {
          const Icon = p.Icon;
          return (
            <div key={p.key} className="mcard">
              <div className="mcard__lead">
                <span className="mcard__ico"><Icon size={20} /></span>
                <div className="mcard__id">
                  <h3 className="mcard__name">{p.name}</h3>
                  <span className="mcard__tag">{p.tag}</span>
                </div>
              </div>
              <p className="mcard__desc">{p.desc}</p>
              <div className="mcard__stats">
                <MetricCard m={p.metrics[0]} cls="mstat mstat--wide" />
                <MetricCard m={p.metrics[1]} cls="mstat" />
                <MetricCard m={p.metrics[2]} cls="mstat" />
              </div>
              <Link to={p.to} className="btn-black">Discover {p.name} <ArrowUpRight size={15} /></Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
