import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PartnerMarquee from "./PartnerMarquee";
import "./VideoHero.css";

/**
 * Full-viewport cinematic video hero. On scroll it recedes (the film zooms +
 * fades, the copy drifts up and fades) so the next section rises over it —
 * the "hero → dashboard" transition, driven by scroll like Lenis/Framer sites.
 */
export default function VideoHero() {
  const mediaRef = useRef(null);
  const copyRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const apply = () => {
      raf = 0;
      const vh = window.innerHeight || 1;
      const p = Math.min(1, Math.max(0, window.scrollY / vh)); // 0..1 over first screen
      if (mediaRef.current) {
        mediaRef.current.style.transform = `scale(${(1 + p * 0.12).toFixed(4)})`;
        mediaRef.current.style.filter = `brightness(${(1 - p * 0.5).toFixed(3)})`;
      }
      if (copyRef.current) {
        copyRef.current.style.transform = `translate3d(0, ${(-p * 90).toFixed(1)}px, 0)`;
        copyRef.current.style.opacity = (1 - p * 1.35).toFixed(3);
      }
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(apply); };
    apply();
    window.addEventListener("scroll", schedule, { passive: true });
    return () => { window.removeEventListener("scroll", schedule); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="vhero">
      <div className="vhero__media" ref={mediaRef}>
        <video
          className="vhero__video"
          src="/media/times-square.mp4"
          autoPlay muted loop playsInline preload="auto"
          poster="/hero/f_0001.jpg"
        />
        <div className="vhero__scrim" aria-hidden="true" />
      </div>

      <div className="vhero__copy" ref={copyRef}>
        <span className="vhero__eyebrow">AXG · Nasdaq Listed</span>
        <h1 className="vhero__title">Mobilizing tokens<br /><span>24/7</span></h1>
        <p className="vhero__lead">A leading regulated global stablecoin super platform — bridging traditional finance and blockchain.</p>
        <span className="vhero__cue">Scroll to explore</span>
      </div>

      <div className="vhero__partners"><PartnerMarquee tone="dark" /></div>
    </section>
  );
}
