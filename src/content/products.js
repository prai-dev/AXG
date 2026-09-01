import { IconStablecoin, IconYield, IconGold } from "../components/icons";
import market from "./market.json";

/* single source of truth for the product suite — imported by every view */
export const CHIPS = ["USD", "EUR", "HKD", "SGD", "JPY", "INR", "AED", "ZAR", "+80"];

/* the on-chain product suite — metrics are REAL, verifiable facts per product
   (AX Coin uses AXG platform figures; RYT/Aurox publish no live financials, so
   we show sourced attributes from ryt.finance / aurox.finance). */
export const PRODUCTS = [
  {
    key: "axcoin", name: "AX Coin", tag: "Stablecoin", to: "/issuance", Icon: IconStablecoin,
    desc: "Regulated, fiat-backed stablecoins — AXUSD and AXBHD — freely transferable and built for global settlement.",
    pill: "Licensed · Central Bank of Bahrain",
    metrics: [
      { label: "Value tokenized", value: "$5M+", type: "spark", data: [8, 10, 9, 14, 16, 15, 20, 24, 22, 28, 34, 40, 46, 52, 60, 58, 66, 74, 82, 90, 96, 92, 88, 90] },
      { label: "Countries & regions", value: "90+", type: "chips" },
      { label: "Active users", value: "1M+", type: "bars", data: [26, 44, 62, 78, 100] },
    ],
  },
  {
    key: "ryt", name: "RYT", tag: "Real Yield Token", to: "/ryt", Icon: IconYield,
    desc: "A tokenized fund of a USD money-market fund — real-yield bearing, accessible to web3 users 24/7.",
    pill: "Institutional-grade custody",
    metrics: [
      { label: "Money-market benchmark", value: `${market.tbill.last}%`, type: "line", data: market.tbill.weekly,
        accent: "#677FE3", note: `US 13-week T-bill yield · 52w ${market.tbill.low52}–${market.tbill.high52}% · ${market.snapshot}` },
      { label: "Live on", value: "3 networks", type: "chains",
        data: [{ name: "Ethereum", icon: "/chains/eth.svg" }, { name: "Polygon", icon: "/chains/matic.svg" }, { name: "Arbitrum", icon: "/chains/arb.png" }],
        note: "Settlement T+0 \u00b7 fund NAV published daily" },
      { label: "Custodian bank", value: "Standard Chartered", type: "fact",
        note: "G-SIB \u00b7 Hong Kong\u2019s first institutional crypto custody" },
    ],
  },
  {
    key: "aurox", name: "Aurox", tag: "Tokenized Gold", to: "/rwa", Icon: IconGold,
    desc: "A gold token backed by allocated physical bullion — institutional custody and on-chain utility.",
    pill: "Allocated bullion",
    metrics: [
      { label: "Gold, per troy oz", value: `$${market.gold.last.toLocaleString("en-US")}`, type: "line", data: market.gold.weekly,
        accent: "#C6A15B", note: `COMEX front month · 52w $${market.gold.low52.toLocaleString("en-US")}–$${market.gold.high52.toLocaleString("en-US")} · ${market.snapshot}` },
      { label: "Gold, 1-year", value: `+${market.gold.change1y}%`, type: "delta",
        data: market.gold.weekly, accent: "#C6A15B",
        note: `Per AUROX (0.001 oz): $${(market.gold.last / 1000).toFixed(2)}` },
      { label: "Custody", value: "Brink\u2019s vaults", type: "fact",
        note: "Allocated bullion \u00b7 physical redemption from 400 troy oz" },
    ],
  },
];
