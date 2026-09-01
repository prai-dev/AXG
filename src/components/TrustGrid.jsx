import Reveal from "./Reveal";
import "./TrustGrid.css";

/* the real four principles from the alloyx.com homepage (verbatim) */
const ITEMS = [
  ["Built for Regulatory Adherence", "Operates in one of the world's most stringent regulatory environments."],
  ["Top-Tier Compliance", "Top-tier compliance with KYC, AML, and KYT support."],
  ["Global Expertise", "A global team with deep regional expertise across every market we serve."],
  ["Fully Comprehensive Digital Financial Solution", "Fully regulated, end-to-end digital finance solution."],
];

export default function TrustGrid() {
  return (
    <section className="trust">
      <div className="wrapx trust__inner">
        <div className="trust__head">
          <span className="trust__eyebrow">Why AlloyX</span>
          <h2 className="trust__title">Bridging traditional<br />finance and blockchain</h2>
          <p className="trust__dek">Unifying TradFi and blockchains in a single platform.</p>
        </div>

        <div className="trust__list">
          {ITEMS.map(([t, d], i) => (
            <Reveal key={t} className="trust__item" delay={i * 0.05}>
              <span className="trust__no">{String(i + 1).padStart(2, "0")}</span>
              <div className="trust__body">
                <h3 className="trust__name">{t}</h3>
                <p className="trust__desc">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
