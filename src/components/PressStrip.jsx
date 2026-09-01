import Reveal from "./Reveal";
import "./PressStrip.css";

/* outlets that have covered AXG — each links to the piece we can point at */
const OUTLETS = [
  { name: "Forbes", url: "https://www.forbes.com/sites/boazsobrado/2026/08/30/ai-agents-are-getting-wallets-the-compliance-layer-is-catching-up/" },
  { name: "Barchart", url: "https://www.barchart.com/story/news/4325246/solowin-has-bahrain-s-first-stablecoin-license-the-coin-comes-next" },
  { name: "CoinDesk" },
  { name: "Yahoo Finance" },
  { name: "Nasdaq" },
];

export default function PressStrip() {
  return (
    <section className="ps">
      <div className="wrapx ps__inner">
        <Reveal className="ps__label">As featured in</Reveal>
        <div className="ps__list">
          {OUTLETS.map((o, i) => (
            <Reveal key={o.name} delay={i * 0.05}>
              {o.url
                ? <a className="ps__item" href={o.url} target="_blank" rel="noopener noreferrer">{o.name}</a>
                : <span className="ps__item ps__item--plain">{o.name}</span>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
