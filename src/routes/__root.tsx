import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'
import { MessageCircle } from 'lucide-react'

import '../styles.css'

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/produits', label: 'Produits' },
  { to: '/a-propos', label: 'A propos' },
  { to: '/personnalisation', label: 'Personnalisation' },
  { to: '/contact', label: 'Contact' },
]

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Riadh Pack - Usine de Tissage & Fabrication de Sacs',
      },
      {
        name: 'description',
        content:
          'Riadh Pack est fabricant de sacs tisses en polypropylene pour les secteurs agricole et industriel en Algerie et a l\'international.',
      },
      {
        name: 'keywords',
        content:
          'sacs tisses, sacs polypropylene, sacs industriels Algerie, sacs agricoles, sacs personnalises',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        <header className="site-header">
          <div className="site-container flex items-center justify-between gap-4 py-4">
            <Link to="/" className="brand-mark" aria-label="Riadh Pack accueil">
              <span className="text-xl font-black leading-tight">Riadh Pack</span>
              <span className="text-xs uppercase tracking-[0.16em] text-zinc-300/80">
                Usine de Tissage & Fabrication de Sacs
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((item) => (
                <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: 'nav-link is-active' }}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link to="/contact" className="btn btn-primary hidden sm:inline-flex">
              Demander un devis
            </Link>
          </div>
          <div className="site-container md:hidden pb-3 overflow-x-auto">
            <div className="flex items-center gap-4 min-w-max">
              {navLinks.map((item) => (
                <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: 'nav-link is-active' }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-white/25 bg-slate-950/80 mt-16">
          <div className="site-container py-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-bold text-lg">Riadh Pack</p>
              <p className="text-sm text-slate-300">
                Z.I BELHACEL, Relizane | +213 560 04 25 26 | riadh48000@hotmail.com
              </p>
            </div>
            <Link to="/contact" className="btn btn-secondary w-fit">
              Lancer votre projet de sacs sur mesure
            </Link>
          </div>
        </footer>

        <a
          href="https://wa.me/213560042526"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-fab"
          aria-label="Contacter Riadh Pack sur WhatsApp"
        >
          <MessageCircle size={20} />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
        <Scripts />
      </body>
    </html>
  )
}
