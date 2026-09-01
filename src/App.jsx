import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import useLenis from "./lib/useLenis";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductsBoard from "./pages/ProductsBoard";
import Placeholder from "./pages/Placeholder";
import {
  RytPage, NetworkPage, FerionPage, RwaPage,
  PaymentPage, CardPage, IssuancePage, AgentxPage,
} from "./pages/ProductPages";
import {
  AboutPage, PartnerPage, ContactPage, AbpiPage,
  SolomonPage, ScionPage, Soc2Page, ShowcasePage, ZhuProfilePage,
} from "./pages/CompanyPages";
import Pressroom from "./pages/Pressroom";
import BlogPost from "./pages/BlogPost";
import { FiatCurrenciesPage, PrivacyPage } from "./pages/MiscPages";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  useLenis();
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products-board" element={<main><ProductsBoard /></main>} />
        <Route path="/ryt" element={<RytPage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/ferion" element={<FerionPage />} />
        <Route path="/rwa" element={<RwaPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/issuance" element={<IssuancePage />} />
        <Route path="/agentx" element={<AgentxPage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/partner" element={<PartnerPage />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/abpi" element={<AbpiPage />} />
        <Route path="/solomon" element={<SolomonPage />} />
        <Route path="/scion" element={<ScionPage />} />
        <Route path="/soc2compliant" element={<Soc2Page />} />
        <Route path="/showcase" element={<ShowcasePage />} />
        <Route path="/drthomaszhuprofile" element={<ZhuProfilePage />} />
        <Route path="/pressroom" element={<Pressroom />} />
        <Route path="/post/:slug" element={<BlogPost />} />
        <Route path="/fiat-currencies-and-countries" element={<FiatCurrenciesPage />} />
        <Route path="/privacypolicy" element={<PrivacyPage slug="privacypolicy" />} />
        <Route path="/privacypolicy-hk" element={<PrivacyPage slug="privacypolicy-hk" />} />
        <Route path="*" element={<Placeholder />} />
      </Routes>
      <Footer />
    </>
  );
}
