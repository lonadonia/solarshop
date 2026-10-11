import { ArrowRight, Check } from "lucide-react";
import { enquiry, solutions } from "@/content/site";
import { photos } from "@/content/photos";
import { Photo } from "./Photo";
import { BusinessScene, FarmScene, HomeScene } from "./art/Scenes";

const scenes = { home: HomeScene, business: BusinessScene, farm: FarmScene };
const accents = ["text-gold-deep", "text-lake", "text-leaf-deep"];

export function Solutions() {
  return (
    <section id="solutions" className="relative bg-mist">
      {/* horizon curve from the logo, used as the section edge */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute inset-x-0 top-0 h-10 w-full -translate-y-[calc(100%-1px)] sm:h-16" aria-hidden="true">
        <path d="M0 80 C 360 20 980 0 1440 50 V80 Z" fill="var(--color-mist)" />
      </svg>
      <div className="container-x section-y !pt-[clamp(3rem,6vw,5rem)]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-lake [--dot:var(--color-sky)]">Who it&apos;s for</p>
            <h2 className="h-section mt-5 max-w-[18ch]">Designed for the building it sits on</h2>
          </div>
          <div role="tablist" aria-label="Choose a property type" className="inline-flex self-start rounded-full bg-paper p-1.5 ring-1 ring-sky/15 lg:self-auto" data-tabs>
            {solutions.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                id={`tab-${s.id}`}
                aria-controls={`panel-${s.id}`}
                aria-selected={i === 0}
                tabIndex={i === 0 ? 0 : -1}
                className="rounded-full px-4 py-2.5 font-display text-[0.98rem] font-semibold text-ink transition-colors hover:text-forest sm:px-6"
              >
                {s.tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12">
          {solutions.map((s, i) => {
            const Scene = scenes[s.scene];
            return (
              <div
                key={s.id}
                id={`panel-${s.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${s.id}`}
                tabIndex={0}
                hidden={i !== 0}
                className="grid items-center gap-10 rounded-[2.25rem] bg-paper p-4 sm:p-5 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:p-6"
              >
                <div className="arch relative aspect-[4/3] max-w-full bg-mist">
                  <div className="absolute inset-0" aria-hidden="true" data-photo-fallback>
                    <Scene />
                  </div>
                  <Photo photo={photos[s.scene]} sizes="(min-width: 1024px) 600px, 92vw" maxWidth={1440} className="photo absolute inset-0 h-full w-full object-cover" />
                </div>
                <div className="px-3 pb-6 sm:px-5 lg:py-6 lg:pr-10">
                  <p className={`font-mono text-xs uppercase tracking-[0.14em] ${accents[i]}`}>{s.tab}</p>
                  <h3 className="mt-3 text-[clamp(1.75rem,2vw+1rem,2.4rem)] font-semibold leading-[1.1] tracking-[-0.025em]">{s.title}</h3>
                  <p className="mt-4 text-ink-soft">{s.text}</p>
                  <ul className="mt-6 grid gap-3">
                    {s.fits.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-sage text-forest">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <dl className="mt-8 grid grid-cols-3 divide-x divide-line rounded-2xl bg-daylight ring-1 ring-line">
                    {s.typical.map((t) => (
                      <div key={t.label} className="min-w-0 px-3 py-4 sm:px-4">
                        <dt className="font-mono text-[0.66rem] uppercase tracking-[0.1em] text-ink-soft">{t.label}</dt>
                        <dd className="mt-1.5 font-display text-[1.05rem] font-semibold leading-tight text-ink sm:text-lg">{t.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <a href="#enquire" className="btn btn-forest mt-8" data-enquire={`a ${s.scene} solar system`}
                    data-property={enquiry.propertyTypes[i]}>
                    Ask about a {s.scene} system
                    <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
