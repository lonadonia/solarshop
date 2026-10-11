import { ArrowRight, ClipboardCheck, HardHat, LineChart, Sprout, type LucideIcon } from "lucide-react";
import { hero } from "@/content/site";
import { HeroScene } from "./art/HeroScene";
import { SunMark } from "./art/SunMark";

const pointIcons: Record<string, LucideIcon> = {
  survey: ClipboardCheck,
  install: HardHat,
  monitor: LineChart,
  sizes: Sprout,
};
const pointTones = ["bg-butter text-gold-deep", "bg-sage text-forest", "bg-mist text-lake", "bg-wheat text-soil"];

export function Hero() {
  const [first, ...rest] = hero.titleMarkWord.split("o");
  return (
    <section id="top" className="hero-sky relative isolate overflow-hidden">
      <div className="container-x relative z-10 grid gap-10 pt-8 sm:pt-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] lg:gap-8 lg:pt-14">
        <div className="min-w-0">
          <p className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 className="h-display mt-6 max-w-[11ch] text-ink">
            {hero.titleStart}{" "}
            <span className="sr-only">{hero.titleMarkWord}</span>
            <span className="whitespace-nowrap text-forest" aria-hidden="true">
              {first}
              <SunMark id="hero-o" gap="#e9f1f0" className="mx-[0.015em] inline-block h-[0.6em] w-[0.6em] translate-y-[0.02em] align-baseline" />
              {rest.join("o")}
            </span>
          </h1>
          <p className="lead mt-7">{hero.lead}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={hero.primaryCta.href} className="btn btn-sun">
              {hero.primaryCta.label}
              <ArrowRight className="arrow h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-line bg-paper/60 backdrop-blur-sm">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        {/* example system card */}
        <div className="relative min-w-0 lg:flex lg:items-start lg:justify-end lg:pt-2">
          <div className="chip-in hero-glass w-full rounded-[1.75rem] p-5 sm:grid sm:grid-cols-2 sm:gap-x-7 sm:p-6 lg:block lg:max-w-[22.5rem]" style={{ animationDelay: "400ms" }}>
            <div className="min-w-0">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-leaf-deep">Example system</p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sage px-2.5 py-1 font-mono text-[0.66rem] uppercase tracking-[0.1em] text-forest">
                  <span className="live-dot" aria-hidden="true" />
                  Generating
                </span>
              </div>
              <p className="mt-3 font-display text-[2.6rem] font-semibold leading-none tracking-[-0.03em] text-ink">{hero.example.size}</p>
              <p className="mt-2 text-[0.95rem] text-ink-soft">
                {hero.example.panels} panels · {hero.example.facing}-facing · {hero.example.pitch} pitch
              </p>
            </div>

            {/* a typical sunny day: output rises with the sun and falls at dusk */}
            <figure className="mt-5 hidden rounded-2xl bg-daylight/80 px-3 pb-2 pt-3 ring-1 ring-line sm:row-span-2 sm:mt-0 sm:block lg:mt-5">
              <figcaption className="flex items-center justify-between px-1 font-mono text-[0.64rem] uppercase tracking-[0.12em] text-ink-soft">
                <span>Output over a sunny day</span>
                <span className="text-gold-deep">Illustrative</span>
              </figcaption>
              <svg viewBox="0 0 300 96" className="mt-2 block h-auto w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="hero-curve" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="var(--color-sun)" stopOpacity="0.55" />
                    <stop offset="1" stopColor="var(--color-sun)" stopOpacity="0.04" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="80" x2="300" y2="80" stroke="var(--color-line)" strokeWidth="1.5" />
                {[75, 150, 225].map((x) => (
                  <line key={x} x1={x} y1="10" x2={x} y2="80" stroke="var(--color-line)" strokeWidth="1" strokeDasharray="2 4" />
                ))}
                <path d="M20 80 C 70 78 100 14 150 12 C 200 14 230 78 280 80 Z" fill="url(#hero-curve)" />
                <path className="draw-line" d="M20 80 C 70 78 100 14 150 12 C 200 14 230 78 280 80" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="182" cy="19" r="9" fill="var(--color-sun)" opacity="0.3" />
                <circle cx="182" cy="19" r="4.5" fill="var(--color-gold)" stroke="var(--color-paper)" strokeWidth="2" />
              </svg>
              <div className="flex justify-between px-1 font-mono text-[0.62rem] text-ink-soft">
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
              </div>
            </figure>

            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:self-end lg:mt-4">
              <div className="flex items-center gap-2.5 rounded-2xl bg-forest p-2.5 pr-3 text-daylight">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-spring text-pine">
                  <svg viewBox="0 0 24 24" className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="4" width="12" height="17" rx="2.5" />
                    <path d="M10 2h4M13 8l-3 5h4l-3 5" />
                  </svg>
                </span>
                <span className="min-w-0 leading-tight">
                  <span className="block font-display text-base font-semibold">{hero.example.battery}</span>
                  <span className="block text-xs text-meadow">battery</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5 rounded-2xl bg-mist p-2.5 pr-3 text-lake">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky text-daylight">
                  <svg viewBox="0 0 24 24" className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v12M7 10l5 5 5-5M5 21h14" transform="rotate(180 12 12)" />
                  </svg>
                </span>
                <span className="min-w-0 leading-tight">
                  <span className="block font-display text-base font-semibold">Surplus</span>
                  <span className="block text-xs">to the grid</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* full-width daylight panorama; its sky slides up behind the text */}
      <div className="relative -mt-36 h-[340px] overflow-hidden sm:-mt-32 sm:h-[400px] lg:-mt-[min(23vw,20rem)] lg:h-[43.75vw] lg:max-h-[46rem]">
        <HeroScene className="absolute inset-y-0 right-0 h-full w-[130%] max-w-none sm:w-full" />
      </div>

      {/* promise strip, standing on the ground of the panorama */}
      <div className="relative bg-leaf pb-12 sm:pb-14">
        <div className="container-x relative z-10 -mt-8 lg:-mt-10">
          <ul className="hero-points grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] lg:grid-cols-4">
            {hero.points.map((p, i) => {
              const Icon = pointIcons[p.icon];
              return (
                <li key={p.title} className="flex flex-col gap-3 bg-paper/90 p-4 backdrop-blur-md sm:flex-row sm:gap-4 sm:p-5 lg:p-6">
                  <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl sm:h-11 sm:w-11 ${pointTones[i % pointTones.length]}`}>
                    <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[0.98rem] font-semibold leading-snug text-ink sm:text-[1.05rem]">{p.title}</span>
                    <span className="mt-1 hidden text-[0.92rem] leading-snug text-ink-soft sm:block">{p.text}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-8 w-full sm:h-12" aria-hidden="true">
          <path d="M0 80 C 360 20 980 0 1440 50 V80 Z" fill="var(--color-daylight)" />
        </svg>
      </div>
    </section>
  );
}
