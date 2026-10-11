import { Ruler, ReceiptText, Sparkles, LifeBuoy } from "lucide-react";
import { about } from "@/content/site";
import { SunMark } from "./art/SunMark";

const valueStyles = [
  { Icon: Ruler, disc: "bg-butter text-soil" },
  { Icon: ReceiptText, disc: "bg-mist text-lake" },
  { Icon: Sparkles, disc: "bg-sage text-forest" },
  { Icon: LifeBuoy, disc: "bg-wheat text-soil" },
];

export function About() {
  return (
    <section id="about" className="section-y">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow text-leaf-deep [--dot:var(--color-spring)]">{about.eyebrow}</p>
            <p className="mt-6 font-display text-[clamp(2rem,2.8vw+1rem,3.4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink [text-wrap:balance]">
              {about.statementStart}
              <span className="relative whitespace-nowrap text-leaf">
                {about.statementMid}
                <svg viewBox="0 0 200 14" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full" aria-hidden="true">
                  <path d="M2 10 C 50 2 150 2 198 9" fill="none" stroke="var(--color-spring)" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
              {about.statementJoin}
              <span className="text-sky">{about.statementEnd}</span>
              {about.statementTail}
            </p>
            <p className="mt-8 max-w-xl text-lg text-ink-soft">{about.text}</p>
          </div>
          <ul className="grid gap-x-8 gap-y-10 self-end sm:grid-cols-2">
            {about.values.map((v, i) => {
              const { Icon, disc } = valueStyles[i % valueStyles.length];
              return (
                <li key={v.title}>
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${disc}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.015em]">{v.title}</h3>
                  <p className="mt-2 text-ink-soft">{v.text}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative mt-20 overflow-hidden rounded-[2.25rem] bg-lake px-7 py-10 text-daylight sm:px-12 sm:py-14">
          <SunMark id="stats-mark" gap="var(--color-lake)" className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 sm:-right-8 sm:-top-14 sm:h-48 sm:w-48" />
          <div className="relative flex flex-wrap items-center gap-4 pr-24 sm:pr-40">
            <p className="font-display text-2xl font-semibold tracking-[-0.02em] sm:text-[1.7rem]">SolarShop in numbers</p>
            <span className="sample-tag text-[#bcd4e8]">Sample figures, replace with your own</span>
          </div>
          <dl className="relative mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {about.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse border-l-2 border-sun/70 pl-5">
                <dt className="mt-2 text-[#d3e3f0]">{s.label}</dt>
                <dd className="font-display text-[clamp(2.2rem,3vw+1rem,3.4rem)] font-semibold leading-none tracking-[-0.03em] text-sun [font-variant-numeric:tabular-nums]">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
