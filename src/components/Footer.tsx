import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { company, footer } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative bg-wheat">
      {/* Sun rising over the hills: the logo mark at landscape scale */}
      <svg viewBox="0 70 1440 190" preserveAspectRatio="xMidYMax slice" className="block h-[120px] w-full sm:h-[160px] lg:h-[190px]" aria-hidden="true">
        <circle cx="840" cy="226" r="140" fill="var(--color-sun)" opacity="0.2" />
        <circle cx="840" cy="226" r="104" fill="var(--color-gold)" />
        <path d="M0 208 C 260 150 520 150 760 172 C 1000 194 1220 150 1440 130 V260 H0 Z" fill="var(--color-wheat)" />
        <path d="M0 220 C 260 162 520 162 760 184 C 1000 206 1220 162 1440 142 V260 H0 Z" fill="var(--color-meadow)" />
        <path d="M0 238 C 300 196 620 190 900 206 C 1120 218 1300 196 1440 186 V260 H0 Z" fill="var(--color-leaf)" />
        <path d="M0 260 V250 C 380 228 780 226 1440 238 V260 Z" fill="var(--color-forest)" />
      </svg>
      <div className="bg-forest text-daylight">
        <div className="container-x pb-10 pt-8 lg:pt-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
            <div className="col-span-2 lg:col-span-1">
              <Image src="/brand/logo-light.webp" alt="SolarShop" width={560} height={117} className="h-auto w-[180px]" />
              <p className="mt-5 max-w-xs text-[#cfe0bf]">{company.tagline}</p>
              <a href="#enquire" className="btn btn-sun mt-7">
                Book a free assessment
                <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            {footer.columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-meadow">{col.title}</p>
                <ul className="mt-5 grid gap-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="link-underline text-daylight/90 hover:text-daylight">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <div className="col-span-2 lg:col-span-1">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-meadow">Contact</p>
              <ul className="mt-5 grid gap-3 text-daylight/90">
                <li className="tabular-nums">{company.phone}</li>
                <li className="break-words">{company.email}</li>
                <li>{company.hours}</li>
                <li>{company.area}</li>
              </ul>
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-3 border-t border-meadow/20 pt-6 text-sm text-[#b9d0a4] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
            <p className="flex gap-5">
              <a href="#top" className="link-underline">
                Back to top
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
