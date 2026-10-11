import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Solutions } from "@/components/Solutions";
import { Shop } from "@/components/Shop";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { Enquiry } from "@/components/Enquiry";
import { Footer } from "@/components/Footer";
import { Enhance } from "@/components/Enhance";

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-daylight">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Solutions />
        <Shop />
        <Process />
        <About />
        <Faq />
        <Enquiry />
      </main>
      <Footer />
      <Enhance />
    </>
  );
}
