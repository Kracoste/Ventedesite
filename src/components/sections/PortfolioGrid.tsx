"use client";

import Image from "next/image";
import { useState } from "react";
import { projects, projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<"all" | (typeof projectCategories)[number]["value"]>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center gap-2">
        <FilterChip
          label="Tous"
          isActive={activeCategory === "all"}
          onClick={() => setActiveCategory("all")}
        />
        {projectCategories.map((category) => (
          <FilterChip
            key={category.value}
            label={category.label}
            isActive={activeCategory === category.value}
            onClick={() => setActiveCategory(category.value)}
          />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group h-full overflow-hidden rounded-3xl border border-neutral-200 bg-white/80 shadow-card transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_32px_80px_-48px_rgba(28,125,255,0.5)] dark:border-neutral-800 dark:bg-neutral-900/80"
          >
            <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
              <Image
                src={project.image}
                alt={project.name}
                width={640}
                height={360}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                <span>{project.category}</span>
                <span className="truncate text-ellipsis">
                  {project.technologies.join(" • ")}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                {project.name}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                {project.description}
              </p>
              <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                {project.results.map((result) => (
                  <li key={result} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600"
                >
                  Voir le site
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
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

type FilterChipProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

function FilterChip({ label, isActive, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition",
        isActive
          ? "border-brand-400 bg-brand-50 text-brand-700 dark:border-brand-400/40 dark:bg-brand-500/20 dark:text-brand-200"
          : "border-neutral-200 bg-white/70 text-neutral-600 hover:border-brand-200 hover:text-brand-600 dark:border-neutral-700 dark:bg-neutral-900/70 dark:text-neutral-300"
      )}
    >
      {label}
    </button>
  );
}
