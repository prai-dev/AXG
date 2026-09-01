import ContactForm from "../components/ContactForm";
import {
  PageHero, StatStrip, StickyList, Statement, FeatureCards, DataRows,
  Marquee, CTABand, Timeline, TeamGrid, ContactBlock, TagRow,
} from "../components/pagekit";

/* ======================= About ======================= */
export function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About · 10 years of innovation"
        title={<>A decade of building trust and transforming finance</>}
        lead="Building the trusted infrastructure for a tokenized future that empowers the world."
        cta={[{ label: "Meet the team", to: "/aboutus" }, { label: "Pressroom", to: "/pressroom", ghost: true }]}
        aside={<p className="phero__note">AXG is a leading global regulated fintech company. Established in 2016, AXG combines blockchain and artificial-intelligence technologies to operate a fully compliant dual-token digital-economy super platform.</p>}
      />
      <StatStrip items={[
        { value: "24/7", label: "Global operations" },
        { value: "50+", label: "Institutional partners" },
        { value: "100+", label: "Countries & regions" },
        { value: "10+", label: "Years of innovation" },
      ]} />
      <Timeline
        eyebrow="Our journey"
        title="Milestones of a decade"
        items={[
          { year: "2016", text: "AXG was established with a vision to build the next-generation financial infrastructure." },
          { year: "2018", text: "Launched AX COIN and global digital-asset trading services." },
          { year: "2020", text: "Expanded into AI-powered solutions and secured key regulatory licenses." },
          { year: "2022", text: "Introduced AX ONE and an advanced dual-token ecosystem." },
          { year: "2024", text: "Strengthened institutional partnerships across global markets." },
          { year: "2026", text: "Celebrating 10 years of innovation and shaping the future of finance." },
        ]}
      />
      <TeamGrid
        eyebrow="Leadership"
        title="Meet our team"
        intro="Our team brings decades of experience building and leading financial products at high-growth companies, with deep expertise in Web3, fintech, payments and virtual-asset exchanges."
        people={[
          { name: "Thomas Zhu", role: "Co-Founder & CEO", img: "/team/thomas-zhu.png", li: "https://www.linkedin.com/in/tomzhu5/" },
          { name: "Frank Chen", role: "Managing Director · KOVAR CEO", img: "/team/frank-chen.jpg", li: "https://www.linkedin.com/in/haoyangchen/" },
          { name: "Xavier George", role: "AX COIN CEO", img: "/team/xavier-george.jpeg", li: "https://www.linkedin.com/in/xavier-george-51141ab" },
          { name: "Lily Liu", role: "CFO", img: "/team/lily-liu.png", li: "https://www.linkedin.com/in/lily-liu-cfa-720a24304/" },
          { name: "James Xia", role: "AX ONE CEO", img: "/team/james-xia.jpeg", li: "https://www.linkedin.com/in/jun-xia-78a6b357/" },
          { name: "Monica Yao", role: "Head of Sales", img: "/team/monica-yao.png" },
          { name: "Saud Al Heddi", role: "Director · Head of Strategy", img: "/team/saud-al-heddi.jpg" },
          { name: "Angus Chim", role: "Director", img: "/team/angus-chim.png" },
          { name: "Tim Yang", role: "SCION CTO", img: "/team/tim-yang.png", li: "https://www.linkedin.com/in/tim-yang-402bb2381/" },
          { name: "Yunes Abdulkarim", role: "Associate Director · Head of Reserve", img: "/team/yunes-abdulkarim.jpg" },
          { name: "Rony Dethose", role: "Head of Risk", img: "/team/rony-dethose.png" },
          { name: "Jes Guo", role: "SCION COO", img: "/team/jes-guo.jpg" },
          { name: "Dustin Howe", role: "Director", img: "/team/dustin-howe.png", li: "https://www.linkedin.com/in/dustin-k-howe-aa732a38/" },
          { name: "Mohamed Sadiq", role: "Head of Finance", img: "/team/mohamed-sadiq.jpg" },
        ]}
      />
      <CTABand eyebrow="AXG" title="Build the future of money with us." buttons={[{ label: "Contact Us", to: "/contactus" }, { label: "Partners", to: "/partner", ghost: true }]} />
    </main>
  );
}

