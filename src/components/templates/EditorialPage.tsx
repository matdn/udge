import type { ReactNode } from "react";
import { LinkButton } from "@/components/LinkButton";

export type TocItem = {
  href: string;
  label: string;
  description?: string;
};

type Props = {
  title: string;
  chapo?: string;
  toc?: TocItem[];
  actions?: ReactNode | null;
  children: ReactNode;
};

export function EditorialPage({ title, chapo, toc, actions, children }: Props) {
  const defaultActions = (
    <>
      <LinkButton href="/programme" variant="primary">
        Découvrir le programme
      </LinkButton>
      <LinkButton href="/rejoindre" variant="secondary">
        Nous rejoindre
      </LinkButton>
    </>
  );

  return (
    <main id="main-content" className="bg-programme min-h-dvh">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <header className="card p-7 md:p-9">
          <h1 className="text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            {title}
          </h1>
          {chapo ? (
            <p className="mt-4 max-w-5xl text-base leading-relaxed text-zinc-700 md:text-lg">
              {chapo}
            </p>
          ) : null}
          {actions === null ? null : (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {actions ?? defaultActions}
            </div>
          )}
        </header>

        {toc && toc.length ? (
          <section className="mt-6 md:mt-8">
            <div className="card p-7 md:p-9">
              <p className="kicker">TABLE DES MATIÈRES</p>
              <nav aria-label="Table des matières" className="mt-6">
                <ul className="grid gap-3 md:grid-cols-2">
                  {toc.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="block rounded-2xl bg-white p-4 ring-1 ring-black/10 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/40"
                      >
                        <p className="text-sm font-semibold text-zinc-950">{item.label}</p>
                        {item.description ? (
                          <p className="mt-1 text-sm text-zinc-600">{item.description}</p>
                        ) : null}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </section>
        ) : null}

        <article className="programme mt-6 grid gap-6 md:mt-8">{children}</article>

     
      </div>
    </main>
  );
}
