import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600">
          Page introuvable
        </p>
        <h1 className="text-4xl font-semibold text-neutral-900 dark:text-neutral-50">
          Oups ! Cette page s&apos;est perdue en production.
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-300">
          Vérifiez l&apos;URL ou revenez à l&apos;accueil pour explorer nos services de création de sites Next.js.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Retour à l&apos;accueil</ButtonLink>
        <Link
          href="/contact"
          className="rounded-full border border-neutral-200 px-6 py-2 text-sm font-semibold text-neutral-600 transition hover:border-brand-200 hover:text-brand-600 dark:border-neutral-700 dark:text-neutral-300"
        >
          Contacter l&apos;équipe
        </Link>
      </div>
    </div>
  );
}
