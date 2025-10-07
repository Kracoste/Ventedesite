import type { Metadata } from "next";
import { ContactCta } from "@/components/sections/ContactCta";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'équipe weboria : designers, développeurs et stratèges réunis pour créer des expériences Next.js performantes.",
};

const teamMembers = [
  {
    name: "Hugo Allou",
    role: "Product & strategy",
    bio: "Pilote les ateliers de cadrage et définit la roadmap produit avec nos clients.",
  },
  {
    name: "Lina Moreau",
    role: "Lead designer",
    bio: "Conçoit des expériences utilisateur engageantes basées sur les retours terrain.",
  },
  {
    name: "Arthur Lemoine",
    role: "Tech lead Next.js",
    bio: "Garantit la qualité technique, la performance et la scalabilité des projets.",
  },
  {
    name: "Sonia Ndiaye",
    role: "Delivery manager",
    bio: "Coordonne les équipes et assure la livraison sans friction.",
  },
];

const milestones = [
  {
    year: "2018",
    title: "Création du studio",
    description: "Lancement de weboria pour démocratiser les sites performants.",
  },
  {
    year: "2020",
    title: "Passage à Next.js",
    description: "Adoption totale de Next.js pour des sites plus rapides et modulaires.",
  },
  {
    year: "2022",
    title: "Pôle data & CRO",
    description: "Création d'une équipe dédiée à l'optimisation continue et aux tests A/B.",
  },
  {
    year: "2024",
    title: "120 projets livrés",
    description: "Cap des 120 projets dépassé avec un NPS de 75.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-24">
      <PageHeader
        kicker="À propos"
        title="Une équipe pluridisciplinaire au service de vos produits digitaux"
        description={companyInfo.description}
      />

      <section>
        <Container className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Vision"
              title="Créer des expériences web mémorables et mesurables"
              description="Nous combinons recherche utilisateur, design systémique et excellence technique pour proposer des solutions évolutives."
            />
            <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
              {companyInfo.values.map((value) => (
                <li
                  key={value}
                  className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white/80 p-4 dark:border-neutral-800 dark:bg-neutral-900/80"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white/80 p-8 shadow-card dark:border-neutral-800 dark:bg-neutral-900/80">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              {companyInfo.name} en chiffres
            </h3>
            <dl className="mt-6 grid gap-4 text-sm text-neutral-600 dark:text-neutral-300">
              <div>
                <dt className="uppercase tracking-[0.28em] text-xs text-neutral-500">
                  Clients accompagnés
                </dt>
                <dd className="text-2xl font-semibold text-neutral-900 dark:text-white">
                  120+
                </dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.28em] text-xs text-neutral-500">
                  Experts internes
                </dt>
                <dd className="text-2xl font-semibold text-neutral-900 dark:text-white">
                  8
                </dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.28em] text-xs text-neutral-500">
                  Satisfaction moyenne
                </dt>
                <dd className="text-2xl font-semibold text-neutral-900 dark:text-white">
                  4,9 / 5
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <SectionHeading
            eyebrow="Équipe"
            title="Vos interlocuteurs"
            alignment="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl border border-neutral-200 bg-white/80 p-6 text-sm text-neutral-600 shadow-card dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-300"
              >
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
                  {member.role}
                </p>
                <p className="mt-3">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <SectionHeading
            eyebrow="Étapes clés"
            title="Notre histoire"
            alignment="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {milestones.map((item) => (
              <div
                key={item.year}
                className="rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-card dark:border-neutral-800 dark:bg-neutral-900/80"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-600">
                  {item.year}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-neutral-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                  {item.description}
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
