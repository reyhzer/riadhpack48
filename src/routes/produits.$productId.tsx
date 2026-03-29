import { Link, createFileRoute, notFound } from '@tanstack/react-router'

import products from '@/data/products'

export const Route = createFileRoute('/produits/$productId')({
  loader: async ({ params }) => {
    const product = products.find((item) => item.id === params.productId)
    if (!product) {
      throw notFound()
    }
    return product
  },
  component: ProduitDetail,
})

function ProduitDetail() {
  const product = Route.useLoaderData()

  return (
    <section className="site-container py-12">
      <Link to="/produits" className="btn btn-secondary w-fit mb-6">
        Retour a la gamme
      </Link>

      <article className="section-shell overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full max-h-[460px] object-cover" />
        <div className="p-7 md:p-10">
          <h1 className="section-title text-4xl md:text-6xl font-bold mb-3">{product.name}</h1>
          <p className="text-lg text-slate-700 mb-6">{product.shortDescription}</p>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="info-card p-5">
              <h2 className="text-2xl font-bold mb-2">Applications</h2>
              <p className="text-sm text-slate-700">{product.useCases}</p>
            </div>
            <div className="info-card p-5">
              <h2 className="text-2xl font-bold mb-2">Options de personnalisation</h2>
              <p className="text-sm text-slate-700">{product.customization}</p>
            </div>
          </div>
          <div className="mt-8">
            <Link to="/contact" className="btn btn-primary w-fit">
              Demander un devis pour ce produit
            </Link>
          </div>
        </div>
      </article>
    </section>
  )
}
