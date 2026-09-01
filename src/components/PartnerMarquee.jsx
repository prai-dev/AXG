import "./PartnerMarquee.css";

/* Real partner logos, taken from the AlloyX partners page. */
const LOGOS = [
  ["Standard Chartered", "/partners/standard-chartered.png"],
  ["Circle", "/partners/circle.webp"],
  ["Solana", "/partners/solana.png"],
  ["Polygon", "/partners/polygon.png"],
  ["Arbitrum", "/partners/arbitrum.png"],
  ["BitGo", "/partners/bitgo.png"],
  ["Gate.io", "/partners/gate-io.png"],
  ["Triple-A", "/partners/triple-a.png"],
  ["Reap", "/partners/reap.png"],
  ["Yellow Card", "/partners/yellow-card.png"],
];

export default function PartnerMarquee({ tone = "dark" }) {
  const row = [...LOGOS, ...LOGOS];
  return (
    <div className={`pm pm--${tone}`} aria-label="Partners">
      <div className="pm__track">
        {row.map(([name, src], i) => (
          <span className="pm__item" key={`${name}-${i}`}>
            <img src={src} alt={name} loading="lazy" />
          </span>
        ))}
      </div>
    </div>
  );
}
