import { ContactCta } from "@/components/sections/ContactCta";
import { Hero } from "@/components/sections/Hero";
import { HomeServices } from "@/components/sections/HomeServices";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeServices />
      <PortfolioPreview />
      <Testimonials />
      <ContactCta />
    </>
  );
}
