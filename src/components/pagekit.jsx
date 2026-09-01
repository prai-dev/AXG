import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { pickIcon } from "./icons";
import Reveal from "./Reveal";
import "./pagekit.css";

/* Big editorial page hero. Title left, optional aside (stat / note) right. */
export function PageHero({ eyebrow, title, lead, cta, aside, tone = "light" }) {
  return (
    <header className={`phero phero--${tone}`}>
      <div className="wrap phero__grid">
        <div className="phero__main">
          {eyebrow && <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>}
          <Reveal delay={0.05}><h1 className="phero__title">{title}</h1></Reveal>
          {lead && <Reveal delay={0.1}><p className="phero__lead">{lead}</p></Reveal>}
          {cta && (
            <Reveal delay={0.15}>
              <div className="phero__cta">
                {cta.map((c) => c.ext ? (
                  <a key={c.label} href={c.to} target="_blank" rel="noopener noreferrer" className={`btn ${c.ghost ? "btn-ghost" : "btn-gold"}`}>
                    {c.label} <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <Link key={c.label} to={c.to} className={`btn ${c.ghost ? "btn-ghost" : "btn-gold"}`}>
                    {c.label} {!c.ghost && <ArrowRight size={16} />}
                  </Link>
                ))}
              </div>
            </Reveal>
          )}
        </div>
        {aside && <Reveal delay={0.2} className="phero__aside">{aside}</Reveal>}
      </div>
    </header>
  );
}

