import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import {
  IconStablecoin, IconNetwork, IconYield, IconGold, IconIssuance, IconPayment, IconCard,
  IconAgent, IconSpark, IconInstitution, IconStrategy, IconCompany, IconPress,
  IconPartners, IconContact, IconMarkets, IconResearch,
} from "./icons";
import "./Nav.css";

// Ondo-style mega menu: grouped into categories, each item icon + name + tag + description.
const MENU = [
  {
    label: "Digital Tokens",
    sections: [
      { title: "Assets", items: [
        { label: "Stablecoin", tag: "AX Coin", to: "/issuance", Icon: IconStablecoin, desc: "Regulated fiat-backed AXUSD & AXBHD." },
        { label: "RYT", to: "/ryt", Icon: IconYield, desc: "Tokenized money-market fund, daily yield." },
        { label: "Gold", tag: "Aurox", to: "https://www.aurox.finance", ext: true, Icon: IconGold, desc: "Institutional-grade tokenized gold." },
      ]},
      { title: "Platforms & Protocols", items: [
        { label: "Stablecoin Network", to: "/network", Icon: IconNetwork, desc: "The connected network for on-chain money." },
        { label: "Ferion", to: "/ferion", Icon: IconIssuance, desc: "End-to-end stablecoin issuance." },
      ]},
      { title: "Infrastructure", items: [
        { label: "Payment", to: "/payment", Icon: IconPayment, desc: "Embedded wallets & payment rails." },
        { label: "Card", to: "/card", Icon: IconCard, desc: "Spend on-chain money anywhere." },
      ]},
    ],
    feature: { title: "AX Coin", desc: "A regulated global stablecoin — licensed by the Central Bank of Bahrain.", to: "/issuance", cta: "Discover AX Coin", Icon: IconStablecoin },
  },
  {
    label: "AI Tokens",
    sections: [
      { title: "AI-native finance", items: [
        { label: "AgentX", to: "/agentx", Icon: IconAgent, desc: "AI-native financial agents & intelligence." },
        { label: "Kovar", to: "https://kovar.ai/", ext: true, Icon: IconSpark, desc: "AI infrastructure." },
        { label: "Tokenthon", to: "https://tokenthon.org/", ext: true, Icon: IconSpark, desc: "Tokenization, built with AI." },
      ]},
    ],
    feature: { title: "AgentX", desc: "Next-generation institutional intelligence, on-chain.", to: "/agentx", cta: "Explore AgentX", Icon: IconAgent },
  },
  {
    label: "Investment",
    sections: [
      { title: "Invest", items: [
        { label: "Solomon", to: "/solomon", Icon: IconInstitution, desc: "Regulated investment platform." },
        { label: "Visit Solomon", to: "https://solomonwin.com.hk", ext: true, Icon: ArrowUpRight, desc: "solomonwin.com.hk" },
        { label: "Scion", to: "/scion", Icon: IconStrategy, desc: "Structured investment solutions." },
      ]},
    ],
    feature: { title: "Solomon", desc: "Access regulated, tokenized investment opportunities.", to: "/solomon", cta: "Discover Solomon", Icon: IconInstitution },
  },
  {
    label: "Our Company",
    sections: [
      { title: "Company", items: [
        { label: "About Us", to: "/aboutus", Icon: IconCompany, desc: "Who we are." },
        { label: "Partners", to: "/partner", Icon: IconPartners, desc: "Our ecosystem partners." },
        { label: "Blockchain Institute", to: "/abpi", Icon: IconResearch, desc: "Research & education." },
      ]},
      { title: "Connect", items: [
        { label: "Pressroom", to: "/pressroom", Icon: IconPress, desc: "Latest news & releases." },
        { label: "Contact Us", to: "/contactus", Icon: IconContact, desc: "Get in touch." },
        { label: "Investors", to: "https://ir.alloyx.com/", ext: true, Icon: IconMarkets, desc: "Investor relations." },
      ]},
    ],
    feature: { title: "See the latest", desc: "AlloyX news, milestones and announcements from the newsroom.", to: "/pressroom", cta: "Visit Pressroom", Icon: IconPress },
  },
];

/* clicking the logo always returns to the top of the homepage */
function Wordmark({ onClick }) {
  const toTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: false });
    else window.scrollTo({ top: 0, behavior: "smooth" });
    onClick && onClick();
  };
  return (
    <Link to="/" className="brand" aria-label="AXG home" onClick={toTop}>
      <img src="/brand/axg-mark.png" alt="" aria-hidden="true" className="brand__img brand__mark" width="256" height="256" />
      <img src="/brand/axg-word.png" alt="AXG" className="brand__img brand__word" width="414" height="133" />
    </Link>
  );
}

