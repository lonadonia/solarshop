import { ArrowRight, Check } from "lucide-react";
import { hero } from "@/content/site";
import { HeroScene } from "./art/HeroScene";
import { SunMark } from "./art/SunMark";

export function Hero() {
  const [first, ...rest] = hero.titleMarkWord.split("o");
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-x grid items-center gap-14 pb-16 pt-8 sm:pt-12 lg:grid-cols-[1.08fr_1fr] lg:gap-10 lg:pb-16 lg:pt-14">
        <div className="relative z-10 min-w-0">
          <p className="eyebrow text-leaf-deep [--dot:var(--color-spring)]">{hero.eyebrow}</p>
          <h1 className="h-display mt-6 max-w-[11ch] text-ink">
            {hero.titleStart}{" "}
            <span className="sr-only">{hero.titleMarkWord}</span>
            <span className="whitespace-nowrap text-forest" aria-hidden="true">
              {first}
              <SunMark id="hero-o" className="mx-[0.015em] inline-block h-[0.6em] w-[0.6em] translate-y-[0.02em] align-baseline" />
              {rest.join("o")}
            </span>
          </h1>
          <p className="lead mt-7">{hero.lead}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={hero.primaryCta.href} className="btn btn-sun">
              {hero.primaryCta.label}
              <ArrowRight className="arrow h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-line">
              {hero.secondaryCta.label}
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[0.97rem] text-ink-soft">
            {hero.points.map((p, i) => (
              <li key={p} className="flex items-center gap-2.5">
                <span
                  className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${
                    ["bg-butter text-soil", "bg-sage text-forest", "bg-mist text-lake"][i % 3]
                  }`}
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
          <div className="relative aspect-square">
            {/* sun path */}
            <svg viewBox="0 0 600 600" className="absolute -inset-[6%] h-[112%] w-[112%] overflow-visible" aria-hidden="true">
              <path d="M24 300 A 276 276 0 0 1 576 300" transform="translate(0 0) scale(1.0)" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeDasharray="2 10" strokeLinecap="round" />
              <circle cx="300" cy="300" r="300" fill="none" stroke="var(--color-line)" strokeWidth="1.5" />
            </svg>
            <div className="relative h-full w-full rounded-full shadow-[0_28px_48px_-30px_rgb(18_80_42/0.45)]">
              <HeroScene className="h-full w-full" />
            </div>

            <div className="chip-in absolute right-[1%] top-[6%] max-w-[13.5rem] rounded-2xl bg-paper p-4 shadow-[0_18px_40px_-24px_rgb(23_48_31/0.45)] ring-1 ring-line sm:right-[-6%]" style={{ animationDelay: "500ms" }}>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-leaf-deep">Example system</p>
              <p className="mt-1.5 font-display text-2xl font-semibold leading-none text-ink">
                {hero.example.size}
              </p>
              <p className="mt-1.5 text-sm text-ink-soft">
                {hero.example.panels} panels · {hero.example.facing}-facing · {hero.example.pitch}
              </p>
            </div>

            <div className="chip-in absolute bottom-[8%] left-[1%] flex items-center gap-3 rounded-2xl bg-forest py-3 pl-3 pr-5 text-daylight shadow-[0_18px_40px_-20px_rgb(12_58_30/0.7)] sm:left-[-8%]" style={{ animationDelay: "800ms" }}>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-spring text-pine">
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="4" width="12" height="17" rx="2.5" />
                  <path d="M10 2h4M13 8l-3 5h4l-3 5" />
                </svg>
              </span>
              <span>
                <span className="block font-display text-lg font-semibold leading-tight">{hero.example.battery}</span>
                <span className="block text-sm text-meadow">battery storage</span>
              </span>
            </div>

            <div className="chip-in absolute bottom-[34%] right-[-3%] hidden items-center gap-2 rounded-full bg-mist px-4 py-2 font-mono text-xs text-lake ring-1 ring-sky/20 sm:flex" style={{ animationDelay: "1100ms" }}>
              <span className="h-2 w-2 rounded-full bg-sky" aria-hidden="true" />
              Exporting surplus to grid
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
