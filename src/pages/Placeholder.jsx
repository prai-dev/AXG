import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TITLES = {
  "/network": "Stablecoin Network", "/payment": "Payment", "/ferion": "Ferion",
  "/ryt": "RYT — Real Yield Token", "/rwa": "Aurox — Tokenized Gold / RWA",
  "/card": "Card", "/issuance": "Issuance", "/agentx": "AgentX",
  "/solomon": "Solomon", "/scion": "Scion", "/aboutus": "About Us",
  "/pressroom": "Pressroom", "/partner": "Partners", "/contactus": "Contact Us",
  "/abpi": "Blockchain Institute", "/privacypolicy": "Privacy Policy",
  "/privacypolicy-hk": "Privacy Policy (HK)", "/soc2compliant": "SOC 2 Compliant",
};

export default function Placeholder() {
  const { pathname } = useLocation();
  const title = TITLES[pathname] || "Page";
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "140px 24px 80px", textAlign: "center" }}>
      <div>
        <span className="eyebrow" style={{ justifyContent: "center" }}>Coming in the next phase</span>
        <h1 style={{ fontSize: "var(--step-3)", margin: "1.2rem 0" }}>{title}</h1>
        <p className="muted" style={{ maxWidth: "44ch", margin: "0 auto 2rem" }}>
          This page will be rebuilt in the same light-editorial system as the homepage, with its original content preserved.
        </p>
        <Link to="/" className="btn btn-ghost"><ArrowLeft size={16} /> Back home</Link>
      </div>
    </main>
  );
}