function ItemLink({ item, onClick, onHover }) {
  const Icon = item.Icon || ArrowUpRight;
  const inner = (
    <>
      <span className="mega__ico"><Icon size={18} /></span>
      <span className="mega__text">
        <span className="mega__name">
          {item.label}
          {item.tag && <span className="mega__tag">{item.tag}</span>}
          {item.ext && <ArrowUpRight size={12} className="mega__ext" />}
        </span>
        {item.desc && <span className="mega__desc">{item.desc}</span>}
      </span>
    </>
  );
  const hover = () => onHover && onHover(item);
  return item.ext
    ? <a className="mega__item" href={item.to} target="_blank" rel="noopener noreferrer" onClick={onClick} onMouseEnter={hover}>{inner}</a>
    : <Link className="mega__item" to={item.to} onClick={onClick} onMouseEnter={hover}>{inner}</Link>;
}

export default function Nav() {
  const { pathname } = useLocation();
  const heroPage = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [shown, setShown] = useState(null);
  const [hoverItem, setHoverItem] = useState(null); // right panel follows the hovered item

  const pill = scrolled || active !== null;         // dark floating pill
  const lightText = pill || (heroPage && !scrolled); // white text on dark contexts

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (active !== null) { setShown(active); return; }
    const t = setTimeout(() => setShown(null), 260);
    return () => clearTimeout(t);
  }, [active]);
  useEffect(() => { setHoverItem(null); }, [active]); // reset right panel when group changes/closes

  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  useEffect(() => { setActive(null); setOpen(false); }, [pathname]);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const group = shown !== null ? MENU[shown] : null;

  return (
    <>
      <header
        className={`nav ${pill ? "nav--pill" : ""} ${lightText ? "nav--lighttext" : ""} ${active !== null ? "nav--menu" : ""}`}
        onMouseLeave={() => setActive(null)}
      >
        <div className="nav__inner">
          <Wordmark />
          <nav className="nav__menu" aria-label="Primary">
            {MENU.map((g, i) => (
              <div key={g.label} className="nav__group" onMouseEnter={() => setActive(i)}>
                <button className={`nav__trigger ${active === i ? "is-active" : ""}`} aria-expanded={active === i}>
                  {g.label}
                </button>
              </div>
            ))}
          </nav>
          <div className="nav__right">
            <Link to="/contactus" className="nav__cta">Contact</Link>
            <button className="nav__burger" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={22} /></button>
          </div>
        </div>

        <div className={`mega ${active !== null ? "mega--open" : ""}`} onMouseEnter={() => active === null && setActive(shown)}>
          <div className="mega__panel">
            {group && (
              <div className={`mega__wrap ${group.feature ? "" : "mega__wrap--nofeat"}`}>
                <div className="mega__cols">
                  {group.sections.map((sec) => (
                    <div key={sec.title} className="mega__section">
                      <p className="mega__sectitle">{sec.title}</p>
                      {sec.items.map((it) => <ItemLink key={it.label} item={it} onClick={() => setActive(null)} onHover={setHoverItem} />)}
                    </div>
                  ))}
                </div>
                {group.feature && (() => {
                  const f = hoverItem
                    ? { title: hoverItem.label, desc: hoverItem.desc, to: hoverItem.to, ext: hoverItem.ext, cta: `Discover ${hoverItem.label}`, Icon: hoverItem.Icon }
                    : group.feature;
                  const FIcon = f.Icon || ArrowUpRight;
                  return (
                    <div className="mega__feature">
                      <span className="mega__feature-glow" aria-hidden="true" />
                      <div className="mega__feature-inner" key={f.title}>
                        <span className="mega__feature-visual"><FIcon size={40} strokeWidth={1.5} /></span>
                        <span className="mega__feature-eyebrow">{hoverItem ? "Explore" : "Featured"}</span>
                        <span className="mega__feature-title">{f.title}</span>
                        <span className="mega__feature-desc">{f.desc}</span>
                        {f.ext
                          ? <a href={f.to} target="_blank" rel="noopener noreferrer" className="mega__feature-cta" onClick={() => setActive(null)}>{f.cta}<ArrowUpRight size={15} /></a>
                          : <Link to={f.to} className="mega__feature-cta" onClick={() => setActive(null)}>{f.cta}<ArrowUpRight size={15} /></Link>}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </header>

      <div className={`nav__scrim ${active !== null ? "nav__scrim--on" : ""}`} onClick={() => setActive(null)} aria-hidden="true" />

      {/* mobile drawer */}
      <div className={`drawer ${open ? "drawer--open" : ""}`}>
        <div className="drawer__top">
          <Wordmark onClick={() => setOpen(false)} />
          <button onClick={() => setOpen(false)} aria-label="Close menu"><X size={24} /></button>
        </div>
        <div className="drawer__body">
          {MENU.map((g) => (
            <div key={g.label} className="drawer__group">
              <p className="drawer__label">{g.label}</p>
              {g.sections.flatMap((s) => s.items).map((it) => (
                it.ext
                  ? <a key={it.label} href={it.to} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>{it.label}</a>
                  : <Link key={it.label} to={it.to} onClick={() => setOpen(false)}>{it.label}</Link>
              ))}
            </div>
          ))}
          <Link to="/contactus" className="btn btn-gold" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      </div>
    </>
  );
}
