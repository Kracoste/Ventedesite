import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  alignment?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  alignment = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", alignment === "center" && "text-center", className)}>
      {eyebrow ? (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-neutral-600 dark:text-neutral-300 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
