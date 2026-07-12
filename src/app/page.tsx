import { Hero } from "@/components/Hero";
import { Trust } from "@/components/Trust";
import { Sectors } from "@/components/Sectors";
import { Services } from "@/components/Services";
import { Method } from "@/components/Method";
import { Process } from "@/components/Process";
import { Realisations } from "@/components/Realisations";
import { Testimonials } from "@/components/Testimonials";
import { Zones } from "@/components/Zones";
import { Blog } from "@/components/Blog";
import { Faq } from "@/components/Faq";
import { LeadMagnet } from "@/components/LeadMagnet";
import { CtaBanner } from "@/components/CtaBanner";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Trust />
      <Sectors />
      <Services />
      <Method />
      <Process />
      <Realisations />
      <Testimonials />
      <Zones />
      <Blog />
      <Faq />
      <LeadMagnet />
      <CtaBanner />
    </main>
  );
}
