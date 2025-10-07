"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ctaLink, primaryLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/90">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          weboria
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-300 lg:flex">
          {primaryLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition hover:text-neutral-900 dark:hover:text-neutral-50",
                  isActive && "text-neutral-900 dark:text-neutral-50"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={ctaLink.href} size="md">
            {ctaLink.label}
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus-visible:outline-neutral-500 lg:hidden"
          aria-label="Ouvrir le menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={cn(
          "px-6 pb-6 pt-2 transition-all duration-200 lg:hidden",
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-4 text-base font-medium text-neutral-700 shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
          {primaryLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={cn(
                  "rounded-xl px-4 py-3 transition hover:bg-neutral-100 dark:hover:bg-neutral-800",
                  isActive && "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <ButtonLink href={ctaLink.href} className="w-full" onClick={closeMenu}>
            {ctaLink.label}
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
