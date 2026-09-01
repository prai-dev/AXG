import { useState } from "react";
import "./ContactForm.css";

/* Mailboxes published by AlloyX. With no backend attached, submitting opens the
   visitor's mail client with the enquiry prefilled. */
const MAIL_GENERAL = "rwa@alloyx.com";
const MAIL_IR = "ir@alloyx.com";
const MAIL_MEDIA = "marketing@alloyx.com";

const REASONS = [
  "Product enquiry",
  "Partnership",
  "Stablecoin issuance",
  "Tokenization / RWA",
  "Investor relations",
  "Media enquiry",
  "Support",
  "Other",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const reason = f.get("reason") || "";
    const to = reason === "Investor relations" ? MAIL_IR
      : reason === "Media enquiry" ? MAIL_MEDIA
      : MAIL_GENERAL;
    const body = [
      `Name: ${f.get("first") || ""} ${f.get("last") || ""}`.trim(),
      `Email: ${f.get("email") || ""}`,
      `Organization: ${f.get("org") || ""}`,
      `Reason: ${reason}`,
      "",
      `${f.get("message") || ""}`,
    ].join("\n");
    window.location.href =
      `mailto:${to}?subject=${encodeURIComponent(reason || "Enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="cform">
      <div className="wrapx cform__grid">
        <div className="cform__aside">
          <h1 className="cform__title">Contact us.</h1>
          <p className="cform__dek">
            Interested in one of our products or have a question? Send us a message
            and we'll get back to you shortly.
          </p>
          <p className="cform__note">
            You can send us a message by filling out the adjacent form or by emailing us at{" "}
            <a href={`mailto:${MAIL_GENERAL}`}>{MAIL_GENERAL}</a>. For investor relations,
            please contact <a href={`mailto:${MAIL_IR}`}>{MAIL_IR}</a>; for media enquiries,{" "}
            <a href={`mailto:${MAIL_MEDIA}`}>{MAIL_MEDIA}</a>.
          </p>
          <p className="cform__addr">
            1710, 17/F, Jardine House,<br />1 Connaught Place, Central, Hong Kong
          </p>
        </div>

        <form className="cform__form" onSubmit={onSubmit}>
          <div className="cform__row">
            <label className="cfield">
              <span>First Name <i>*</i></span>
              <input name="first" type="text" required />
            </label>
            <label className="cfield">
              <span>Last Name <i>*</i></span>
              <input name="last" type="text" required />
            </label>
          </div>

          <div className="cform__row">
            <label className="cfield">
              <span>Email <i>*</i></span>
              <input name="email" type="email" required />
            </label>
            <label className="cfield">
              <span>Organization</span>
              <input name="org" type="text" />
            </label>
          </div>

          <label className="cfield">
            <span>Reason <i>*</i></span>
            <select name="reason" required defaultValue="">
              <option value="" disabled>Select a reason</option>
              {REASONS.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </label>

          <label className="cfield">
            <span>Message <i>*</i></span>
            <textarea name="message" rows="5" required />
          </label>

          <button className="cform__submit" type="submit">Submit</button>

          <p className="cform__consent">
            By submitting, you agree to receive updates, insights and news from us.
          </p>

          {sent && (
            <p className="cform__sent" role="status">
              Your mail client should now be open with the enquiry ready to send.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
