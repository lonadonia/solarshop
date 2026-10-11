import { ArrowRight, Clock, Mail, MapPin, Phone, CheckCircle2, ShieldCheck } from "lucide-react";
import { company, enquiry } from "@/content/site";

const endpoint = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT ?? "";

const contacts = [
  { Icon: Phone, label: "Call", value: company.phone, disc: "bg-sun text-pine", mono: false },
  { Icon: Mail, label: "Email", value: company.email, disc: "bg-sky text-daylight", mono: false },
  { Icon: Clock, label: "Opening hours", value: company.hours, disc: "bg-spring text-pine", mono: false },
  { Icon: MapPin, label: "We cover", value: company.area, disc: "bg-leaf text-daylight", mono: false },
];

function Field({
  id,
  label,
  optional,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid content-start gap-2">
      <label htmlFor={id} className="flex items-baseline justify-between gap-3 font-display font-semibold text-ink">
        {label}
        {optional && <span className="font-sans text-sm font-normal text-ink-soft">Optional</span>}
      </label>
      {children}
      <p id={`${id}-error`} className="field-error" hidden />
    </div>
  );
}

export function Enquiry() {
  return (
    <section id="enquire" className="section-y bg-wheat">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow text-soil [--dot:var(--color-gold)]">{enquiry.eyebrow}</p>
          <h2 className="h-section mt-5 max-w-[13ch]">{enquiry.title}</h2>
          <p className="mt-5 max-w-md text-lg text-ink-soft">{enquiry.text}</p>
          <ul className="mt-10 grid gap-5">
            {contacts.map(({ Icon, label, value, disc, mono }) => (
              <li key={label} className="flex items-center gap-4">
                <span className={`inline-flex h-12 w-12 flex-none items-center justify-center rounded-full ${disc}`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-ink-soft">{label}</span>
                  <span className={`block break-words font-medium text-ink ${mono ? "font-mono" : ""}`}>{value}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-10 flex max-w-md items-start gap-3 rounded-2xl bg-paper/70 p-4 text-sm text-ink-soft ring-1 ring-line">
            <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-leaf" aria-hidden="true" />
            No obligation and no sales pressure. We only use your details to reply to this enquiry.
          </p>
        </div>

        <div className="relative rounded-[2.25rem] bg-paper p-6 shadow-[0_40px_80px_-60px_rgb(92_70_48/0.6)] ring-1 ring-line sm:p-10">
          <form id="enquiry-form" noValidate data-endpoint={endpoint} className="grid gap-6" aria-describedby="form-intro">
            <p id="form-intro" className="text-sm text-ink-soft">
              Fields marked <span aria-hidden="true">*</span>
              <span className="sr-only">with an asterisk</span> are required.
            </p>
            <div className="hidden" aria-hidden="true">
              <label htmlFor="company-website">Leave this field empty</label>
              <input id="company-website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field id="name" label="Full name *">
                <input id="name" name="name" type="text" autoComplete="name" required className="field-input" aria-describedby="name-error" />
              </Field>
              <Field id="email" label="Email *">
                <input id="email" name="email" type="email" autoComplete="email" required className="field-input" aria-describedby="email-error" />
              </Field>
              <Field id="phone" label="Phone" optional>
                <input id="phone" name="phone" type="tel" autoComplete="tel" className="field-input" aria-describedby="phone-error" />
              </Field>
              <Field id="postcode" label="Postcode or ZIP *">
                <input id="postcode" name="postcode" type="text" autoComplete="postal-code" required className="field-input" aria-describedby="postcode-error" />
              </Field>
            </div>

            <fieldset className="grid gap-3" aria-describedby="property-error">
              <legend className="mb-3 font-display font-semibold text-ink">Property type *</legend>
              <div className="flex flex-wrap gap-2">
                {enquiry.propertyTypes.map((t, i) => (
                  <label key={t} className="choice relative">
                    <input type="radio" name="property" value={t} id={`property-${i}`} required />
                    <span>{t}</span>
                  </label>
                ))}
              </div>
              <p id="property-error" className="field-error" hidden />
            </fieldset>

            <fieldset className="grid gap-3">
              <legend className="mb-3 flex w-full items-baseline justify-between font-display font-semibold text-ink">
                I&apos;m interested in
                <span className="font-sans text-sm font-normal text-ink-soft">Choose any</span>
              </legend>
              <div className="flex flex-wrap gap-2">
                {enquiry.interests.map((t, i) => (
                  <label key={t} className="choice relative">
                    <input type="checkbox" name="interests" value={t} id={`interest-${i}`} />
                    <span>{t}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <Field id="message" label="Anything we should know?" optional>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="field-input resize-y"
                placeholder="Roof type, monthly bill, timescale..."
                aria-describedby="message-error"
              />
            </Field>

            <div className="grid gap-2">
              <label className="flex cursor-pointer items-start gap-3 text-[0.95rem] text-ink-soft">
                <input id="consent" name="consent" type="checkbox" required className="check mt-0.5 flex-none" aria-describedby="consent-error" />
                <span>I agree to SolarShop contacting me about this enquiry. *</span>
              </label>
              <p id="consent-error" className="field-error" hidden />
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button type="submit" className="btn btn-forest" data-submit>
                <span data-submit-label>Send my enquiry</span>
                <span className="spinner hidden" data-submit-spinner aria-hidden="true" />
                <ArrowRight className="arrow h-4 w-4" aria-hidden="true" data-submit-arrow />
              </button>
              <p className="text-sm text-ink-soft">We reply within one working day.</p>
            </div>
            <p role="status" aria-live="polite" className="rounded-2xl text-[0.95rem] empty:hidden" data-form-status />
          </form>

          <div className="py-10 text-center" data-form-success hidden tabIndex={-1}>
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-sage text-forest">
              <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-3xl font-semibold tracking-[-0.02em]">Thanks, your enquiry is in</h3>
            <p className="mx-auto mt-3 max-w-md text-ink-soft">
              We will contact you within one working day to arrange your free assessment.
            </p>
            <button type="button" className="btn btn-line mt-8" data-form-reset>
              Send another enquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
