import { steps } from "@/content/site";

// The sun climbs from morning to midday across the four steps.
const curveY = (x: number) => 190 - 165 * Math.sin((((x + 120) / 1320) * Math.PI) / 2);
const curve = Array.from({ length: 61 }, (_, i) => {
  const x = i * 20;
  return `${i === 0 ? "M" : "L"}${x} ${curveY(x).toFixed(1)}`;
}).join(" ");
// Each sun sits at the start of its column so it lines up with the text below.
const sunX = [22, 350, 677, 1005];

export function Process() {
  return (
    <section id="process" className="section-y bg-butter">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow text-soil [--dot:var(--color-sun)]">How it works</p>
          <h2 className="h-section mt-5">From first visit to switch-on in four steps</h2>
          <p className="lead mt-5">A clear plan, one point of contact and no jargon. Here is what happens after you get in touch.</p>
        </div>

        {/* Desktop: sun path */}
        <div className="relative mt-16 hidden lg:block">
          <svg viewBox="0 0 1200 210" className="w-full overflow-visible" aria-hidden="true">
            <path d={`${curve} L1200 210 L0 210 Z`} fill="var(--color-sun)" opacity="0.16" />
            <path d={curve} fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeDasharray="3 9" strokeLinecap="round" />
            {sunX.map((x, i) => {
              const y = curveY(x);
              const r = 22 + i * 3;
              return (
                <g key={x}>
                  <line x1={x} y1={y + r + 6} x2={x} y2={210} stroke="var(--color-gold)" strokeWidth="1.5" strokeDasharray="2 6" />
                  <circle cx={x} cy={y} r={r * 1.7} fill="var(--color-sun)" opacity={0.12 + i * 0.05} />
                  <circle cx={x} cy={y} r={r} fill="var(--color-sun)" />
                  <text x={x} y={y + 7} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="700" fontSize="20" fill="var(--color-pine)">
                    {i + 1}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <ol className="relative mt-12 grid gap-10 lg:mt-6 lg:grid-cols-4 lg:gap-8">
          <span className="absolute bottom-6 left-[1.35rem] top-6 border-l-2 border-dashed border-gold/60 lg:hidden" aria-hidden="true" />
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex gap-5 lg:block">
              <span className="relative z-10 inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-sun font-display text-lg font-bold text-pine shadow-[0_0_0_8px_var(--color-butter)] lg:hidden">
                {i + 1}
              </span>
              <div className="lg:border-t-2 lg:border-gold/40 lg:pt-6">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-soil">
                  <span className="sr-only">Step {i + 1}: </span>
                  {s.time}
                </p>
                <h3 className="mt-2 text-[1.45rem] font-semibold leading-tight tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-2.5 text-ink-soft">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
