import Reveal from "../components/Reveal";
import { PageHero, Prose, CTABand } from "../components/pagekit";
import fiat from "../content/fiat.json";
import legal from "../content/legal.json";
import "./misc.css";

export function FiatCurrenciesPage() {
  const total = fiat.regions.reduce((n, r) => n + r.items.length, 0);
  return (
    <main>
      <PageHero
        eyebrow="Coverage"
        title={<>Fiat currencies<br />we support</>}
        lead={`${total} countries and regions across ${fiat.regions.length} continents — one network for global money movement.`}
        cta={[{ label: "The network", to: "/network" }, { label: "Contact Us", to: "/contactus", ghost: true }]}
      />
      {fiat.regions.map((r) => (
        <section key={r.name} className="pk-sec fiat">
          <div className="wrap">
            <Reveal className="fiat__head"><span className="eyebrow">{r.name}</span></Reveal>
            <div className="fiat__grid">
              {r.items.map((c, i) => (
                <Reveal key={i} delay={(i % 6) * 0.02} className="fiat__cell">
                  <span className="fiat__country">{c.country}</span>
                  {c.code && <span className="fiat__code">{c.code}</span>}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}
      <CTABand eyebrow="Global by design" title="Move money, everywhere." buttons={[{ label: "Contact Us", to: "/contactus" }, { label: "Payment", to: "/payment", ghost: true }]} />
    </main>
  );
}

export function PrivacyPage({ slug }) {
  const doc = legal[slug] || legal.privacypolicy;
  return (
    <main className="article">
      <div className="wrap article__head">
        <Reveal><span className="eyebrow">Legal</span></Reveal>
        <Reveal delay={0.05}><h1 className="article__title">{doc.title}</h1></Reveal>
      </div>
      <div className="wrap article__body">
        <Reveal><Prose body={doc.body} /></Reveal>
      </div>
    </main>
  );
}
