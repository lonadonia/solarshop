import { ArrowRight } from "lucide-react";
import { services, type Service } from "@/content/site";
import { serviceIcons } from "./Icons";
import { PanelQuad } from "./art/parts";

const tones: Record<Service["tone"], { tile: string; disc: string; title: string; text: string; bullet: string }> = {
  sun: { tile: "bg-butter", disc: "bg-sun text-pine", title: "text-ink", text: "text-ink-soft", bullet: "bg-gold" },
  spring: { tile: "bg-sage", disc: "bg-spring text-pine", title: "text-ink", text: "text-ink-soft", bullet: "bg-spring" },
  sky: { tile: "bg-mist", disc: "bg-sky text-daylight", title: "text-ink", text: "text-ink-soft", bullet: "bg-sky" },
  forest: { tile: "bg-forest", disc: "bg-meadow text-pine", title: "text-daylight", text: "text-[#cfe0bf]", bullet: "bg-meadow" },
};

function Tile({ s, className = "", children }: { s: Service; className?: string; children?: React.ReactNode }) {
  const t = tones[s.tone];
  const Icon = serviceIcons[s.icon];
  return (
    <article className={`relative flex flex-col overflow-hidden rounded-[2rem] p-7 sm:p-9 ${t.tile} ${className}`}>
      <span className={`inline-flex h-16 w-16 items-center justify-center rounded-full ${t.disc}`}>
        <Icon className="h-10 w-10" />
      </span>
      <h3 className={`mt-6 text-[1.6rem] font-semibold leading-tight tracking-[-0.02em] ${t.title}`}>{s.title}</h3>
      <p className={`mt-3 max-w-[34ch] ${t.text}`}>{s.text}</p>
      <ul className={`mt-5 grid gap-2 text-[0.95rem] ${t.title}`}>
        {s.points.map((p) => (
          <li key={p} className="flex gap-3">
            <span className={`mt-[0.62em] h-1.5 w-1.5 flex-none rounded-full ${t.bullet}`} aria-hidden="true" />
            {p}
          </li>
        ))}
      </ul>
      {children}
    </article>
  );
}

export function Services() {
  const [solar, battery, ev, care] = services;
  return (
    <section id="services" className="section-y">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow text-gold-deep [--dot:var(--color-sun)]">What we do</p>
            <h2 className="h-section mt-5 max-w-[16ch]">Solar, storage and charging from one team</h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-lg text-ink-soft">
              Whether you start with a few panels or a full system with battery and EV charger, everything is designed to work together and to grow with you.
            </p>
            <a href="#enquire" className="link-underline mt-5 inline-flex items-center gap-2 font-display font-semibold text-forest">
              Talk to an adviser <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
          <Tile s={solar} className="md:col-span-2 lg:col-span-1 lg:row-span-2">
            <svg viewBox="0 0 320 150" className="mt-8 w-full max-w-[24rem] md:ml-auto lg:ml-0 lg:mt-auto lg:max-w-none" aria-hidden="true">
              <circle cx="232" cy="96" r="54" fill="var(--color-sun)" />
              <circle cx="232" cy="96" r="78" fill="var(--color-sun)" opacity="0.18" />
              <path d="M0 112 C 80 92 200 88 320 102 V150 H0 Z" fill="var(--color-butter)" />
              <path d="M0 118 C 80 98 200 94 320 108 V150 H0 Z" fill="var(--color-leaf)" />
              <path d="M110 150 C 160 128 240 118 320 116 V150 Z" fill="var(--color-meadow)" />
              <PanelQuad quad={[[26, 74], [128, 66], [138, 96], [34, 106]]} cols={5} rows={2} />
              <line x1="52" y1="104" x2="52" y2="118" stroke="var(--color-soil)" strokeWidth="3" />
              <line x1="118" y1="96" x2="118" y2="112" stroke="var(--color-soil)" strokeWidth="3" />
            </svg>
          </Tile>
          <Tile s={battery} />
          <Tile s={ev} />
          <Tile s={care} className="md:col-span-2 lg:col-span-2">
            <div className="mt-7 max-w-sm rounded-2xl bg-pine/60 p-5 ring-1 ring-meadow/20 xl:absolute xl:right-9 xl:top-9 xl:mt-0 xl:w-[17rem]">
              <div className="flex items-baseline justify-between">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-meadow">Today</p>
                <p className="font-mono text-[0.68rem] text-meadow">Sample data</p>
              </div>
              <p className="mt-1 font-display text-3xl font-semibold text-daylight">
                18.6 <span className="text-lg font-medium text-meadow">kWh</span>
              </p>
              <svg viewBox="0 0 220 70" className="mt-3 w-full" aria-hidden="true">
                <path d="M0 66 C 50 66 70 8 110 8 C 150 8 170 66 220 66 Z" fill="var(--color-spring)" opacity="0.28" />
                <path d="M0 66 C 50 66 70 8 110 8 C 150 8 170 66 220 66" fill="none" stroke="var(--color-sun)" strokeWidth="2.5" />
                <line x1="0" y1="67" x2="220" y2="67" stroke="var(--color-meadow)" strokeOpacity="0.4" />
                <circle cx="132" cy="11" r="4" fill="var(--color-sun)" />
              </svg>
              <div className="mt-1 flex justify-between font-mono text-[0.65rem] text-meadow">
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
              </div>
            </div>
          </Tile>
        </div>
      </div>
    </section>
  );
}
