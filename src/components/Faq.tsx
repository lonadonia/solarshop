import { Plus, Phone } from "lucide-react";
import { company, faqs } from "@/content/site";

export function Faq() {
  return (
    <section id="faq" className="section-y bg-sage">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow text-forest [--dot:var(--color-spring)]">Questions</p>
          <h2 className="h-section mt-5 max-w-[14ch]">Good questions, straight answers</h2>
          <p className="mt-5 max-w-md text-lg text-ink-soft">The things people ask us most before going solar. If yours is not here, ask us directly.</p>
          <div className="mt-8 flex items-center gap-4 rounded-[1.5rem] bg-paper p-5 ring-1 ring-line">
            <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-sun text-pine">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-sm text-ink-soft">Prefer to talk it through?</p>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="font-display text-xl font-semibold tabular-nums text-forest hover:underline">
                {company.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="divide-y divide-forest/15 border-y border-forest/15">
          {faqs.map((f, i) => (
            <details key={f.q} className="faq group" open={i === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 font-display text-[1.2rem] font-semibold leading-snug tracking-[-0.01em] text-ink transition-colors hover:text-forest sm:text-[1.3rem]">
                {f.q}
                <span className="faq-icon inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-paper text-forest ring-1 ring-line">
                  <Plus className="h-5 w-5" aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-[60ch] pb-7 pr-14 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
