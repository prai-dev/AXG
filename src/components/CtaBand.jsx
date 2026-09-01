import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./CtaBand.css";

export default function CtaBand() {
  return (
    <section className="finalcta">
      <div className="finalcta__glow" aria-hidden="true" />
      <div className="wrapx finalcta__inner">
        <span className="finalcta__eyebrow">Nasdaq: AXG</span>
        <h2 className="finalcta__title">Mobilizing tokens,<br />24/7.</h2>
        <p className="finalcta__dek">Together, we don't adapt to the future of finance — we define it.</p>
        <div className="finalcta__actions">
          <Link to="/contactus" className="finalcta__btn finalcta__btn--solid">Contact Us <ArrowRight size={17} /></Link>
          <Link to="/network" className="finalcta__btn finalcta__btn--ghost">Explore</Link>
        </div>
      </div>
    </section>
  );
}
