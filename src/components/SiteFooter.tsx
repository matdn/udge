import Link from "next/link";

const footerLinks = [
  { href: "/documents", label: "Documents" },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold text-zinc-950">Le Vésinet pour tous</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-700">
              Liste citoyenne d’Union de la gauche et des écologistes — Municipales 2026.
            </p>
            <p className="mt-3 text-xs text-zinc-600">Dates : 15 et 22 mars 2026</p>
          </div>

          <nav aria-label="Liens de bas de page">
            <ul className="grid gap-2 text-sm text-zinc-700">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link className="transition hover:text-zinc-950" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-black/10 pt-6 text-xs text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} — Site de campagne (Next.js)</p>
          <p>
            Besoin d’aide ? <Link className="underline hover:text-zinc-950" href="/contact">Contact</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
