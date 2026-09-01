/* ============================================================
   AXG icon set — Phosphor Icons (duotone), one consistent family.
   ============================================================ */
import {
  Coins, CurrencyCircleDollar, TrendUp, Vault, Cube, Bank, CreditCard,
  ShareNetwork, Wallet, Storefront, ShieldCheck, SealCheck, Globe, GlobeHemisphereWest,
  Lightning, ChartLineUp, ChartBar, Buildings, Newspaper, Handshake, EnvelopeSimple,
  GraduationCap, Users, Robot, Sparkle, Stack, ArrowsLeftRight, Certificate,
} from "@phosphor-icons/react";

const W = "duotone";
const mk = (Cmp) => function Icon({ size = 24, weight = W, ...rest }) {
  return <Cmp size={size} weight={weight} {...rest} />;
};

/* products */
export const IconStablecoin = mk(CurrencyCircleDollar);
export const IconYield      = mk(TrendUp);
export const IconGold       = mk(Coins);
export const IconIssuance   = mk(Cube);
export const IconNetwork    = mk(ShareNetwork);
export const IconPayment    = mk(Wallet);
export const IconCard       = mk(CreditCard);
export const IconAgent      = mk(Robot);
export const IconSpark      = mk(Sparkle);

/* company / investment */
export const IconInstitution = mk(Bank);
export const IconStrategy    = mk(ChartBar);
export const IconCompany     = mk(Buildings);
export const IconPress       = mk(Newspaper);
export const IconPartners    = mk(Handshake);
export const IconContact     = mk(EnvelopeSimple);
export const IconMarkets     = mk(ChartLineUp);
export const IconResearch    = mk(GraduationCap);

/* attributes */
export const IconShield   = mk(ShieldCheck);
export const IconAudit    = mk(SealCheck);
export const IconCustody  = mk(Vault);
export const IconGlobal   = mk(Globe);
export const IconBorder   = mk(GlobeHemisphereWest);
export const IconMerchant = mk(Storefront);
export const IconInstant  = mk(Lightning);
export const IconPeople   = mk(Users);
export const IconLayers   = mk(Stack);
export const IconSwap     = mk(ArrowsLeftRight);
export const IconLicense  = mk(Certificate);

/* keyword → icon, so every feature card gets a fitting glyph */
export function pickIcon(it) {
  if (it.icon) return it.icon;
  const s = ((it.tag || "") + " " + (it.h || "")).toLowerCase();
  if (/card|spend/.test(s)) return IconCard;
  if (/merchant|store|commerce/.test(s)) return IconMerchant;
  if (/pay|remit|settle|transfer/.test(s)) return IconPayment;
  if (/swap|convert|exchange rate|fx/.test(s)) return IconSwap;
  if (/yield|return|apy|\bfund\b|earn|ryt/.test(s)) return IconYield;
  if (/gold|bullion|metal|aurox/.test(s)) return IconGold;
  if (/issu|mint|ferion|tokeniz|rwa/.test(s)) return IconIssuance;
  if (/network|node|multi-chain|chain|rail/.test(s)) return IconNetwork;
  if (/custod|vault|reserve/.test(s)) return IconCustody;
  if (/licen|certif|sharia/.test(s)) return IconLicense;
  if (/secure|security|protect|risk/.test(s)) return IconShield;
  if (/complian|regulat|kyc|aml|audit|soc/.test(s)) return IconAudit;
  if (/cross-border|border|corridor/.test(s)) return IconBorder;
  if (/global|international|countries|worldwide|reach/.test(s)) return IconGlobal;
  if (/ai|agent|intelligen|orchestr/.test(s)) return IconAgent;
  if (/research|r&d|innovation|institute|education/.test(s)) return IconResearch;
  if (/liquid|instant|24\/7|real-time|realtime|fast/.test(s)) return IconInstant;
  if (/market|trade|invest|treasur/.test(s)) return IconMarkets;
  if (/bank|institution|solomon/.test(s)) return IconInstitution;
  if (/strategy|structur|scion|portfolio/.test(s)) return IconStrategy;
  if (/team|people|client|user|partner/.test(s)) return IconPartners;
  if (/stablecoin|coin|usd|currency/.test(s)) return IconStablecoin;
  if (/company|enterprise|corporate|about/.test(s)) return IconCompany;
  if (/news|press|media/.test(s)) return IconPress;
  return IconLayers;
}
