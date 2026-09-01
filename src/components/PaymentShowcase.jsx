import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { IconPayment, IconCard, IconSwap, IconGlobal } from "./icons";
import "./PaymentShowcase.css";

/* real Payment / Treasure Card capabilities from alloyx.com */
const RAILS = [
  { Icon: IconPayment, h: "Multi-Currency Accounts", p: "Supports major currencies including USD, EUR, GBP, HKD with seamless inflow and outflow." },
  { Icon: IconSwap, h: "Global Transfers", p: "Stablecoin and local payment rails, 7X24 service availability." },
  { Icon: IconGlobal, h: "On/Off Ramp Capabilities", p: "POBO-enabled On/Off Ramp business coverage to facilitate global remittances." },
];
const WALLETS = ["Apple Pay", "Google Pay", "WeChat Pay", "Alipay"];
const CURRENCIES = ["USD", "EUR", "GBP", "HKD"];

export default function PaymentShowcase() {
  const secRef = useRef(null);
  const stackRef = useRef(null);

  /* scroll parallax: each card drifts and tilts at its own rate, plus mouse tilt */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sec = secRef.current, stack = stackRef.current;
    if (!sec || !stack) return;
    const cards = [...stack.querySelectorAll("[data-depth]")];
    let mx = 0, my = 0, raf = 0;
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

    const apply = () => {
      raf = 0;
      const vh = window.innerHeight || 1;
      const r = sec.getBoundingClientRect();
      // -1 (below) → 0 (centred) → 1 (above)
      const p = clamp(((vh - r.top) / (vh + r.height)) * 2 - 1, -1, 1);
      cards.forEach((n) => {
        const d = parseFloat(n.dataset.depth);
        const ty = (-p * 40 * d).toFixed(2);
        const tx = (mx * 14 * d).toFixed(2);     // shift apart, don't rotate into each other
        const rx = (my * 4 * d).toFixed(2);
        const ry = (-mx * 5 * d).toFixed(2);
        const rz = parseFloat(n.dataset.rot || 0) + p * 2 * d;
        n.style.transform =
          `translate3d(${tx}px, ${ty}px, 0) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz.toFixed(2)}deg)`;
      });
    };
    const sch = () => { if (!raf) raf = requestAnimationFrame(apply); };
    const onMove = (e) => {
      const r = stack.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
      sch();
    };
    apply();
    window.addEventListener("scroll", sch, { passive: true });
    window.addEventListener("resize", sch);
    stack.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("scroll", sch);
      window.removeEventListener("resize", sch);
      stack.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="pay" ref={secRef}>
      <div className="pay__glow" aria-hidden="true" />
      <div className="wrapx pay__grid">
        <div className="pay__copy">
          <span className="pay__eyebrow">Payment &amp; Treasure Card</span>
          <h2 className="pay__title">Pay daily consumption<br />with your stablecoin</h2>
          <p className="pay__dek">
            Covers over 200 countries and regions worldwide in card network, compatible
            with Apple Pay, Google Pay, WeChat Pay, Alipay and etc.
          </p>

          <div className="pay__chips">
            {CURRENCIES.map((c) => <span key={c} className="pay__chip">{c}</span>)}
            <span className="pay__chip pay__chip--soft">200+ countries</span>
          </div>

          <div className="pay__wallets">
            {WALLETS.map((w) => <span key={w} className="pay__wallet">{w}</span>)}
          </div>

          <div className="pay__cta">
            <a href="http://alloyx.one" target="_blank" rel="noopener noreferrer" className="pay__btn pay__btn--solid">
              Launch AXONE <ArrowUpRight size={16} />
            </a>
            <Link to="/card" className="pay__btn pay__btn--ghost">Explore the card</Link>
          </div>
        </div>

        {/* card visualisation — parallax stack */}
        <div className="pay__stack" ref={stackRef}>
          <div className="paycard paycard--virtual" data-depth="0.45" data-rot="-9">
            <div className="paycard__sheen" />
            <span className="paycard__kind">Virtual</span>
            <span className="paycard__chip" />
            <span className="paycard__no">•••• •••• •••• 2416</span>
            <span className="paycard__brand">AXG</span>
          </div>

          <div className="paycard paycard--metal" data-depth="1" data-rot="-2">
            <div className="paycard__sheen" />
            <span className="paycard__kind">Treasure Card</span>
            <span className="paycard__chip" />
            <span className="paycard__no">•••• •••• •••• 0824</span>
            <div className="paycard__foot">
              <span className="paycard__label">AXUSD balance</span>
              <span className="paycard__brand">AXG</span>
            </div>
          </div>

          <span className="paybadge paybadge--a">Apple&nbsp;Pay ready</span>
          <span className="paybadge paybadge--b">Instant top-up</span>
        </div>
      </div>

      <div className="wrapx pay__rails">
        {RAILS.map(({ Icon, h, p }) => (
          <div key={h} className="pay__rail">
            <span className="pay__railico"><Icon size={22} /></span>
            <div className="pay__railtext">
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
