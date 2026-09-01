import { useRef, useEffect, useState } from "react";
import { SpeakerSimpleHigh, SpeakerSimpleSlash } from "@phosphor-icons/react";
import "./FilmBand.css";

/*
  The seam between the light product board and the dark payments section:
  a full-bleed film whose top fades to the board's white and whose bottom
  fades to the payments section's ink, so neither edge is ever visible.
*/
export default function FilmBand() {
  const secRef = useRef(null);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  /* only run the film while it is on screen — no wasted decode off-screen */
  useEffect(() => {
    const sec = secRef.current, v = videoRef.current;
    if (!sec || !v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else { v.pause(); if (!v.muted) { v.muted = true; setMuted(true); } }
      },
      { threshold: 0.15 }
    );
    io.observe(sec);
    return () => io.disconnect();
  }, []);

  /* the film settles out of a slow push-in as the band crosses the viewport */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sec = secRef.current;
    if (!sec) return;
    let raf = 0;
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

    const apply = () => {
      raf = 0;
      const vh = window.innerHeight || 1;
      const r = sec.getBoundingClientRect();
      // 0 while entering from below -> 1 once centred
      const p = clamp((vh - r.top) / (vh * 0.85 + r.height * 0.35), 0, 1);
      const e = 1 - Math.pow(1 - p, 3);
      sec.style.setProperty("--open", e.toFixed(4));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(apply); };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) v.play().catch(() => {});
    setMuted(v.muted);
  };

  return (
    <section className="film" ref={secRef} aria-label="Global payments without boundaries">
      <video
        className="film__video"
        ref={videoRef}
        src="/media/axg-film.mp4"
        poster="/media/axg-film-poster.jpg"
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="film__scrim" aria-hidden="true" />

      <div className="film__stage">
        <button
          type="button"
          className="film__sound"
          onClick={toggleSound}
          aria-pressed={!muted}
          aria-label={muted ? "Unmute the film" : "Mute the film"}
        >
          {muted ? <SpeakerSimpleSlash size={17} weight="duotone" /> : <SpeakerSimpleHigh size={17} weight="duotone" />}
          <span>{muted ? "Sound off" : "Sound on"}</span>
        </button>

        <div className="film__copy">
          <span className="film__eyebrow">AXG · Global rails</span>
          <h2 className="film__title">Global payments without boundaries.</h2>
          <p className="film__dek">Stablecoin and local payment rails, 7X24 service availability.</p>
        </div>
      </div>
    </section>
  );
}
