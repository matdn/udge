"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { LinkButton } from "@/components/LinkButton";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/programme", label: "Programme" },
  { href: "/12-mesures", label: "12 mesures" },
  { href: "/equipe", label: "L’équipe" },
  { href: "/actus", label: "Actualités" },
  { href: "/documents", label: "Documents" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-3">
        <Link href="/" className="font-semibold text-lg tracking-tight text-black">
          Le Vésinet pour tous
          <span className="ml-2 hidden text-xs font-normal text-black/60 sm:inline">
            Municipales 2026
          </span>
        </Link>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 ring-1 ring-black/15 shadow-sm transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/40"
        >
          <span className="mr-2 inline-grid gap-1" aria-hidden="true">
            <span className="h-0.5 w-4 rounded bg-zinc-950" />
            <span className="h-0.5 w-4 rounded bg-zinc-950" />
            <span className="h-0.5 w-4 rounded bg-zinc-950" />
          </span>
          Menu
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="absolute right-0 top-0 h-full w-full max-w-md border-l border-black/10 bg-white p-6 shadow-2xl"
          >
            <div className="rounded-3xl bg-white p-4 ring-1 ring-black/10">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-black">Navigation</p>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 ring-1 ring-black/15 shadow-sm transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/40"
                >
                  Fermer
                </button>
              </div>

              <div className="mt-4 grid gap-3">
                <LinkButton
                  href="/programme"
                  variant="primary"
                  onClick={() => setOpen(false)}
                >
                  Découvrir le programme
                </LinkButton>
                <div className="grid grid-cols-2 gap-2">
                  <LinkButton
                    href="/rejoindre"
                    variant="secondary"
                    onClick={() => setOpen(false)}
                  >
                    Nous rejoindre
                  </LinkButton>
                  <LinkButton
                    href="/contact"
                    variant="secondary"
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </LinkButton>
                </div>
              </div>

              <nav aria-label="Toutes les pages" className="mt-5">
                <ul className="grid gap-1">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-950 ring-1 ring-black/10 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/40"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <p className="mt-5 text-xs text-black/55">
                Astuce : appuyez sur Échap pour fermer.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
