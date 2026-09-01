import {
  PageHero, StatStrip, StickyList, Statement, ProcessSteps,
  FeatureCards, DataRows, Marquee, CTABand, MediaBand,
} from "../components/pagekit";

/* ======================= RYT ======================= */
export function RytPage() {
  return (
    <main>
      <PageHero
        eyebrow="Digital Tokens · RYT"
        title={<>Real Yield<br />Token</>}
        lead="A tokenized fund of USD Money Market Fund. Accessible to web3 users 24/7. Real yield bearing."
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
      <MediaBand src="/products/ryt.png" alt="RYT — Real Yield Token dashboard" caption="The RYT app — invest, track yield and manage on-chain, 24/7." />
      <StickyList
        eyebrow="How it works"
        title="Simplifying Tokenized Fund Investment and Maximizing Yields"
        intro="AXG offers a single, unified solution with seamless integration of major DeFi protocols. Eliminate the complexity of integrating individual protocols using AXG's universal interface."
        items={[
          { h: "Diversify and Optimize Yields", p: "Expand your stablecoin earning experience to maximize yield opportunities across all market conditions." },
          { h: "Transparent and On-Chain Operations", p: "Manage all fees, deposits, withdrawals, and rewards entirely on-chain, ensuring full transparency and auditability." },
          { h: "Enhanced Security and User Experience", p: "Protect users from web hacks and scams with a superior UX and native on-chain integration directly within AXG's platform, avoiding reliance on external DeFi dApps." },
        ]}
      />
      <CTABand eyebrow="Real Yield Token" title={<>Put idle stablecoins<br />to work, 24/7.</>}
        buttons={[{ label: "Visit RYT Finance", to: "https://ryt.finance", ext: true }, { label: "Talk to us", to: "/contactus", ghost: true }]} />
    </main>
  );
}

