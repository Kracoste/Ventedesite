import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez l'équipe weboria pour obtenir un devis ou démarrer un projet Next.js.",
};

const contactHighlights = [
  {
    title: "Temps de réponse",
    description: "Moins de 24h ouvrées",
  },
  {
    title: "Atelier découverte",
    description: "Offert pour tout nouveau projet",
  },
  {
    title: "Disponibilité",
    description: "Du lundi au vendredi, 9h – 18h",
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-24">
      <PageHeader
        kicker="Contact"
        title="Prêts pour un site qui convertit ?"
        description="Expliquez-nous votre projet, vos objectifs et vos contraintes. Nous revenons vers vous avec un plan personnalisé et un budget réaliste."
      />

      <section>
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-neutral-200 bg-white/80 p-6 text-sm text-neutral-600 shadow-card dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-300">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                Coordonnées directes
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <span className="text-xs uppercase tracking-[0.28em] text-neutral-500">Email</span>
                  <p>
                    <a
                      href={`mailto:${companyInfo.contact.email}`}
                      className="font-medium text-neutral-900 underline-offset-4 hover:underline dark:text-white"
                    >
                      {companyInfo.contact.email}
                    </a>
                  </p>
                </li>
                <li>
                  <span className="text-xs uppercase tracking-[0.28em] text-neutral-500">Téléphone</span>
                  <p>
                    <a
                      href={`tel:${companyInfo.contact.phone.replace(/\s/g, "")}`}
                      className="font-medium text-neutral-900 underline-offset-4 hover:underline dark:text-white"
                    >
                      {companyInfo.contact.phone}
                    </a>
                  </p>
                </li>
                <li>
                  <span className="text-xs uppercase tracking-[0.28em] text-neutral-500">Adresse</span>
                  <p className="font-medium text-neutral-900 dark:text-white">
                    {companyInfo.contact.address}
                  </p>
                </li>
                <li>
                  <span className="text-xs uppercase tracking-[0.28em] text-neutral-500">Horaires</span>
                  <p className="font-medium text-neutral-900 dark:text-white">
                    {companyInfo.contact.hours}
                  </p>
                </li>
              </ul>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {contactHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-neutral-200 bg-white/80 p-4 text-sm text-neutral-600 shadow-card dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-300"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-600">
                    {item.title}
                  </p>
                  <p className="mt-2 text-neutral-900 dark:text-white">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>
    </div>
  );
}
