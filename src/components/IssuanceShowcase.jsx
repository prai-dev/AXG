import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import "./IssuanceShowcase.css";

/* real Ferion figures + asset cases from alloyx.com/ferion */
const STATS = [
  ["10+", "Asset classes tokenized"],
  ["$50M+", "Total value tokenized"],
  ["20+", "Ecosystem partners"],
];

const ASSETS = [
  ["RYT Money Market Fund", "AAAmf USD Digital MMF · perpetual"],
  ["Physical Gold", "From 0.001 oz · Brink\u2019s vaulting · perpetual"],
  ["Carbon Credit", "Verifiable, inclusive carbon markets"],
  ["KN Private Credit Fund", "Cash-loan receivables · 6 months"],
  ["PX Gold Mine Supply-Chain", "Receivables from overseas mines · 12 months"],
  ["WK Bond Fund", "Offshore USD & LGFV bonds · perpetual"],
  ["QSE New Energy (PV)", "Malaysian solar cash flows · 60 months"],
  ["Bricopia Life Sciences", "Cord-blood stem cells on-chain"],
  ["US Stock Tokenization", "Nasdaq-listed equities · 24/7 trading"],
  ["Private Equity", "With conditional buyback mechanisms"],
];

const STEPS = [
  ["Submit your assets", "Documentation, valuations and tokenization parameters."],
  ["Compliance & verification", "Automated screening, KYC and due diligence."],
  ["Mint & deploy", "One-click contracts, instant deployment, live liquidity."],
];

export default function IssuanceShowcase() {
  const secRef = useRef(null);
  const [step, setStep] = useState(0);

  /* the pipeline advances as the section crosses the viewport */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setStep(2); return; }
    const sec = secRef.current;
    if (!sec) return;
    let raf = 0;
    const apply = () => {
      raf = 0;
      const vh = window.innerHeight || 1;
      const r = sec.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height * 0.75)));
      setStep(Math.min(STEPS.length - 1, Math.floor(p * STEPS.length)));
      sec.style.setProperty("--flow", p.toFixed(3));
    };
    const sch = () => { if (!raf) raf = requestAnimationFrame(apply); };
    apply();
    window.addEventListener("scroll", sch, { passive: true });
    window.addEventListener("resize", sch);
    return () => { window.removeEventListener("scroll", sch); window.removeEventListener("resize", sch); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="iss" ref={secRef}>
      <div className="wrapx iss__grid">
        <div className="iss__copy">
          <span className="iss__eyebrow">Ferion · Issuance engine</span>
          <h2 className="iss__title">Launch your<br />Ferion</h2>
          <p className="iss__dek">
            Asset tokenization, end to end — from submission and compliance review
            through to minting and on-chain deployment.
          </p>

          <div className="iss__stats">
            {STATS.map(([v, l]) => (
              <div key={l} className="iss__stat">
                <b className="serifnum">{v}</b><span>{l}</span>
              </div>
            ))}
          </div>

          <ol className="iss__steps">
            {STEPS.map(([h, p], i) => (
              <li key={h} className={`iss__step ${i <= step ? "is-on" : ""}`}>
                <span className="iss__stepno">{String(i + 1).padStart(2, "0")}</span>
                <div><h3>{h}</h3><p>{p}</p></div>
              </li>
            ))}
          </ol>

          <div className="iss__cta">
            <a href="https://www.ferion.io" target="_blank" rel="noopener noreferrer" className="iss__btn iss__btn--solid">
              Launch Ferion <ArrowUpRight size={16} />
            </a>
            <Link to="/ferion" className="iss__btn iss__btn--ghost">See all cases</Link>
          </div>
        </div>

        {/* live column of assets already on-chain */}
        <Reveal className="iss__panel">
          <div className="iss__panelhead">
            <span>Assets already on-chain</span>
            <span className="iss__live"><i />Live</span>
          </div>
          <div className="iss__list">
            {ASSETS.map(([h, p], i) => (
              <div className="iss__asset" key={h} style={{ "--i": i }}>
                <span className="iss__assetno">{String(i + 1).padStart(2, "0")}</span>
                <div className="iss__assettext">
                  <span className="iss__assetname">{h}</span>
                  <span className="iss__assetmeta">{p}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