/* ======================= Partners ======================= */
export function PartnerPage() {
  const partners = ["Standard Chartered", "Visa", "ANZ", "Fireblocks", "Polygon", "Solana", "Chainlink", "BlockSec", "Beosin", "SlowMist", "Safeheron", "Bank of Bahrain & Kuwait", "FOMO Pay", "Bahrain FinTech Bay", "Libeara", "Singapore Gulf Bank", "SC Ventures", "Infinios", "Triple-A", "Canton Network", "Cyberport"];
  return (
    <main>
      <PageHero
        eyebrow="Partners"
        title={<>Building the future<br />together</>}
        lead="We partner with the world's leading banks, custodians, networks and regulators to mobilize money on-chain."
        cta={[{ label: "Become a partner", to: "/contactus" }, { label: "The network", to: "/network", ghost: true }]}
      />
      <Marquee items={partners.slice(0, 11)} />
      <Marquee items={partners.slice(11)} duration={40} />
      <TagRow items={partners} />
      <Statement eyebrow="One ecosystem" text="Together, we define the future of finance." />
      <CTABand eyebrow="Partnership" title="Let's build together." buttons={[{ label: "Contact Us", to: "/contactus" }, { label: "About AXG", to: "/aboutus", ghost: true }]} />
    </main>
  );
}

/* ======================= Contact ======================= */
export function ContactPage() {
  return (
    <main>
      <ContactForm />
      <CTABand eyebrow="Global" title="We're where finance is going." buttons={[{ label: "About AXG", to: "/aboutus" }, { label: "Partners", to: "/partner", ghost: true }]} />
    </main>
  );
}

/* ======================= Blockchain Institute (ABPI) ======================= */
export function AbpiPage() {
  return (
    <main>
      <PageHero
        eyebrow="AXG Blockchain Institute"
        title={<>Research at the<br />edge of finance</>}
        lead="In collaboration with Hong Kong Cyberport and top-tier universities, we explore and deploy cutting-edge blockchain applications for real-world impact."
        cta={[{ label: "Work with us", to: "/contactus" }, { label: "Pressroom", to: "/pressroom", ghost: true }]}
      />
      <FeatureCards
        eyebrow="Focus areas"
        title="From frontier research to real-world deployment"
        items={[
          { h: "RWA & Tokenization", p: "Advancing standards and infrastructure for regulated real-world-asset tokenization." },
          { h: "Stablecoin Infrastructure", p: "Researching compliant, resilient rails for the next generation of digital money." },
          { h: "Applied Blockchain", p: "Deploying cutting-edge blockchain applications with academic and industry partners for real-world impact." },
        ]}
      />
      <CTABand eyebrow="Blockchain Institute" title="Research that ships." buttons={[{ label: "Contact Us", to: "/contactus" }]} />
    </main>
  );
}

/* ======================= Solomon ======================= */
export function SolomonPage() {
  return (
    <main>
      <PageHero
        eyebrow="Investment · Solomon"
        title={<>Solomon</>}
        lead="Licensed securities and virtual-asset services — bridging traditional capital markets and digital assets."
        cta={[{ label: "Visit Solomon", to: "https://solomonwin.com.hk", ext: true }, { label: "Scion", to: "/scion", ghost: true }]}
      />
      <StickyList
        eyebrow="Licensed activities"
        title="A fully regulated bridge to digital assets"
        items={[
          { h: "Dealing in Securities (Type 1, with Virtual Asset Approval)", p: "Execution, brokerage, and distribution of global equities and traditional securities. Includes authorized virtual-asset dealing, distribution of digital-asset products, and a fully compliant fiat-to-virtual-asset gateway (deposit and withdrawal)." },
          { h: "Advising on Securities (Type 4, with Virtual Asset Approval)", p: "Professional investment advice, institutional market research, and strategic recommendations covering traditional equities, structured products, and virtual assets." },
          { h: "Advising on Corporate Finance (Type 6)", p: "Comprehensive investment-banking advisory — IPOs, capital-market placements, mergers and acquisitions (M&A), and corporate-finance structuring." },
          { h: "Asset Management (Type 9, with Virtual Asset Approval)", p: "Establishment and management of investment funds and discretionary client accounts. SFC-authorized to manage portfolios with up to 100% allocation in virtual assets." },
        ]}
      />
      <CTABand eyebrow="Solomon" title="Institutional access, on-chain." buttons={[{ label: "Contact Us", to: "/contactus" }, { label: "Scion", to: "/scion", ghost: true }]} />
    </main>
  );
}

