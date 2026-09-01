import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { PageHero, CTABand } from "../components/pagekit";
import posts from "../content/posts.json";
import "./blog.css";

/* posts.json is already sorted newest-first by ISO datePublished */
export const sortedPosts = posts;

export default function Pressroom() {
  const [lead, ...rest] = sortedPosts;
  return (
    <main>
      <PageHero
        eyebrow="Pressroom"
        title={<>The latest<br />from AlloyX</>}
        lead="Announcements, partnerships and milestones as we mobilize money on-chain."
      />

      <section className="pk-sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {lead && (
            <Reveal>
              <Link to={`/post/${lead.slug}`} className="feature">
                {lead.img && <div className="feature__media"><img src={lead.img} alt="" loading="lazy" /></div>}
                <div className="feature__body">
                  <div className="feature__meta">
                    <span className="blogtag">Latest</span>
                    <span className="feature__date">{lead.date}{lead.readtime ? ` · ${lead.readtime}` : ""}</span>
                  </div>
                  <h2 className="feature__title">{lead.title}</h2>
                  {lead.excerpt && <p className="feature__excerpt muted">{lead.excerpt}</p>}
                  <span className="feature__cta">Read the announcement <ArrowRight size={16} /></span>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="postgrid">
            {rest.map((p) => (
              <Reveal key={p.slug}>
                <Link to={`/post/${p.slug}`} className="pcard">
                  <div className="pcard__media">
                    {p.img ? <img src={p.img} alt="" loading="lazy" /> : <span className="pcard__ph">AXG</span>}
                  </div>
                  <span className="pcard__date">{p.date}{p.readtime ? ` · ${p.readtime}` : ""}</span>
                  <h3 className="pcard__title">{p.title}</h3>
                  <span className="pcard__cta">Read <ArrowUpRight size={15} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand eyebrow="Stay in the loop" title="Follow the mobilization of money." buttons={[{ label: "Contact Us", to: "/contactus" }, { label: "About AXG", to: "/aboutus", ghost: true }]} />
    </main>
  );
}
