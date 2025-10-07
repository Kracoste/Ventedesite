import type { Metadata } from "next";
import { ContactCta } from "@/components/sections/ContactCta";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Nos services Next.js",
  description:
    "Découvrez nos offres : site vitrine, e-commerce, projets sur-mesure et maintenance Next.js.",
};

const processSteps = [
  {
    title: "1. Cadrage",
    description:
      "Atelier de découverte, analyse de votre existant et définition des objectifs business et techniques.",
  },
  {
    title: "2. Design & contenu",
    description:
      "Wireframes, maquettes haute-fidélité et accompagnement éditorial pour une cohérence parfaite.",
  },
  {
    title: "3. Développement",
    description:
      "Intégration Next.js, optimisation des performances, QA continue et préparation au lancement.",
  },
  {
    title: "4. Lancement & suivi",
    description:
      "Mise en production, formation des équipes et plan d&apos;optimisation post-lancement.",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-24">
      <PageHeader
        kicker="Services"
        title="Conception et développement de sites Next.js haute performance"
        description="Nos équipes conçoivent des sites web sur mesure qui transforment vos visiteurs en clients durables de la stratégie au design, en passant par le développement et l'accompagnement à long terme."
        alignment="center"
      />

      <section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} variant="detailed" />
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <SectionHeading
            eyebrow="Méthodologie"
            title="Un process éprouvé, de l&apos;idée à la mise en production"
            description="Nous structurons tous nos projets autour d&apos;étapes claires et de points de contrôle réguliers pour garder le cap."
            alignment="center"
            className="mx-auto max-w-3xl"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-card dark:border-neutral-800 dark:bg-neutral-900/80"
              >
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta />
    </div>
  );
}
