import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS, CHIPS } from "../content/products";
import Reveal from "../components/Reveal";
import "./ProductsBoard.css";

/* ---- the same chart vocabulary as the bento, drawn at panel scale ---- */
function Spark({ pts, accent = "#677FE3" }) {
  const W = 320, H = 92, pad = 6;
  const max = Math.max(...pts), min = Math.min(...pts);
  const dots = pts.map((v, i) => [
    pad + (i / (pts.length - 1)) * (W - pad * 2),
    H - pad - ((v - min) / (max - min || 1)) * (H - pad * 2),
  ]);
  return (
    <svg className="pb__chart" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
      {[0.33, 0.66].map((g) => <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} className="pb__grid" />)}
      {dots.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="2.6" fill={accent} />)}
    </svg>
  );
}

function Line({ pts, accent = "#677FE3" }) {
  const W = 320, H = 92, pad = 8;
  const max = Math.max(...pts), min = Math.min(...pts);
  const x = (i) => pad + (i / (pts.length - 1)) * (W - pad * 2);
  const y = (v) => H - pad - ((v - min) / (max - min || 1)) * (H - pad * 2);
  const d = pts.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const id = `pbg-${accent.slice(1)}`;
  return (
    <svg className="pb__chart" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={accent} stopOpacity="0.3" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.33, 0.66].map((g) => <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} className="pb__grid" />)}
      <path d={`${d} L${x(pts.length - 1)},${H} L${x(0)},${H} Z`} fill={`url(#${id})`} />
      <path d={d} fill="none" stroke={accent} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={x(pts.length - 1)} cy={y(pts[pts.length - 1])} r="3.2" fill={accent} />
    </svg>
  );
}

function Bars({ vals }) {
  return (
    <svg className="pb__chart" viewBox="0 0 320 92" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="pbbar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#C7D9F5" /><stop offset="1" stopColor="#4E79C7" />
        </linearGradient>
      </defs>
      {vals.map((v, i) => {
        const w = 46, gap = 14, x = 12 + i * (w + gap), h = (v / 100) * 78;
        return <rect key={i} x={x} y={92 - h} width={w} height={h} rx="6" fill="url(#pbbar)" opacity={0.5 + i * 0.12} />;
      })}
    </svg>
  );
}

function Trend({ pts, accent = "#C6A15B" }) {
  const max = Math.max(...pts), min = Math.min(...pts);
  return (
    <div className="pb__trend" aria-hidden="true">
      {pts.map((v, i) => (
        <i key={i} style={{
          height: `${10 + ((v - min) / (max - min || 1)) * 90}%`,
          background: accent, opacity: 0.3 + (i / pts.length) * 0.7,
        }} />
      ))}
    </div>
  );
}

function Metric({ m }) {
  const numeric = ["spark", "bars", "chips", "line", "delta"].includes(m.type);
  return (
    <div className="pb__metric">
      <span className="pb__mlabel">{m.label}</span>
      {numeric
        ? <span className="pb__mvalue serifnum">{m.value}</span>
        : <span className="pb__mfact">{m.value}</span>}

      {m.type === "spark" && <Spark pts={m.data} />}
      {m.type === "line" && <Line pts={m.data} accent={m.accent} />}
      {m.type === "bars" && <Bars vals={m.data} />}
      {m.type === "delta" && <Trend pts={m.data} accent={m.accent} />}
      {m.type === "chips" && (
        <div className="pb__chips">{CHIPS.map((c) => <span key={c} className="pb__chip">{c}</span>)}</div>
      )}
      {m.type === "chains" && (
        <div className="pb__chains">
          {m.data.map((n) => <img key={n.name} src={n.icon} alt={n.name} title={n.name} loading="lazy" />)}
        </div>
      )}
      {m.note && <span className="pb__mnote">{m.note}</span>}
    </div>
  );
}

export default function ProductsBoard({ inline = false }) {
  return (
    <section className={`pb ${inline ? "pb--inline" : ""}`}>
      <div className="pb__wrap">
        <Reveal className="pb__head">
          <span className="pb__eyebrow">Digital Tokens · Nasdaq: AXG</span>
          {inline
            ? <h2 className="pb__title">Stablecoins, tokenized yield &amp; gold.</h2>
            : <h1 className="pb__title">Stablecoins, tokenized yield &amp; gold.</h1>}
          <p className="pb__dek">Regulated on-chain products — mobilizing tokens 24/7.</p>
        </Reveal>

        <div className="pb__grid">
          {PRODUCTS.map((p, i) => {
            const Icon = p.Icon;
            return (
              <Reveal key={p.key} delay={i * 0.08} className={`pb__card pb__card--${p.key}`}>
                <div className="pb__glow" aria-hidden="true" />

                <header className="pb__top">
                  <span className="pb__ico"><Icon size={24} /></span>
                  <span className="pb__tag">{p.tag}</span>
                </header>

                <h2 className="pb__name">{p.name}</h2>
                <p className="pb__desc">{p.desc}</p>
                {p.pill && <span className="pb__pill">{p.pill}</span>}

                <div className="pb__metrics">
                  {p.metrics.map((m) => <Metric key={m.label} m={m} />)}
                </div>

                <Link to={p.to} className="pb__cta">
                  Discover {p.name} <ArrowUpRight size={16} />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
