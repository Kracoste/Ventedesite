import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function ContactCta() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-white/90 p-10 shadow-[0_40px_120px_-80px_rgba(28,125,255,0.6)] dark:border-brand-500/40 dark:bg-neutral-900/90">
          <div className="absolute -left-6 top-10 h-48 w-48 rounded-full bg-brand-100 blur-3xl dark:bg-brand-500/30" />
          <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-brand-200 blur-3xl dark:bg-brand-500/20" />
          <div className="relative grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600">
                Parlons de votre projet
              </p>
              <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white">
                Un devis détaillé sous 72h
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-300">
                Dites-nous où vous en êtes. Nous revenons vers vous avec un audit de votre existant, une estimation budgétaire et un plan d&apos;action.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <ButtonLink href="/contact" size="lg">
                Obtenir un devis détaillé
              </ButtonLink>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Temps de réponse moyen : moins de 24h ouvrées.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
