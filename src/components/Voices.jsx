import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./Voices.css";

/* Verbatim quotes from the AlloyX newsroom — each links to its release. */
const QUOTES = [
  {
    q: "Partnering with Standard Chartered has been instrumental in bringing this landmark custody solution to life. Their deep experience in custody, risk management and regulatory engagement has given us the confidence to move forward in a complex and fast-evolving market.",
    who: "Dr. Thomas Zhu",
    role: "Co-Founder & CEO, AXG",
    org: "Standard Chartered custody",
    slug: "axg-partners-with-standard-chartered-for-hong-kong-s-first-g-sib-institutional-crypto-custody",
    img: "/blog/axg-partners-with-standard-chartered-for-hong-kong-s-first-g-sib-institutional-crypto-custody.jpg",
  },
  {
    q: "It is a pleasure to cooperate with AXG. The AGENPAY project is closely aligned with SC Ventures' innovation layout. We look forward to leveraging the resource advantages of both parties to promote the commercialization of AI payment technology and empower the high-quality upgrading of global financial services.",
    who: "Alexandre Deschatres",
    role: "SC Ventures",
    org: "AGENPAY · AI payments",
    slug: "solowin-holdings-axg-signs-agreement-with-sc-ventures-to-incubate-ai-payment-project-agenpay",
    img: "/blog/solowin-holdings-axg-signs-agreement-with-sc-ventures-to-incubate-ai-payment-project-agenpay.jpg",
  },
  {
    q: "Regulated stablecoins represent an important step in the evolution of digital finance by combining the efficiency of blockchain technology. As adoption continues to grow, robust Sharia governance will play a critical role in fostering confidence among financial institutions seeking compliant digital asset solutions.",
    who: "Yasser S. Dahlawi",
    role: "Founder & CEO, Shariyah Review Bureau",
    org: "First global Sharia certificate",
    slug: "ax-coin-a-subsidiary-of-solowin-holdings-axg-receives-first-global-sharia-certification-for-axbh",
    img: "/blog/ax-coin-a-subsidiary-of-solowin-holdings-axg-receives-first-global-sharia-certification-for-axbh.jpg",
  },
];

export default function Voices() {
  const [i, setI] = useState(0);
  const v = QUOTES[i];
  return (
    <section className="voices">
      {QUOTES.map((item, n) => (
        <div key={item.slug} className={`voices__bg ${n === i ? "is-on" : ""}`}
          style={{ backgroundImage: `url(${item.img})` }} aria-hidden="true" />
      ))}
      <div className="voices__scrim" aria-hidden="true" />

      <div className="wrapx voices__inner">
        <span className="voices__eyebrow">Backed by the best</span>

        <blockquote className="voices__quote" key={v.slug}>“{v.q}”</blockquote>

        <div className="voices__foot">
          <div className="voices__who">
            <span className="voices__name">{v.who}</span>
            <span className="voices__role">{v.role}</span>
          </div>
          <Link to={`/post/${v.slug}`} className="voices__link">
            {v.org} <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="voices__dots">
          {QUOTES.map((item, n) => (
            <button key={item.slug} onClick={() => setI(n)}
              className={`voices__dot ${n === i ? "is-on" : ""}`} aria-label={item.who} />
          ))}
        </div>
      </div>
    </section>
  );
}