/* ======================= Scion ======================= */
export function ScionPage() {
  return (
    <main>
      <PageHero
        eyebrow="Investment · Scion"
        title={<>Scion</>}
        lead="Digital-asset management capabilities — from distribution and strategy to quantitative funds and on-chain yield."
        cta={[{ label: "Talk to Scion", to: "/contactus" }, { label: "Solomon", to: "/solomon", ghost: true }]}
      />
      <FeatureCards
        eyebrow="Capabilities"
        title="Digital-asset management, end to end"
        items={[
          { tag: "Distribution", h: "Distribution Network", p: "A broad distribution network with strategy formulation and robo-advisory." },
          { tag: "Quant", h: "High-Frequency Crypto Quant Hedge Fund", p: "High-frequency, high-liquidity crypto quantitative strategies." },
          { tag: "Treasury", h: "Crypto Treasury Fund", p: "Treasury management across Bitcoin, stablecoins and TMMF." },
          { tag: "Market-Neutral", h: "Market-Neutral Crypto Quant Fund", p: "Market-neutral quantitative strategies for consistent returns." },
          { tag: "Liquidity", h: "Market Making", p: "Market making across Bitcoin, stablecoins, TMMF and other digital assets." },
          { tag: "Yield", h: "On-Chain Yield Product (RYT)", p: "High-yield, high-liquidity on-chain yield via the Real Yield Token." },
        ]}
      />
      <TagRow items={["High Liquidity", "High-Yield", "Bitcoin", "Stablecoins", "TMMF", "Market Making", "Robo-Advisory"]} />
      <CTABand eyebrow="Scion" title="Alpha, engineered on-chain." buttons={[{ label: "Contact Us", to: "/contactus" }, { label: "Solomon", to: "/solomon", ghost: true }]} />
    </main>
  );
}

/* ======================= SOC 2 ======================= */
export function Soc2Page() {
  return (
    <main>
      <PageHero
        eyebrow="Trust & Security"
        title={<>SOC 2<br />Compliant</>}
        lead="Independently audited controls across security, availability, confidentiality and privacy."
        cta={[{ label: "Request the report", to: "/contactus", ghost: true }]}
      />
      <FeatureCards
        cols={2}
        items={[
          { h: "Security", p: "Protection against unauthorized access." },
          { h: "Availability", p: "Our system is reliable and accessible." },
          { h: "Confidentiality", p: "Your data is kept strictly confidential." },
          { h: "Privacy", p: "We handle personal information responsibly." },
        ]}
      />
      <Statement eyebrow="Report access" text="Our SOC 2 Type 1 report is available under a standard NDA." cite="Contact your AXG representative · security@alloyx.com" />
      <CTABand eyebrow="SOC 2" title="Built to be trusted." buttons={[{ label: "Contact Us", to: "/contactus" }]} />
    </main>
  );
}

