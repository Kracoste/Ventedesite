import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/sections/ContactCta";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import {
  getServiceBySlug,
  services,
  serviceSlugs,
  type Service,
} from "@/data/services";

interface ServicePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.name} | Services Next.js`,
    description: service.summary,
  };
}

function ServiceContent({ service }: { service: Service }) {
  return (
    <div className="space-y-16">
      <section>
        <Container className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Résumé"
              title={service.tagline}
              description={service.description}
            />
            <div>
              <h3 className="text-base font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Ce que nous prenons en charge
              </h3>
              <ul className="mt-4 grid gap-3 text-sm text-neutral-600 dark:text-neutral-300">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white/70 p-4 dark:border-neutral-700 dark:bg-neutral-900/70"
                  >
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-brand-100 bg-white/90 p-6 shadow-card dark:border-brand-500/30 dark:bg-neutral-900/90">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {service.name}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                {service.summary}
              </p>
            </div>
            <div className="space-y-1 text-sm">
              <p className="font-semibold text-neutral-900 dark:text-white">
                {service.startingPrice}
              </p>
              <p className="text-neutral-500 dark:text-neutral-400">{service.timeline}</p>
            </div>
            <ButtonLink href="/contact" size="lg">
              {service.ctaLabel}
            </ButtonLink>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Livrables
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <section>
        <Container>
          <SectionHeading
            eyebrow="Approche"
            title="Comment nous travaillons sur ce type de projet"
            description="Un binôme designer / développeur dédié, des points hebdomadaires et un suivi produit rapproché."
            alignment="center"
            className="mx-auto max-w-3xl"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-neutral-200 bg-white/80 p-6 text-sm text-neutral-600 shadow-card dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-300">
              <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                Un site a votre image
              </h4>
              <p className="mt-2">
                Chaque vitrine est conçue sur mesure pour raconter votre histoire, renforcer votre crédibilité et séduire vos futurs clients.
              </p>
            </div>
            <div className="rounded-3xl border border-neutral-200 bg-white/80 p-6 text-sm text-neutral-600 shadow-card dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-300">
              <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                Décisions basées sur les résultats
              </h4>
              <p className="mt-2">
                Nous analysons le comportement de vos visiteurs pour optimiser continuellement votre site et maximiser son impact.
              </p>
            </div>
            <div className="rounded-3xl border border-neutral-200 bg-white/80 p-6 text-sm text-neutral-600 shadow-card dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-300">
              <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                Simplicité connectée
              </h4>
              <p className="mt-2">
                Nous créons des sites intuitifs qui facilitent vos opérations et optimisent votre temps au jour le jour.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <SectionHeading
            eyebrow="Autres services"
            title="Découvrez aussi"
            alignment="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services
              .filter((item) => item.slug !== service.slug)
              .slice(0, 2)
              .map((item) => (
                <ServiceCard key={item.slug} service={item} />
              ))}
          </div>
        </Container>
      </section>

      <ContactCta />
    </div>
  );
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="py-12 md:py-16">
        <Container>
          <h1 className="text-center text-3xl font-semibold text-neutral-900 dark:text-white md:text-4xl">
            {service.name}
          </h1>
        </Container>
      </section>
      <ServiceContent service={service} />
    </>
  );
}
