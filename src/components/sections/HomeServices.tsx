import { services } from "@/data/services";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function HomeServices() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Des offres adaptées à votre ambition"
          description="De la landing page ambitieuse à la plateforme sur-mesure, choisissez l&apos;offre qui correspond à vos objectifs."
          alignment="center"
          className="mx-auto max-w-2xl"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