/* ======================= Stablecoin Network ======================= */
export function NetworkPage() {
  return (
    <main>
      <PageHero
        eyebrow="AlloyX Stablecoin Network"
        title={<>AXSN</>}
        lead="Mobilizing Money 24/7."
        cta={[{ label: "Explore", to: "/issuance" }, { label: "Contact Us", to: "/contactus", ghost: true }]}
        aside={<p className="phero__note">Join us in mobilizing money 24/7. Together, we don't adapt to the future of finance — we define it.</p>}
      />
      <Marquee items={["Cross-border Payments", "Stablecoin", "RWA Issuance", "Treasure Card", "Real Yield", "Multi-Chain", "24/7 Settlement"]} />
      <FeatureCards
        eyebrow="Product & Solutions"
        title={<>Everything the network runs on</>}
        items={[
          { tag: "Payments", h: "Cross-border Payments", p: "Enable real-time, cost-efficient cross-border payments with built-in regulatory adherence, eliminating friction in international settlements." },
          { tag: "Spend", h: "Treasure Card", p: "Redefine corporate spending with intelligent, multi-format card programs that enhance financial control and bridge the last-mile payment gap." },
          { tag: "Merchant", h: "Stablecoin Payment", p: "A merchant-first infrastructure enabling seamless stablecoin acceptance from customers worldwide, with end-to-end settlement and FX liquidity." },
          { tag: "Yield", h: "Real Yield Token", p: "Tokenized fund based on a highly-rated (AAAmf) US dollar Money Market Fund, providing 24/7 stable returns." },
          { tag: "RWA", h: "One-stop RWA Issuance", p: "Modular design to customize the RWA issuance process, with a built-in compliance model to meet different requirements." },
          { tag: "R&D", h: "Blockchain Innovation", p: "In collaboration with Hong Kong Cyberport and top-tier universities, we explore and deploy cutting-edge blockchain applications for real-world impact." },
        ]}
      />
      <StickyList
        eyebrow="Who should join?"
        title="Built for every node of the money network"
        items={[
          { h: "Banking & Payment Rails", p: "Expand your reach with seamless access to global payment rails and next-generation financial infrastructure." },
          { h: "Liquidity Providers", p: "Transform idle reserves into compliant, high-liquidity instruments — maximizing returns without compromising security." },
          { h: "Virtual Asset Exchanges", p: "Attract global customers to expand virtual asset trading volume and enhance both efficiency and profitability." },
          { h: "Payment Service Providers", p: "Leverage innovative and diversified payment solutions to scale business volume and income." },
          { h: "Cross-Border Traders", p: "Minimize friction and maximize security in international settlements through our optimized payment corridors." },
          { h: "Blockchain Foundations", p: "Leverage AlloyX's scalable infrastructure to expand utility, adoption, and long-term ecosystem value." },
        ]}
      />
      <FeatureCards
        eyebrow="Why join AXSN?"
        title="Six reasons the network compounds"
        items={[
          { h: "Global Connectivity", p: "Integrate stablecoins, RWA ecosystems, and institutional partners into a unified global liquidity framework — eliminating fragmentation and unlocking new opportunities." },
          { h: "24/7 Transfer", p: "Enable instant, 24/7 settlement for both stablecoins and fiat currencies, reducing payment frictions." },
          { h: "Multi-Chain", p: "Deployed across leading blockchain networks, our infrastructure ensures universal accessibility, seamless asset mobility, and enterprise-grade adoption." },
          { h: "Global Compliance", p: "Every solution is architected atop fully regulated financial channels, ensuring adherence to global standards without compromising agility." },
          { h: "New Revenue", p: "Monetize next-generation opportunities — from tokenized assets to programmable payments — within a single, expansive ecosystem." },
          { h: "End-to-End Solutions", p: "We transform complex business processes into simple, elegant, and fully compliant end-to-end solutions." },
        ]}
      />
      <Statement eyebrow="A new age of stablecoin" text="Together, we enter a new age of stablecoin." />
      <FeatureCards
        cols={2}
        items={[
          { h: "Unlock Exponential Network Effects", p: "Leverage a rapidly expanding ecosystem designed to amplify your reach and impact." },
          { h: "From Architecture to Execution", p: "Work with elite tech partners for end-to-end solutions." },
          { h: "Navigate with Compliance by Design", p: "Turn regulatory complexity into competitive advantage." },
          { h: "Pioneer Alongside Industry Trailblazers", p: "Innovation isn't a goal here — it's the standard we set, every day." },
        ]}
      />
      <CTABand eyebrow="Join the network" title="Mobilize money, 24/7."
        buttons={[{ label: "Contact Us", to: "/contactus" }, { label: "Explore issuance", to: "/issuance", ghost: true }]} />
    </main>
  );
}

/* ======================= Ferion ======================= */
export function FerionPage() {
  return (
    <main>
      <PageHero
        eyebrow="Issuance Engine"
        title={<>Launch your<br />Ferion</>}
        lead="Integrated infrastructure eliminates operational friction. Consolidated workflow reduces time-to-market."
        cta={[{ label: "Launch", to: "https://www.ferion.io", ext: true }, { label: "See the cases", to: "/ferion", ghost: true }]}
      />
      <StatStrip items={[
        { value: "10+", label: "Asset classes tokenized" },
        { value: "$50M+", label: "Total value tokenized" },
        { value: "20+", label: "Ecosystem partners" },
        { value: "24/7", label: "On-chain operations" },
      ]} />
      <DataRows
        eyebrow="Ferion Cases"
        title="Assets already on-chain"
        rows={[
          { h: "RYT Money Market Fund (MMF)", p: "Underlying: high-rating (AAAmf) USD Digital Money Market Fund. Tenor: Perpetual." },
          { h: "Physical Gold", p: "Institutional-grade tokenized physical gold." },
          { h: "Carbon Credit", p: "Tokenized carbon credits for inclusive, verifiable markets." },
          { h: "KN Private Credit Fund", p: "Underlying: cash-loan receivables from Southeast Asia, Mexico and other emerging markets. Tenor: 6 months." },
          { h: "PX Gold Mine Supply-Chain Finance", p: "Underlying: collateralized by accounts receivable from overseas gold mines. Tenor: 12 months." },
          { h: "WK Bond Fund", p: "Underlying: Chinese offshore USD bonds, LGFV bonds. Tenor: Perpetual, monthly redemption after a 1-year lock-up." },
          { h: "QSE New Energy Photovoltaic (PV)", p: "Underlying: cash flows from Malaysian PV solar projects. Tenor: 60 Months (with linear token redemption windows)." },
          { h: "Bricopia Life Sciences", p: "Underlying: cord-blood stem cells, recorded on-chain for transparency. Tenor: Perpetual." },
          { h: "US Stock Tokenization", p: "Underlying: stocks of Nasdaq-listed companies. Tenor: Perpetual — 24/7 stock trading." },
          { h: "Private Equity", p: "Underlying: private equity of a specific corporation, with conditional buyback mechanisms. Tenor: Perpetual." },
        ]}
      />
      <ProcessSteps
        eyebrow="How it works"
        title="3 steps to tokenize your assets"
        steps={[
          { h: "Submit your assets", points: ["Upload asset documentation (contracts, valuations, legal docs)", "Define tokenization parameters (token supply, yield distribution)"] },
          { h: "Compliance review & verification", points: ["Automated compliance screening + expert review", "KYC verification", "Asset valuation & due diligence"] },
          { h: "Mint & deploy", points: ["One-click smart-contract generation", "Deploy to blockchain instantly", "Live trading & liquidity management"] },
        ]}
      />
      <FeatureCards
        eyebrow="Why choose Ferion"
        title="Institutional by construction"
        cols={2}
        items={[
          { h: "Operational Efficiency", p: "Integrated infrastructure eliminates operational friction. Consolidated workflow reduces time-to-market with institutional-grade automation throughout." },
          { h: "Regulatory Framework", p: "Comprehensive multi-jurisdictional compliance architecture with embedded regulatory intelligence (KYC/KYB/KYT/AML) and institutional governance standards." },
          { h: "Transparent Governance", p: "Full auditability of operations and development, real-time visibility into custody and deployment, and verifiable on-chain transaction records." },
          { h: "Enterprise Security", p: "Custodial infrastructure meeting institutional standards, professional smart-contract audits with risk assessment, and multi-layer security protocols." },
        ]}
      />
      <CTABand eyebrow="Ferion" title="Tokenize your first asset." buttons={[{ label: "Launch Ferion", to: "https://www.ferion.io", ext: true }, { label: "Talk to us", to: "/contactus", ghost: true }]} />
    </main>
  );
}

/* ======================= RWA ======================= */
export function RwaPage() {
  return (
    <main>
      <PageHero
        eyebrow="RWA · Regulated Issuance"
        title={<>Regulated RWA<br />tokenization</>}
        lead="A full-cycle framework for regulated RWA tokenization—covering due diligence, token issuance, and ongoing asset management."
        cta={[{ label: "Start Ferion Now", to: "/ferion" }, { label: "See solutions", to: "/network", ghost: true }]}
      />
      <ProcessSteps
        eyebrow="The lifecycle"
        title="From asset to on-chain, managed end-to-end"
        steps={[
          { h: "Asset Preparation", points: ["Determine all intermediary and related parties", "Asset due diligence & static valuation", "Establish the SPV structure and finalize legal agreements"] },
          { h: "Implementation", points: ["Complete on-chain deployment & token issuance", "Issue on the RWA platform", "Conduct issuance to compliance requirements"] },
          { h: "Operational Management", points: ["Continuously monitor asset performance", "Distribute returns as agreed", "Regular reports & real-time data dashboards"] },
        ]}
      />
      <FeatureCards
        eyebrow="RWA Tokenization & Issuance Solution"
        title="AlloyX turns a complex process into one compliant flow"
        items={[
          { h: "One-Stop Solution", p: "Seamlessly integrates the entire process — from asset sourcing, SPV setup, token issuance and compliance disclosure to secondary-market liquidity — simplifying operations." },
          { h: "Modular Smart Contract", p: "Programmable cash flows, dynamic whitelist management, and on-chain reporting API interfaces, offering flexible asset-structuring options." },
          { h: "Built-in Compliance Module", p: "Multi-jurisdictional KYC/KYB verification, sanctions-list screening, and automated reporting to ensure full-process compliance." },
        ]}
      />
      <CTABand eyebrow="RWA" title={<>Build your first<br />RWA project.</>} buttons={[{ label: "Start Ferion Now", to: "/ferion" }, { label: "Contact Us", to: "/contactus", ghost: true }]} />
    </main>
  );
}

/* ======================= Payment ======================= */
export function PaymentPage() {
  return (
    <main>
      <PageHero
        eyebrow="Payment"
        title={<>Pay in minutes,<br />not days</>}
        lead="Supports major currencies including USD, EUR, GBP, HKD with seamless inflow and outflow."
        cta={[{ label: "Launch", to: "http://alloyx.one", ext: true }, { label: "Talk to us", to: "/contactus", ghost: true }]}
      />
      <FeatureCards
        items={[
          { tag: "Accounts", h: "Multi-Currency Accounts", p: "Supports major currencies including USD, EUR, GBP and HKD with seamless inflow and outflow." },
          { tag: "Transfers", h: "Global Transfers", p: "Stablecoin and local payment rails, with 7X24 service availability." },
          { tag: "Ramps", h: "On / Off Ramp Capabilities", p: "POBO-enabled on/off-ramp coverage to facilitate global remittances." },
        ]}
      />
      <CTABand eyebrow="Payment" title="Move money like a message." buttons={[{ label: "Launch", to: "http://alloyx.one", ext: true }, { label: "Contact Us", to: "/contactus", ghost: true }]} />
    </main>
  );
}

/* ======================= Card ======================= */
export function CardPage() {
  return (
    <main>
      <PageHero
        eyebrow="Treasure Card"
        title={<>Pay daily consumption<br />with your stablecoin</>}
        lead="Covers over 200 countries and regions worldwide in card network, compatible with Apple Pay, Google Pay, WeChat Pay, Alipay and etc."
        cta={[{ label: "Get the card", to: "/contactus" }, { label: "Explore payment", to: "/payment", ghost: true }]}
      />
      <FeatureCards
        items={[
          { tag: "Virtual", h: "Virtual Cards", p: "Enables global online and offline payments." },
          { tag: "Stablecoin", h: "Stablecoin Support", p: "Supports fiat and stablecoin top-up and settlement." },
          { tag: "Everywhere", h: "Multi-Scenario Compatibility", p: "Covers 200+ countries and regions worldwide, compatible with Apple Pay, Google Pay, WeChat Pay, Alipay and more." },
        ]}
      />
      <CTABand eyebrow="Treasure Card" title="Your stablecoin, everywhere." buttons={[{ label: "Contact Us", to: "/contactus" }, { label: "Payment", to: "/payment", ghost: true }]} />
    </main>
  );
}

/* ======================= Issuance ======================= */
export function IssuancePage() {
  return (
    <main>
      <PageHero
        eyebrow="Stablecoin Issuance"
        title={<>Building the<br />infrastructure of<br />future money</>}
        lead="Launching central bank regulated, 1:1 fiat-backed stablecoins to approved entities. After wallets are whitelisted and bank accounts are opened, institutions shall receive access to mint, redeem, and move stablecoins globally."
        cta={[{ label: "Launch", to: "https://www.axcoin.com/", ext: true }, { label: "Explore the network", to: "/network", ghost: true }]}
      />
      <DataRows
        eyebrow="AX Coin · In the press"
        title="Milestones in regulated stablecoins"
        rows={[
          { h: "First global Sharia certification for the AXBHD stablecoin", p: "AX Coin, a subsidiary of Solowin Holdings (AXG)." },
          { h: "Successful BlockSec security audit of AXUSD", p: "Ethereum smart-contract infrastructure audited." },
          { h: "Partnership with Bank of Bahrain and Kuwait B.S.C.", p: "Advancing regulated stablecoin infrastructure for institutional banking." },
          { h: "Strategic Partner Award to H.E. Noor bint Ali Alkhulaif", p: "Minister of Sustainable Development of Bahrain." },
          { h: "AX Coin × Singapore's FOMO Pay", p: "Bringing USD and Bahraini Dinar stablecoins to cross-border digital payments." },
          { h: "AX Coin leverages Fireblocks", p: "Powering the next generation of stablecoins." },
        ]}
      />
      <CTABand eyebrow="Issuance" title="Issue money that moves the world." buttons={[{ label: "Contact Us", to: "/contactus" }, { label: "Pressroom", to: "/pressroom", ghost: true }]} />
    </main>
  );
}

/* ======================= AgentX ======================= */
export function AgentxPage() {
  return (
    <main>
      <PageHero
        eyebrow="AI Tokens · AgentX"
        title={<>Rebuilding wealth<br />management for the<br />agentic era</>}
        lead="Intelligence, orchestration & decision quality."
        cta={[{ label: "Request access", to: "/contactus" }, { label: "Investment", to: "/solomon", ghost: true }]}
      />
      <FeatureCards
        eyebrow="Three pillars"
        title="Where intelligence meets institutional finance"
        items={[
          { h: "Intelligence & Orchestration", p: "Intelligence, orchestration and decision quality at the core of every workflow." },
          { h: "Institutional Products", p: "Institutional products and differentiated investment across markets." },
          { h: "Digital-Asset Infrastructure", p: "Institutional-grade digital-asset infrastructure underneath it all." },
        ]}
      />
      <StatStrip items={[
        { value: "Faster", label: "Time to market" },
        { value: "Superior", label: "Capabilities" },
        { value: "Stronger", label: "Trust & security" },
        { value: "Wider", label: "Reach & distribution" },
      ]} />
      <CTABand eyebrow="AgentX" title="Wealth management, re-agented." buttons={[{ label: "Request access", to: "/contactus" }, { label: "Talk to us", to: "/contactus", ghost: true }]} />
    </main>
  );
}
