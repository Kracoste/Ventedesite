import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

type LinkButtonProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> & {
    href: string;
    className?: string;
  };

const baseStyles = "inline-flex items-center justify-center font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-full";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-black !text-white hover:bg-black/90 focus-visible:outline-black/80 dark:bg-black dark:!text-white dark:hover:bg-black/80 dark:focus-visible:outline-white [&>*]:!text-white dark:[&>*]:!text-white",
  secondary:
    "bg-white text-black border border-black/10 hover:border-black/20 focus-visible:outline-black/70 dark:bg-black dark:text-white dark:border-white/20 dark:hover:border-white/40 dark:focus-visible:outline-white/50",
  ghost:
    "bg-transparent text-black hover:bg-black/5 focus-visible:outline-black/60 dark:text-white dark:hover:bg-white/10 dark:focus-visible:outline-white/40",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-6 py-2 text-sm",
  lg: "px-8 py-3 text-base",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
