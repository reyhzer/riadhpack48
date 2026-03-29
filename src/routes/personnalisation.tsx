import { Link, createFileRoute } from '@tanstack/react-router'
import { Palette, Ruler, Settings2 } from 'lucide-react'

const options = [
  {
    title: 'Impression logo',
    text: 'Impression de logo, informations techniques et identite visuelle pour renforcer la notoriete de votre marque.',
    icon: Palette,
  },
  {
    title: 'Dimensions',
    text: 'Largeur, hauteur et capacite adaptees a vos lignes de conditionnement et a vos standards logistiques.',
    icon: Ruler,
  },
  {
    title: 'Types de sacs',
    text: 'Sacs standards, a valve, fond carre ou techniques, avec choix des finitions selon vos contraintes.',
    icon: Settings2,
  },
]

const mockups = [
  'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1300&q=80',
  'https://images.unsplash.com/photo-1635865165118-917ed9e20936?auto=format&fit=crop&w=1300&q=80',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1300&q=80',
]

export const Route = createFileRoute('/personnalisation')({
  head: () => ({
    meta: [
      { title: 'Personnalisation | Riadh Pack' },
      {
        name: 'description',
        content:
          'Production de sacs personnalises avec impression logo, choix des dimensions et adaptation du type de sac.',
      },
    ],
  }),
  component: PersonnalisationPage,
})

function PersonnalisationPage() {
  return (
    <section className="site-container py-12">
      <header className="mb-8">
        <p className="uppercase tracking-[0.16em] text-xs text-zinc-900 font-bold">Production sur mesure</p>
        <h1 className="section-title text-4xl md:text-6xl font-bold">Personnalisation</h1>
        <p className="mt-3 text-slate-700 max-w-4xl">
          Riadh Pack realise des sacs sur cahier des charges pour les industriels et acteurs agroalimentaires qui
          recherchent un emballage performant et une image de marque coherente.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-3 mb-10">
        {options.map((option) => {
          const Icon = option.icon
          return (
            <article key={option.title} className="info-card p-6">
              <Icon size={28} className="text-zinc-900 mb-3" />
              <h2 className="text-3xl font-bold mb-2">{option.title}</h2>
              <p className="text-sm text-slate-700">{option.text}</p>
            </article>
          )
        })}
      </div>

      <div className="section-shell p-6 md:p-8 mb-10">
        <h2 className="section-title text-3xl md:text-5xl font-bold mb-4">Exemples de mockups</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mockups.map((image) => (
            <img
              key={image}
              src={image}
              alt="Exemple de sac personnalise"
              loading="lazy"
              className="rounded-xl aspect-[4/3] object-cover"
            />
          ))}
        </div>
      </div>

      <div className="cta-band p-8 md:p-10 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Un projet de sac personnalise ?</h2>
          <p className="text-zinc-200 mt-2">Les equipes techniques accompagnent vos besoins de la maquette a la livraison.</p>
        </div>
        <Link to="/contact" className="btn btn-secondary w-fit">
          Demander un devis
        </Link>
      </div>
    </section>
  )
}
