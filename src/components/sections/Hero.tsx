import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { ctaLink } from "@/data/navigation";
import { stats } from "@/data/company";

export function Hero() {
  return (
    <section className="pb-16 pt-10 md:pb-24 md:pt-12">
      <Container className="flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-neutral-500 shadow-sm backdrop-blur dark:border-white/20 dark:bg-neutral-900/80 dark:text-neutral-400">
            <span>Sites performants</span>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-neutral-900 dark:text-neutral-50 md:text-5xl">
              Créez votre site web professionnel dès aujourd&apos;hui
            </h1>
            <p className="max-w-xl text-lg text-neutral-600 dark:text-neutral-300">
              Weboria conçoit des expériences web modernes basées sur Next.js : vitrines, e-commerce et solutions sur-mesure pensées pour votre entreprise.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <ButtonLink href={ctaLink.href} size="lg">
              {ctaLink.label}
            </ButtonLink>
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-neutral-700 underline-offset-4 transition hover:text-neutral-900 hover:underline dark:text-neutral-200 dark:hover:text-white"
            >
              Voir nos projets
            </Link>
          </div>
          <dl className="grid max-w-xl grid-cols-2 gap-6 rounded-2xl border border-neutral-200 bg-white/80 p-6 text-sm shadow-lg backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <dt className="text-xs uppercase tracking-[0.28em] text-neutral-500">
                  {stat.label}
                </dt>
                <dd className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative flex-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_40px_120px_-60px_rgba(37,99,235,0.4)] dark:border-neutral-800 dark:bg-neutral-900">
            <Image
              src="/images/hero-dashboard.svg"
              alt="Interface Next.js moderne"
              width={640}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-8 left-1/2 w-52 -translate-x-1/2 rounded-2xl border border-neutral-200 bg-white/90 p-4 text-sm shadow-xl backdrop-blur dark:border-neutral-700 dark:bg-neutral-900/90">
            <p className="font-semibold text-neutral-900 dark:text-neutral-50">
              Audit offert
            </p>
            <p className="text-neutral-600 dark:text-neutral-300">
              Analyse de vos performances actuelles et plan d&apos;action personnalisé.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
