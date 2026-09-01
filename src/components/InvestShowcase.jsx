import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { IconInstitution, IconStrategy, IconAudit } from "./icons";
import "./InvestShowcase.css";

/* Solomon JFZ (Asia) Holdings — licences and memberships, verbatim from alloyx.com/solomon */
const LICENCES = [
  ["Type 1", "Dealing in securities"],
  ["Type 4", "Advising on securities"],
  ["Type 6", "Advising on corporate finance"],
  ["Type 9", "Asset management"],
];
const MEMBERSHIPS = ["SEHK Exchange Participant", "HKSCC Direct Clearing", "China Connect Participant"];

/* Scion product mix, from alloyx.com/scion */
const SCION = [
  "High-Frequency Crypto Quantitative Hedge Fund",
  "Crypto Treasury Fund",
  "Market-Neutral Crypto Quantitative Fund",
  "On-Chain Yield Product (RYT)",
];

export default function InvestShowcase() {
  const secRef = useRef(null);
  const cardsRef = useRef(null);

  /* licence tiles rise and settle as the section enters */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sec = secRef.current, wrap = cardsRef.current;
    if (!sec || !wrap) return;
    const tiles = [...wrap.querySelectorAll("[data-i]")];
    let raf = 0;
    const apply = () => {
      raf = 0;
      const vh = window.innerHeight || 1;
      const r = sec.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (vh * 0.92 - r.top) / (r.height * 0.7)));
      tiles.forEach((n) => {
        const i = +n.dataset.i;
        const t = Math.min(1, Math.max(0, p * tiles.length - i));
        n.style.transform = `translateY(${((1 - t) * 26).toFixed(1)}px)`;
        n.style.opacity = (0.25 + t * 0.75).toFixed(2);
      });
    };
    const sch = () => { if (!raf) raf = requestAnimationFrame(apply); };
    apply();
    window.addEventListener("scroll", sch, { passive: true });
    window.addEventListener("resize", sch);
    return () => { window.removeEventListener("scroll", sch); window.removeEventListener("resize", sch); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="inv" ref={secRef}>
      <div className="wrapx inv__grid">
        {/* licence board */}
        <div className="inv__board" ref={cardsRef}>
          <div className="inv__boardhead">
            <span className="inv__seal"><IconAudit size={22} /></span>
            <div>
              <span className="inv__boardtitle">SFC licensed</span>
              <span className="inv__boardsub">CE No. BIF175 · Hong Kong</span>
            </div>
          </div>

          <div className="inv__tiles">
            {LICENCES.map(([code, what], i) => (
              <div className="inv__tile" data-i={i} key={code}>
                <span className="inv__code">{code}</span>
                <span className="inv__what">{what}</span>
              </div>
            ))}
          </div>

          <div className="inv__members">
            {MEMBERSHIPS.map((m) => <span key={m} className="inv__member">{m}</span>)}
          </div>
        </div>

        <div className="inv__copy">
          <span className="inv__eyebrow">Investment · Solomon &amp; Scion</span>
          <h2 className="inv__title">A licensed investment<br />bank, taken on-chain</h2>
          <p className="inv__dek">
            Solomon JFZ (Asia) Holdings is licensed by Hong Kong's SFC and has secured
            approval to uplift its licences to include virtual-asset services — among a
            select group of firms able to serve both traditional and digital assets.
          </p>

          <div className="inv__scion">
            <span className="inv__scionlabel"><IconStrategy size={16} /> Scion product mix</span>
            <ul>
              {SCION.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>

          <div className="inv__cta">
            <Link to="/solomon" className="inv__btn inv__btn--solid">
              <IconInstitution size={16} /> Discover Solomon
            </Link>
            <Link to="/scion" className="inv__btn inv__btn--ghost">Scion <ArrowUpRight size={15} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