/* ======================= Showcase (RYT) ======================= */
export function ShowcasePage() {
  return (
    <main>
      <PageHero
        eyebrow="Showcase · RYT"
        title={<>Real Yield<br />Token</>}
        lead="A tokenized fund of a USD Money Market Fund — real yield, on-chain, 24/7."
        cta={[{ label: "Visit RYT Finance", to: "https://ryt.finance", ext: true }, { label: "Learn More", to: "https://ryt.finance/", ext: true, ghost: true }]}
        aside={
          <ul className="pk-notelist">
            <li>A tokenized fund of USD Money Market Fund</li>
            <li>Accessible to web3 users 24/7</li>
            <li>Real yield bearing</li>
            <li>Global clients access <sup>*</sup></li>
            <li className="pk-note">*Certain jurisdiction restrictions apply, please refer to disclaimer for details</li>
          </ul>
        }
      />
      <StickyList
        eyebrow="How it works"
        title="Simplifying tokenized-fund investment and maximizing yields"
        intro="AlloyX offers a single, unified solution with seamless integration of all major DeFi protocols. Eliminate the complexity of integrating individual protocols using AlloyX's universal interface."
        items={[
          { h: "Diversify and Optimize Yields", p: "Expand your stablecoin earning experience to maximize yield opportunities across all market conditions." },
          { h: "Transparent and On-Chain Operations", p: "Manage all fees, deposits, withdrawals and rewards entirely on-chain, ensuring full transparency and auditability." },
          { h: "Enhanced Security and User Experience", p: "Protect users from web hacks and scams with a superior UX and native on-chain integration directly within AlloyX's platform." },
        ]}
      />
      <CTABand eyebrow="RYT" title="Real yield, tokenized." buttons={[{ label: "Visit RYT Finance", to: "https://ryt.finance", ext: true }]} />
    </main>
  );
}

/* ======================= Dr. Thomas Zhu ======================= */
export function ZhuProfilePage() {
  return (
    <main>
      <PageHero
        eyebrow="Leadership"
        title={<>Dr. Thomas Zhu</>}
        lead="Co-founder and CEO of AlloyX Group."
        cta={[{ label: "About AXG", to: "/aboutus" }, { label: "Pressroom", to: "/pressroom", ghost: true }]}
      />
      <DataRows
        eyebrow="News reports"
        title="In the press"
        rows={[
          { h: "CoinDesk", p: "Press briefing with ChinaAMC executive ahead of the launch of Hong Kong spot Bitcoin and Ether ETFs." },
          { h: "China Daily", p: "Asia's first spot crypto ETFs to debut in Hong Kong." },
          { h: "China Asset Management", p: "Collaborates with multiple institutions in the HKMA's Project Ensemble Sandbox, exploring fund-tokenization use cases." },
          { h: "China Asset Management", p: "Backs Visa and ANZ in Phase 2 of HKMA's e-HKD Pilot Programme." },
          { h: "Visa", p: "Visa and ANZ selected for Phase 2 of HKMA's e-HKD Pilot Programme." },
          { h: "Yahoo Finance", p: "ChinaAMC launches Hong Kong's first retail tokenised money-market fund in a Web3 push." },
          { h: "etNet", p: "Dr. Thomas Zhu publishes in China Forex: Digital Assets to Support Hong Kong's International Financial Center." },
          { h: "FinTech Times", p: "Standard Chartered custody backs a new tokenised MMF to boost DeFi yields." },
          { h: "CoinDesk", p: "Polygon and Standard Chartered enlisted for the AlloyX tokenized money-market fund." },
          { h: "FXNews", p: "Standard Chartered powers Hong Kong's first G-SIB institutional crypto custody." },
        ]}
      />
      <DataRows
        eyebrow="Publications"
        title="Selected writing"
        rows={[
          { h: "Springer", p: "RWA Tokenisation in the Web 3.0 Era.", href: "http://link.springer.com/book/10.1007/978-981-96-7663-7" },
          { h: "China Forex", p: "Review and Outlook: Hong Kong's Web 3.0 Ambition." },
          { h: "Visa", p: "Transforming Global Payments: the role of tokenized money and funds in cross-border transactions." },
        ]}
      />
      <DataRows
        eyebrow="Interviews"
        title="On the record"
        rows={[
          { h: "CNBC", p: "Crypto ETF trading in Hong Kong will attract different types of investors." },
          { h: "Nasdaq TradeTalks", p: "Steps the sell side can take to better address the buy side's interest in tokenization." },
          { h: "Hong Kong Business High Flyers Awards 2026", p: "Recognized among the region's high flyers." },
        ]}
      />
      <CTABand eyebrow="AlloyX Group" title="Shaping the future of finance." buttons={[{ label: "About AXG", to: "/aboutus" }, { label: "Contact Us", to: "/contactus", ghost: true }]} />
    </main>
  );
}
