"use client";

import { useMemo, useState, type ReactNode, type FormEventHandler } from "react";

const budgetOptions = [
  "< 2 000 €",
  "2 000 € – 5 000 €",
  "5 000 € – 10 000 €",
  "> 10 000 €",
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const budgetRadios = useMemo(
    () =>
      budgetOptions.map((option) => (
        <label
          key={option}
          className="flex cursor-pointer items-center gap-3 rounded-2xl border border-neutral-200 bg-white/70 px-4 py-3 text-sm text-neutral-600 transition hover:border-brand-200 hover:text-brand-600 dark:border-neutral-700 dark:bg-neutral-900/70 dark:text-neutral-300"
        >
          <input
            required
            type="radio"
            name="budget"
            value={option}
            className="h-4 w-4 accent-brand-500"
          />
          {option}
        </label>
      )),
    []
  );

  if (isSubmitted) {
    return (
      <div className="rounded-3xl border border-brand-100 bg-white/90 p-8 text-center shadow-card dark:border-brand-500/30 dark:bg-neutral-900/90">
        <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Merci pour votre message !
        </h3>
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
          Notre équipe revient vers vous sous 24h ouvrées avec un devis détaillé et les prochaines étapes.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-neutral-200 bg-white/90 p-8 shadow-card dark:border-neutral-800 dark:bg-neutral-900/90"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nom et prénom" htmlFor="name">
          <input
            id="name"
            name="name"
            required
            className={inputClassName}
            placeholder="Votre nom"
            autoComplete="name"
          />
        </Field>
        <Field label="Adresse email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClassName}
            placeholder="vous@entreprise.com"
            autoComplete="email"
          />
        </Field>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Entreprise" htmlFor="company">
          <input
            id="company"
            name="company"
            className={inputClassName}
            placeholder="Nom de votre entreprise"
            autoComplete="organization"
          />
        </Field>
        <Field label="Site actuel (optionnel)" htmlFor="website">
          <input
            id="website"
            name="website"
            className={inputClassName}
            placeholder="https://"
            autoComplete="url"
          />
        </Field>
      </div>
      <Field label="Votre besoin" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClassName}
          placeholder="Parlez-nous de votre projet, vos objectifs et le contexte."
        />
      </Field>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
          Budget estimatif
        </p>
        <div className="mt-3 grid gap-2 md:grid-cols-2">{budgetRadios}</div>
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-black/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:bg-white dark:text-black dark:hover:bg-white/90"
      >
        Envoyer ma demande
      </button>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        En envoyant ce formulaire, vous acceptez d&apos;être recontacté·e pour échanger sur votre projet.
      </p>
    </form>
  );
}

const inputClassName =
  "w-full rounded-2xl border border-neutral-200 bg-white/60 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-neutral-700 dark:bg-neutral-900/70 dark:text-neutral-200 dark:placeholder:text-neutral-500";

type FieldProps = {
  label: string;
  htmlFor: string;
  children: ReactNode;
};

function Field({ label, htmlFor, children }: FieldProps) {
  return (
    <label className="flex flex-col gap-2 text-sm text-neutral-600 dark:text-neutral-300" htmlFor={htmlFor}>
      <span className="font-medium text-neutral-800 dark:text-neutral-100">{label}</span>
      {children}
    </label>
  );
}
