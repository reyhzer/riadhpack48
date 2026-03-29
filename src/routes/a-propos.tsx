import { createFileRoute } from '@tanstack/react-router'
import { BadgeCheck, Compass, Factory, Shield } from 'lucide-react'

const points = [
  {
    title: 'Presentation de l\'usine',
    text: 'Site de production implante a Relizane, organise pour des volumes reguliers et des commandes sur mesure.',
    icon: Factory,
  },
  {
    title: 'Expertise en tissage et fabrication',
    text: 'Maitrise des etapes de tissage, decoupe, assemblage et finition pour des sacs adaptes a chaque secteur.',
    icon: BadgeCheck,
  },
  {
    title: 'Qualite et controle',
    text: 'Protocoles de verification stricts pour assurer resistance, fiabilite et conformite des produits.',
    icon: Shield,
  },
  {
    title: 'Vision et engagement',
    text: 'Developper des solutions d\'emballage durables et competitives pour les clients algeriens et internationaux.',
    icon: Compass,
  },
]

export const Route = createFileRoute('/a-propos')({
  head: () => ({
    meta: [
      { title: 'A propos | Riadh Pack' },
      {
        name: 'description',
        content:
          'Decouvrez l\'usine Riadh Pack, son expertise en tissage de sacs polypropylene, son controle qualite et ses engagements.',
      },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <section className="site-container py-12">
      <header className="mb-8">
        <p className="uppercase tracking-[0.16em] text-xs text-zinc-900 font-bold">A propos de Riadh Pack</p>
        <h1 className="section-title text-4xl md:text-6xl font-bold">Usine de tissage & fabrication</h1>
      </header>

      <div className="section-shell p-7 md:p-10 mb-8 grid gap-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-slate-700">
            Riadh Pack accompagne les professionnels avec une offre fiable de sacs tisses en polypropylene. L\'entreprise
            combine capacite industrielle, exigence qualite et souplesse de production pour repondre aux besoins de
            secteurs exigeants.
          </p>
          <p className="text-slate-700 mt-4">
            L\'objectif est de fournir des emballages performants qui soutiennent la productivite des clients, de la
            production locale a l\'export.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1400&q=80"
          alt="Atelier de fabrication textile industriel"
          className="rounded-2xl"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {points.map((point) => {
          const Icon = point.icon
          return (
            <article key={point.title} className="info-card p-6">
              <Icon size={30} className="text-zinc-900 mb-3" />
              <h2 className="text-3xl font-bold mb-2">{point.title}</h2>
              <p className="text-sm text-slate-700">{point.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
