import Reveal from "./Reveal";
import "./Ecosystem.css";

/* Real counterparties and integrations named in the AlloyX newsroom. */
const GROUPS = [
  {
    title: "Banking & custody",
    items: ["Standard Chartered", "Bank of Bahrain and Kuwait", "Singapore Gulf Bank", "Brink's", "Safeheron"],
  },
  {
    title: "Networks",
    items: ["Ethereum", "Polygon", "Solana", "Arbitrum", "Canton Network", "Chainlink"],
  },
  {
    title: "Payments & platforms",
    items: ["Visa", "FOMO Pay", "INFINIOS", "Triple-A", "KuCoin", "Alibaba Taobao Shangou"],
  },
  {
    title: "Innovation & assurance",
    items: ["SC Ventures", "Bahrain Fintech Bay", "Shariyah Review Bureau", "SlowMist", "Beosin", "BitFi"],
  },
];

export default function Ecosystem() {
  return (
    <section className="eco">
      <div className="wrapx">
        <Reveal className="eco__head">
          <span className="eco__eyebrow">Ecosystem</span>
          <h2 className="eco__title">Built with the institutions<br />that move money</h2>
        </Reveal>

        <div className="eco__grid">
          {GROUPS.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.06} className="eco__col">
              <p className="eco__coltitle">{g.title}</p>
              <div className="eco__items">
                {g.items.map((n) => <span key={n} className="eco__item">{n}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
