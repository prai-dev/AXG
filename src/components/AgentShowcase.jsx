import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { IconAgent, IconSpark, IconMarkets, IconNetwork } from "./icons";
import "./AgentShowcase.css";

/* real AgentX architecture from alloyx.com/agentx */
const LAYERS = [
  { h: "AI & Intelligence Layer", p: "Intelligence, orchestration & decision quality", Icon: IconAgent },
  { h: "Financial Capabilities Layer", p: "Institutional products & differentiated investment", Icon: IconMarkets },
  { h: "Digital Asset Infrastructure", p: "Institutional digital-asset infrastructure", Icon: IconNetwork },
];
const GAINS = ["Faster time to market", "Superior capabilities", "Stronger trust & security", "Wider reach & distribution"];

export default function AgentShowcase() {
  const secRef = useRef(null);
  const stackRef = useRef(null);

  /* the three layers separate and tilt as the section scrolls, plus mouse tilt */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sec = secRef.current, stack = stackRef.current;
    if (!sec || !stack) return;
    const planes = [...stack.querySelectorAll("[data-layer]")];
    let mx = 0, my = 0, raf = 0;
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

    const apply = () => {
      raf = 0;
      const vh = window.innerHeight || 1;
      const r = sec.getBoundingClientRect();
      const p = clamp((vh - r.top) / (vh + r.height), 0, 1);      // 0 → 1 across the section
      const spread = Math.sin(p * Math.PI);                        // peaks while centred
      planes.forEach((n) => {
        const i = +n.dataset.layer;
        const ty = (i - 1) * (26 + spread * 34);
        const tz = -i * 40;
        const rx = 52 - spread * 16 + my * 5;
        const rz = -mx * 6;
        n.style.transform =
          `translate3d(0, ${ty.toFixed(1)}px, ${tz}px) rotateX(${rx.toFixed(1)}deg) rotateZ(${rz.toFixed(1)}deg)`;
        n.style.opacity = (0.55 + spread * 0.45).toFixed(2);
      });
    };
    const sch = () => { if (!raf) raf = requestAnimationFrame(apply); };
    const onMove = (e) => {
      const b = stack.getBoundingClientRect();
      mx = (e.clientX - b.left) / b.width - 0.5;
      my = (e.clientY - b.top) / b.height - 0.5;
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
    <section className="agx" ref={secRef}>
      <div className="agx__glow" aria-hidden="true" />
      <div className="wrapx agx__grid">
        <div className="agx__copy">
          <span className="agx__eyebrow">AI Tokens · AgentX</span>
          <h2 className="agx__title">Rebuilding wealth<br />management for the<br />agentic era</h2>
          <p className="agx__dek">
            An intelligence layer over institutional products and digital-asset
            infrastructure — built for faster time to market and wider distribution.
          </p>

          <div className="agx__gains">
            {GAINS.map((g) => <span key={g} className="agx__gain">{g}</span>)}
          </div>

          <div className="agx__cta">
            <Link to="/agentx" className="agx__btn agx__btn--solid">Explore AgentX <ArrowUpRight size={16} /></Link>
            <a href="https://kovar.ai/" target="_blank" rel="noopener noreferrer" className="agx__btn agx__btn--ghost">
              <IconSpark size={16} /> Kovar
            </a>
            <a href="https://tokenthon.org/" target="_blank" rel="noopener noreferrer" className="agx__btn agx__btn--ghost">
              <IconSpark size={16} /> Tokenthon
            </a>
          </div>
        </div>

        {/* three-layer architecture, tilted in 3D */}
        <div className="agx__stack" ref={stackRef}>
          {LAYERS.map((l, i) => {
            const Icon = l.Icon;
            return (
              <div className="agx__plane" data-layer={i} key={l.h}>
                <span className="agx__planeico"><Icon size={20} /></span>
                <span className="agx__planetext">
                  <b>{l.h}</b>
                  <i>{l.p}</i>
                </span>
                <span className="agx__planeno">{String(i + 1).padStart(2, "0")}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
