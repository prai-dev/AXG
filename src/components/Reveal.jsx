import { motion } from "framer-motion";

/** Reveal-on-scroll wrapper. Respects reduced-motion via Framer defaults. */
export default function Reveal({ children, delay = 0, y = 28, className, as = "div" }) {
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </M>
  );
}
