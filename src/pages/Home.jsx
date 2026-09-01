import VideoHero from "../components/VideoHero";
import LatestNews from "../components/LatestNews";
import PressStrip from "../components/PressStrip";
// import HeroBento from "../components/HeroBento";   // pinned scroll bento — replaced by ProductsBoard
import ProductsBoard from "./ProductsBoard";
import FilmBand from "../components/FilmBand";
import PaymentShowcase from "../components/PaymentShowcase";
import IssuanceShowcase from "../components/IssuanceShowcase";
import AgentShowcase from "../components/AgentShowcase";
import InvestShowcase from "../components/InvestShowcase";
import TrustGrid from "../components/TrustGrid";
import Voices from "../components/Voices";
import Ecosystem from "../components/Ecosystem";
import CtaBand from "../components/CtaBand";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <VideoHero />
      <PressStrip />
      {/* <HeroBento /> — the pinned scroll-stepper, kept for reference */}
      <ProductsBoard inline />
      <FilmBand />
      <PaymentShowcase />
      <IssuanceShowcase />
      <AgentShowcase />
      <InvestShowcase />
      <TrustGrid />
      <Voices />
      <Ecosystem />
      <LatestNews />
      <CtaBand />
    </main>
  );
}
