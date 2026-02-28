import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const variantClass: Record<Variant, string> = {
  primary:
    "rounded-full bg-[#ffd84a] px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm ring-1 ring-black/10 transition hover:bg-[#ffcf2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/40",
  secondary:
    "rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 ring-1 ring-black/15 shadow-sm transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/40",
  ghost:
    "rounded-full px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-950/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/40",
};

export function LinkButton({
  href,
  children,
  variant = "secondary",
  className,
  ariaLabel,
  onClick,
}: Props) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
      className={[variantClass[variant], className].filter(Boolean).join(" ")}
    >
      {children}
    </Link>
  );
}
