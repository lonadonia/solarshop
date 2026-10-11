import Image from "next/image";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { company, nav } from "@/content/site";

export function Header() {
  return (
    <header className="site-header sticky z-50 bg-daylight" data-header>
      <div className="container-x flex h-[76px] items-center justify-between gap-6 lg:h-[88px]">
        <a href="#top" className="shrink-0 rounded-md" aria-label="SolarShop home">
          <Image src="/brand/logo.webp" alt="SolarShop" width={560} height={117} priority className="h-auto w-[148px] lg:w-[176px]" />
        </a>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-2 font-display text-[0.98rem] font-medium text-ink transition-colors hover:bg-sage hover:text-forest"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hidden items-center gap-2 rounded-full px-3 py-2 font-display text-[0.98rem] font-medium tabular-nums text-forest hover:bg-sage md:inline-flex">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {company.phone}
          </a>
          <a href="#enquire" className="btn btn-sun hidden !min-h-11 !px-5 sm:inline-flex">
            Free assessment
            <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage text-forest transition-colors hover:bg-meadow/60 xl:hidden"
            aria-expanded="false"
            aria-controls="mobile-nav"
            data-nav-toggle
          >
            <span className="sr-only" data-nav-label>
              Open menu
            </span>
            <Menu className="h-5 w-5" aria-hidden="true" data-icon-open />
            <X className="hidden h-5 w-5" aria-hidden="true" data-icon-close />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className="nav-panel absolute inset-x-0 top-full border-t border-line bg-daylight shadow-[0_24px_40px_-28px_rgb(23_48_31/0.5)] xl:hidden"
        data-open="false"
        data-nav-panel
        hidden
      >
        <nav aria-label="Mobile" className="container-x py-6">
          <ul className="grid gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-xl font-medium text-ink hover:bg-sage" data-nav-link>
                  {item.label}
                  <ArrowRight className="h-5 w-5 text-leaf" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a href="#enquire" className="btn btn-sun w-full" data-nav-link>
              Book a free assessment
            </a>
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="btn btn-line w-full tabular-nums">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {company.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
