import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Découvrez une sélection de sites vitrines, boutiques e-commerce et projets sur-mesure réalisés avec Next.js.",
};

const collaborationHighlights = [
  {
    title: "Workshops immersifs",
    description: "Nous impliquons vos équipes pour concevoir des parcours utilisateurs alignés sur vos objectifs business.",
  },
  {
    title: "Qualité mesurée",
    description: "Scores Lighthouse élevés, monitoring des Core Web Vitals et automatisation des tests.",
  },
  {
    title: "Design system durable",
    description: "Composants réutilisables et documentation pour accélérer vos futures évolutions.",
  },
];

export default function PortfolioPage() {
  return (
    <div className="space-y-24">
      <PageHeader
        kicker="Portfolio"
        title="Des projets digitaux qui accélèrent les marques"
        description="Chaque collaboration est guidée par la performance et la recherche d&apos;impact durable."
      />

      <section>
        <Container>
          <PortfolioGrid />
        </Container>
      </section>

      <section>
        <Container>
          <SectionHeading
            eyebrow="Notre accompagnement"
            title="Une collaboration transparente"
            alignment="center"
            className="mx-auto max-w-3xl"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {collaborationHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-3xl border border-neutral-200 bg-white/80 p-6 text-sm text-neutral-600 shadow-card dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-300"
              >
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {highlight.title}
                </h3>
                <p className="mt-2">{highlight.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
