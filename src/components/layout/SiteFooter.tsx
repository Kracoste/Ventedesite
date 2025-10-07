import Link from "next/link";
import { ctaLink, primaryLinks } from "@/data/navigation";
import { companyInfo } from "@/data/company";
import { Container } from "@/components/layout/Container";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-neutral-200 bg-neutral-50 py-12 text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300">
      <Container className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            <p className="text-sm uppercase tracking-[0.28em] text-neutral-500">
              weboria
            </p>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            {companyInfo.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-neutral-900 dark:hover:text-neutral-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={ctaLink.href}
                className="transition hover:text-neutral-900 dark:hover:text-neutral-50"
              >
                {ctaLink.label}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="transition hover:text-neutral-900 dark:hover:text-neutral-50"
              >
                {companyInfo.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${companyInfo.contact.phone.replace(/\s/g, "")}`}
                className="transition hover:text-neutral-900 dark:hover:text-neutral-50"
              >
                {companyInfo.contact.phone}
              </a>
            </li>
            <li>{companyInfo.contact.address}</li>
            <li>{companyInfo.contact.hours}</li>
          </ul>
          <div className="mt-4 flex gap-3 text-sm font-medium">
            {companyInfo.socialLinks.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                className="transition hover:text-neutral-900 dark:hover:text-neutral-50"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <Container className="mt-12 border-t border-neutral-200 pt-6 text-xs text-neutral-500 dark:border-neutral-800">
        <p>© {new Date().getFullYear()} {companyInfo.name}. Tous droits réservés.</p>
      </Container>
    </footer>
  );
}
