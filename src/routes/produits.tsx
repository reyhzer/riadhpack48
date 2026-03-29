import { Link, createFileRoute } from '@tanstack/react-router'
import {
  BadgePercent,
  Box,
  Droplets,
  Factory,
  HardHat,
  Leaf,
  Package,
  ShieldCheck,
  Stamp,
  Wheat,
} from 'lucide-react'

import products from '@/data/products'

const iconMap = {
  package: Package,
  wheat: Wheat,
  factory: Factory,
  'hard-hat': HardHat,
  box: Box,
  'shield-check': ShieldCheck,
  'badge-percent': BadgePercent,
  droplets: Droplets,
  leaf: Leaf,
  stamp: Stamp,
} as const

export const Route = createFileRoute('/produits')({
  head: () => ({
    meta: [
      { title: 'Produits | Riadh Pack' },
      {
        name: 'description',
        content:
          'Gamme complete de sacs tisses en polypropylene: agricoles, industriels, alimentaires, a valve et personnalises.',
      },
    ],
  }),
  component: ProduitsPage,
})

function ProduitsPage() {
  return (
    <section className="site-container py-12">
      <header className="mb-8">
        <p className="uppercase tracking-[0.16em] text-xs text-emerald-700 font-bold">Catalogue professionnel</p>
        <h1 className="section-title text-4xl md:text-6xl font-bold">Nos Produits</h1>
        <p className="mt-3 text-slate-700 max-w-4xl">
          Riadh Pack fabrique des sacs tisses en polypropylene concus pour des usages industriels, agricoles et
          alimentaires. Chaque produit peut etre personnalise selon vos contraintes techniques et votre image de marque.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => {
          const Icon = iconMap[product.icon as keyof typeof iconMap]
          return (
            <article key={product.id} className="product-card overflow-hidden flex flex-col">
              <img src={product.image} alt={product.name} loading="lazy" />
              <div className="p-5 flex flex-col gap-3 h-full">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 w-10 h-10">
                    <Icon size={20} />
                  </span>
                  <h2 className="text-2xl font-bold leading-tight">{product.name}</h2>
                </div>
                <p className="text-sm text-slate-700">{product.shortDescription}</p>
                <p className="text-sm">
                  <span className="font-bold">Applications: </span>
                  {product.useCases}
                </p>
                <p className="text-sm">
                  <span className="font-bold">Personnalisation: </span>
                  {product.customization}
                </p>
                <div className="mt-auto pt-2">
                  <Link
                    to="/produits/$productId"
                    params={{ productId: product.id }}
                    className="btn btn-secondary w-fit"
                  >
                    Voir le detail
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
