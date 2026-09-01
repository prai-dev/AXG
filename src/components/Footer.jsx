import { Link } from "react-router-dom";
import { LinkedinLogo, XLogo } from "@phosphor-icons/react";
import "./Footer.css";

/* the accounts AlloyX actually links to */
const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/alloyx-limited/", Icon: LinkedinLogo },
  { label: "X", href: "https://x.com/AlloyX_Limited", Icon: XLogo },
];

// [label, href, external?]
const COLS = [
  ["Digital Tokens", [["Stablecoin", "/issuance"], ["Payment", "/payment"], ["Ferion", "/ferion"], ["RYT", "/ryt"], ["Gold — Aurox", "https://www.aurox.finance", true], ["Card", "/card"], ["Stablecoin Network", "/network"]]],
  ["Company", [["About Us", "/aboutus"], ["Pressroom", "/pressroom"], ["Partners", "/partner"], ["Contact Us", "/contactus"], ["Investors", "https://ir.alloyx.com/", true], ["Blockchain Institute", "/abpi"]]],
  ["Legal", [["Privacy Policy", "/privacypolicy"], ["Privacy Policy (HK)", "/privacypolicy-hk"], ["SOC 2 Compliant", "/soc2compliant"], ["Fiat Currencies", "/fiat-currencies-and-countries"]]],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <p className="footer__logo">AXG</p>
          <p className="muted footer__tag">Mobilizing tokens, 24/7. A leading regulated global stablecoin super platform — bridging traditional finance and blockchain.</p>
          <p className="footer__badge"><span>NASDAQ</span> AXG</p>
          <div className="footer__social">
            {SOCIAL.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                 className="footer__soc" aria-label={label} title={label}>
                <Icon size={19} weight="fill" />
              </a>
            ))}
          </div>
        </div>
        {COLS.map(([title, links]) => (
          <nav key={title} className="footer__col">
            <p className="footer__coltitle">{title}</p>
            {links.map(([label, to, ext]) => (
              ext
                ? <a key={label} href={to} target="_blank" rel="noopener noreferrer">{label}</a>
                : <Link key={label} to={to}>{label}</Link>
            ))}
          </nav>
        ))}
      </div>
      <div className="wrap footer__base">
        <span>Copyright © 2026 AlloyX.</span>
        <span className="footer__mono">Global · 24/7 · On-chain</span>
      </div>
    </footer>
  );
}
