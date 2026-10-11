import { MessageCircle } from "lucide-react";
import { productCategories, products } from "@/content/site";
import { photos } from "@/content/photos";
import { Photo } from "./Photo";
import { ProductArt } from "./art/ProductArt";

const wells = ["bg-butter", "bg-mist", "bg-sage"];
const interestFor: Record<string, string> = {
  panels: "Solar panels",
  inverters: "Solar panels",
  batteries: "Battery storage",
  ev: "EV charger",
};

export function Shop() {
  return (
    <section id="shop" className="section-y relative overflow-hidden bg-forest text-daylight">
      <svg viewBox="0 0 400 400" className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] opacity-[0.12]" aria-hidden="true">
        <circle cx="200" cy="200" r="200" fill="var(--color-spring)" />
      </svg>
      <div className="container-x relative">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow text-sun">The shop</p>
            <h2 className="h-section mt-5 max-w-[15ch] text-daylight">Quality kit, chosen by installers</h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-lg text-[#cfe0bf]">
              Buy individual components or let us bundle them into a complete system. Every product we stock is one we are happy to fit on our own roofs.
            </p>
            <p className="mt-4">
              <span className="sample-tag text-meadow">Example listings</span>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter products" data-filter>
            {productCategories.map((c, i) => (
              <button
                key={c.id}
                type="button"
                className="filter-chip min-h-11 rounded-full border border-meadow/35 px-5 font-display text-[0.95rem] font-medium text-daylight transition-colors hover:border-meadow hover:bg-pine/40"
                aria-pressed={i === 0}
                data-filter-value={c.id}
              >
                {c.label}
              </button>
            ))}
          </div>
          <p className="font-mono text-sm text-meadow" aria-live="polite" data-filter-count>
            Showing {products.length} products
          </p>
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <li key={p.id} data-category={p.category} className="group">
              <article className="flex h-full flex-col rounded-[2rem] bg-paper p-3 text-ink transition-transform duration-300 ease-out group-hover:-translate-y-1">
                <div className={`arch relative aspect-[4/3] max-w-full ${wells[i % wells.length]}`}>
                  <div className="absolute inset-0 px-6 pt-8" aria-hidden="true" data-photo-fallback>
                    <ProductArt art={p.art} />
                  </div>
                  <Photo
                    photo={photos[p.art]}
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 46vw, 92vw"
                    maxWidth={1080}
                    className="photo absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col px-4 pb-4 pt-5">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-leaf-deep">
                    {productCategories.find((c) => c.id === p.category)?.label}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold leading-snug tracking-[-0.015em]">{p.name}</h3>
                  <p className="mt-2 text-[0.97rem] text-ink-soft">{p.text}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Key specifications">
                    {p.specs.map((s) => (
                      <li key={s} className="spec bg-sage text-forest">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <a
                      href="#enquire"
                      className="btn btn-line w-full !min-h-12"
                      data-enquire={p.name}
                      data-interest={p.art === "mounting" ? "Solar panels" : interestFor[p.category]}
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      Ask about this
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
