import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: ReactNode;
  kicker?: string;
  actions?: ReactNode;
  alignment?: "left" | "center";
}

export function PageHeader({
  title,
  description,
  kicker,
  actions,
  alignment = "left",
}: PageHeaderProps) {
  const isCenter = alignment === "center";

  return (
    <div className="border-b border-neutral-200 bg-white/80 py-4 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
      <Container
        className={cn(
          "flex flex-col gap-6",
          isCenter
            ? "items-center text-center md:flex-col md:items-center md:justify-center"
            : "md:flex-row md:items-end md:justify-between"
        )}
      >
        <div
          className={cn("space-y-4", isCenter && "max-w-3xl text-center md:text-center")}
        >
          {kicker ? (
            <p
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.28em] text-brand-600",
                isCenter && "mx-auto"
              )}
            >
              {kicker}
            </p>
          ) : null}
          <h1 className="text-3xl font-semibold text-neutral-900 dark:text-white md:text-4xl">
            {title}
          </h1>
          {description ? (
            <div
              className={cn(
                "max-w-2xl text-base text-neutral-600 dark:text-neutral-300",
                isCenter && "mx-auto"
              )}
            >
              {description}
            </div>
          ) : null}
        </div>
        {actions ? (
          <div className={cn("flex-shrink-0", isCenter && "md:mt-4")}>{actions}</div>
        ) : null}
      </Container>
    </div>
  );
}
