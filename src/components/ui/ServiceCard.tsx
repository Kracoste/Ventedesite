import Link from "next/link";
import type { Service } from "@/data/services";

export type ServiceCardVariant = "compact" | "detailed";

type ServiceCardProps = {
  service: Service;
  variant?: ServiceCardVariant;
};

export function ServiceCard({ service, variant = "compact" }: ServiceCardProps) {
  const showAllFeatures = variant === "detailed";

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col gap-4 rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-card transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_32px_80px_-48px_rgba(28,125,255,0.5)] dark:border-neutral-800 dark:bg-neutral-900/80"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold text-neutral-900 transition group-hover:text-brand-600 dark:text-neutral-50">
          {service.name}
        </h3>
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">
          {service.timeline}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300">{service.summary}</p>
      <ul className="mt-2 space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
        {(showAllFeatures ? service.features : service.features.slice(0, 3)).map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-2 text-sm font-semibold text-brand-600">
        <span>{service.startingPrice}</span>
        <span className="inline-flex items-center gap-2 text-neutral-700 transition group-hover:translate-x-1 group-hover:text-brand-600 dark:text-neutral-300">
          Découvrir
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            className="h-4 w-4"
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
