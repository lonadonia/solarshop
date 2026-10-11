import { ArrowRight, Check } from "lucide-react";
import { hero } from "@/content/site";
import { photos } from "@/content/photos";
import { Photo } from "./Photo";
import { SunMark } from "./art/SunMark";

export function Hero() {
  const [first, ...rest] = hero.titleMarkWord.split("o");
  return (
    <section id="top" className="hero relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Photo photo={photos.hero} sizes="(max-aspect-ratio: 1/1) 300vh, 100vw" priority className="h-full w-full object-cover object-[60%_55%] lg:object-[22%_50%]" />
        {/* light daylight wash so the text stays readable; never a dark overlay */}
        <div className="hero-wash absolute inset-0" aria-hidden="true" />
      </div>
      <div className="container-x flex min-h-[calc(100svh-76px)] items-start pb-[34vh] sm:pb-[30vh] pt-10 sm:pt-14 lg:min-h-[clamp(600px,42vw,820px)] lg:items-center lg:py-14">
        <div className="relative z-10 min-w-0 max-w-[40rem]">
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
          <p className="lead mt-7 !text-ink">{hero.lead}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={hero.primaryCta.href} className="btn btn-sun">
              {hero.primaryCta.label}
              <ArrowRight className="arrow h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-line bg-daylight/70 backdrop-blur-sm">
              {hero.secondaryCta.label}
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[0.97rem] font-medium text-ink">
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

      </div>
    </section>
  );
}
