import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, CheckCircle2, Clock3, Cog, ShieldCheck } from 'lucide-react'

import products from '@/data/products'

const highlights = [
  {
    title: 'Production sur mesure',
    text: 'Capacites flexibles pour repondre aux besoins specifiques de chaque client B2B.',
    icon: Cog,
  },
  {
    title: 'Haute qualite',
    text: 'Controles rigoureux de la matiere premiere jusqu\'au produit fini.',
    icon: ShieldCheck,
  },
  {
    title: 'Livraison rapide',
    text: 'Organisation industrielle optimisee pour des delais fiables et competitifs.',
    icon: Clock3,
  },
  {
    title: 'Experience industrielle',
    text: 'Savoir-faire confirme en tissage et fabrication de sacs polypropylene.',
    icon: CheckCircle2,
  },
]

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Riadh Pack | Fabricant de sacs tisses en polypropylene' },
      {
        name: 'description',
        content:
          'Fabricant algerien de sacs tisses en polypropylene: production sur commande, qualite industrielle et livraison rapide.',
      },
    ],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <div>
      <section className="hero site-container">
        <div className="hero-panel p-7 md:p-12 lg:p-16">
          <p className="uppercase tracking-[0.18em] text-emerald-300 text-xs md:text-sm">
            Riadh Pack - Relizane, Algerie
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 text-white">
            Fabricant de sacs tisses en polypropylene
          </h1>
          <p className="text-lg md:text-2xl mt-5 text-slate-100 max-w-3xl">
            Production sur commande - Qualite industrielle
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <Link to="/contact" className="btn btn-primary">
              Demander un devis
            </Link>
            <Link to="/produits" className="btn btn-secondary bg-white/95">
              Voir les produits <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="site-container mb-16">
        <div className="section-shell p-7 md:p-10 grid gap-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="section-title text-3xl md:text-5xl font-bold mb-4">Entreprise industrielle de reference</h2>
            <p className="text-slate-700">
              Riadh Pack est une usine specialisee dans le tissage et la fabrication de sacs en polypropylene tisse,
              destines aux secteurs agricole, alimentaire et industriel. Les productions sont adaptees aux besoins des
              clients en Algerie et sur les marches internationaux.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=80"
            alt="Ligne industrielle de fabrication"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      <section className="site-container mb-16">
        <h2 className="section-title text-3xl md:text-5xl font-bold mb-6">Nos avantages cles</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="stat-card p-6">
                <Icon className="text-emerald-700 mb-4" size={28} />
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-700 text-sm">{item.text}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="site-container mb-16">
        <div className="cta-band p-8 md:p-12 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Partenaire fiable pour vos besoins en sacs tisses</h2>
            <p className="mt-3 text-emerald-100 max-w-3xl">
              Du prototype a la production en serie, chaque commande beneficie d\'un accompagnement technique et d\'un
              suivi qualite.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link to="/personnalisation" className="btn btn-secondary">
              Personnaliser un modele
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Obtenir un devis rapide
            </Link>
          </div>
        </div>
      </section>

      <section className="site-container mb-16">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <h2 className="section-title text-3xl md:text-5xl font-bold">Galerie produits</h2>
          <Link to="/produits" className="btn btn-secondary w-fit">
            Explorer toute la gamme
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((product) => (
            <article key={product.id} className="product-card overflow-hidden">
              <img src={product.image} alt={product.name} loading="lazy" />
              <div className="p-4">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="text-sm text-slate-700 mt-2">{product.shortDescription}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
