import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { OdooSection } from "@/components/sections/odoo";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import FooterColumn from "@/components/ui/footer-column";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <Navbar />
      <Hero />
      <Services />
      <OdooSection />
      <About />
      <Contact />
      <FooterColumn />
    </main>
  );
}