/* Refined stat row (value + mono label). */
export function StatStrip({ items }) {
  return (
    <section className="pk-sec">
      <div className="wrap">
        <div className="statstrip">
          {items.map((s, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05} className="statstrip__item">
              <b className="text-gold">{s.value}</b>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Signature: left sticky heading, right list with oversized index numbers. */
export function StickyList({ eyebrow, title, intro, items, start = 1 }) {
  return (
    <section className="pk-sec stickylist">
      <div className="wrap stickylist__grid">
        <div className="stickylist__head">
          <div className="stickylist__headinner">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2 className="pk-title">{title}</h2>
            {intro && <p className="pk-lead muted">{intro}</p>}
          </div>
        </div>
        <div className="stickylist__items">
          {items.map((it, i) => (
            <Reveal key={i} className="stickyrow">
              <span className="stickyrow__no">{String(start + i).padStart(2, "0")}</span>
              <div className="stickyrow__body">
                <h3>{it.h}</h3>
                {it.p && <p className="muted">{it.p}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Full-bleed statement line(s). */
export function Statement({ eyebrow, text, cite }) {
  return (
    <section className="pk-sec statement">
      <div className="wrap">
        {eyebrow && <Reveal><span className="eyebrow" style={{ justifyContent: "center" }}>{eyebrow}</span></Reveal>}
        <Reveal delay={0.05}><p className="statement__text">{text}</p></Reveal>
        {cite && <Reveal delay={0.1}><p className="statement__cite">{cite}</p></Reveal>}
      </div>
    </section>
  );
}

/* Numbered process with a connecting spine. */
export function ProcessSteps({ eyebrow, title, steps }) {
  return (
    <section className="pk-sec process">
      <div className="wrap">
        <Reveal className="pk-head">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h2 className="pk-title">{title}</h2>}
        </Reveal>
        <div className="process__grid">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.08} className="pstep">
              <span className="pstep__no">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="pstep__title">{s.h}</h3>
              <ul className="pstep__list">
                {s.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Refined feature cards. */
export function FeatureCards({ eyebrow, title, lead, items, cols = 3 }) {
  return (
    <section className="pk-sec">
      <div className="wrap">
        {(eyebrow || title) && (
          <Reveal className="pk-head pk-head--split">
            <div>
              {eyebrow && <span className="eyebrow">{eyebrow}</span>}
              {title && <h2 className="pk-title">{title}</h2>}
            </div>
            {lead && <p className="pk-lead muted">{lead}</p>}
          </Reveal>
        )}
        <div className="fcards" style={{ "--cols": cols }}>
          {items.map((it, i) => {
            const Icon = pickIcon(it);
            return (
              <Reveal key={i} delay={(i % cols) * 0.05} className="fcard">
                <div className="fcard__top">
                  <span className="fcard__ico"><Icon size={20} /></span>
                  {it.tag && <span className="fcard__tag">{it.tag}</span>}
                </div>
                <h3 className="fcard__title">{it.h}</h3>
                {it.p && <p className="fcard__desc muted">{it.p}</p>}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Editorial data rows (asset cases / tables). */
export function DataRows({ eyebrow, title, rows }) {
  return (
    <section className="pk-sec">
      <div className="wrap">
        <Reveal className="pk-head"><div>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h2 className="pk-title">{title}</h2>}
        </div></Reveal>
        <div className="datarows">
          {rows.map((r, i) => (
            <Reveal key={i} className="datarow">
              <span className="datarow__no">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="datarow__name">
                {r.href
                  ? <a href={r.href} target="_blank" rel="noopener noreferrer" className="datarow__link">{r.h} <ArrowUpRight size={14} /></a>
                  : r.h}
              </h3>
              {r.p && <p className="datarow__meta muted">{r.p}</p>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Horizontal marquee of words. */
export function Marquee({ items, duration = 34 }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track" style={{ animationDuration: `${duration}s` }}>
        {loop.map((t, i) => (
          <span key={i} className="marquee__item">{t}<i>·</i></span>
        ))}
      </div>
    </div>
  );
}

/* Closing CTA band. */
export function CTABand({ eyebrow, title, buttons }) {
  return (
    <section className="pk-sec ctaband">
      <div className="wrap">
        <Reveal className="ctaband__inner">
          {eyebrow && <span className="eyebrow" style={{ justifyContent: "center" }}>{eyebrow}</span>}
          <h2 className="ctaband__title">{title}</h2>
          <div className="ctaband__actions">
            {buttons.map((b) => b.ext ? (
              <a key={b.label} href={b.to} target="_blank" rel="noopener noreferrer" className={`btn ${b.ghost ? "btn-ghost" : "btn-gold"}`}>
                {b.label} <ArrowUpRight size={15} />
              </a>
            ) : (
              <Link key={b.label} to={b.to} className={`btn ${b.ghost ? "btn-ghost" : "btn-gold"}`}>
                {b.label} {!b.ghost && <ArrowRight size={16} />}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Horizontal decade timeline. */
export function Timeline({ eyebrow, title, items }) {
  return (
    <section className="pk-sec">
      <div className="wrap">
        <Reveal className="pk-head">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h2 className="pk-title">{title}</h2>}
        </Reveal>
        <div className="timeline">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.06} className="tl">
              <span className="tl__year text-gold">{it.year}</span>
              <p className="tl__text">{it.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Team grid — name + role tiles. */
export function TeamGrid({ eyebrow, title, intro, people }) {
  return (
    <section className="pk-sec">
      <div className="wrap">
        <Reveal className="pk-head pk-head--split">
          <div>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2 className="pk-title">{title}</h2>}
          </div>
          {intro && <p className="pk-lead muted">{intro}</p>}
        </Reveal>
        <div className="team">
          {people.map((p, i) => {
            const initials = p.name.split(/\s+/).map((w) => w[0]).slice(0, 2).join("");
            return (
              <Reveal key={i} delay={(i % 4) * 0.04} className="member">
                <div className="member__photo">
                  {p.img
                    ? <img src={p.img} alt={p.name} loading="lazy" />
                    : <span className="member__initials" aria-hidden="true">{initials}</span>}
                  <span className="member__mono">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="member__info">
                  <h3 className="member__name">{p.name}</h3>
                  <p className="member__role muted">{p.role}</p>
                  {p.li && (
                    <a className="member__li" href={p.li} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} on LinkedIn`}>
                      LinkedIn <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Long-form prose (article / legal). body = [{t:'h'|'p', x}] */
export function Prose({ body }) {
  return (
    <div className="prose">
      {body.map((b, i) => b.t === "h"
        ? <h2 key={i} className="prose__h">{b.x}</h2>
        : <p key={i} className="prose__p">{b.x}</p>)}
    </div>
  );
}

/* Contact split — talk + locate. */
export function ContactBlock({ email, address }) {
  return (
    <section className="pk-sec">
      <div className="wrap contactblk">
        <Reveal className="contactblk__col">
          <span className="eyebrow">Let's talk</span>
          <h2 className="pk-title">Tell us what<br />you're building.</h2>
          {email && <a href={`mailto:${email}`} className="contactblk__email text-gold">{email}</a>}
        </Reveal>
        <Reveal delay={0.08} className="contactblk__col">
          <span className="eyebrow">Where we locate</span>
          <p className="contactblk__addr">{address}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* Row of pill tags. */
export function TagRow({ items }) {
  return (
    <section className="pk-sec pk-sec--tight">
      <div className="wrap">
        <div className="tagrow">
          {items.map((t, i) => <Reveal key={i} delay={(i % 6) * 0.03} as="span" className="tagpill">{t}</Reveal>)}
        </div>
      </div>
    </section>
  );
}

/* Framed showcase image. */
export function MediaBand({ src, alt = "", caption }) {
  return (
    <section className="pk-sec">
      <div className="wrap">
        <Reveal className="mediaband">
          <img src={src} alt={alt} loading="lazy" />
        </Reveal>
        {caption && <Reveal delay={0.05}><p className="mediaband__cap muted">{caption}</p></Reveal>}
      </div>
    </section>
  );
}
