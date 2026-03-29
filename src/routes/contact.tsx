import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact | Riadh Pack' },
      {
        name: 'description',
        content:
          'Contactez Riadh Pack pour vos besoins en sacs tisses en polypropylene: devis, personnalisation et informations techniques.',
      },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')

    const form = event.currentTarget
    const data = new FormData(form)
    const encoded = new URLSearchParams()

    data.forEach((value, key) => {
      if (typeof value === 'string') {
        encoded.append(key, value)
      }
    })

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded.toString(),
      })

      if (!response.ok) {
        throw new Error('Echec de soumission')
      }

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="site-container py-12">
      <header className="mb-8">
        <p className="uppercase tracking-[0.16em] text-xs text-emerald-700 font-bold">Contact commercial</p>
        <h1 className="section-title text-4xl md:text-6xl font-bold">Demander un devis</h1>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="section-shell p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-5">Coordonnees</h2>
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start gap-3">
              <Phone size={20} className="text-emerald-700 mt-1" />
              <div>
                <p className="font-bold">Telephone</p>
                <p>0560 04 25 26</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={20} className="text-emerald-700 mt-1" />
              <div>
                <p className="font-bold">Email</p>
                <p>riadh48000@hotmail.com</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-emerald-700 mt-1" />
              <div>
                <p className="font-bold">Adresse</p>
                <p>Z.I BELHACEL, Relizane</p>
              </div>
            </li>
          </ul>
        </div>

        <form
          name="contact-riadh-pack"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="section-shell p-6 md:p-8"
        >
          <input type="hidden" name="form-name" value="contact-riadh-pack" />
          <p className="hidden">
            <label>
              Ne pas remplir: <input name="bot-field" />
            </label>
          </p>

          <h2 className="text-3xl font-bold mb-5">Formulaire de contact</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700">
              Nom complet
              <input
                type="text"
                name="name"
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
                placeholder="Votre nom"
              />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Entreprise
              <input
                type="text"
                name="company"
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
                placeholder="Nom de l'entreprise"
              />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Email
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
                placeholder="contact@entreprise.com"
              />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Telephone
              <input
                type="tel"
                name="phone"
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
                placeholder="+213..."
              />
            </label>
            <label className="text-sm font-semibold text-slate-700 md:col-span-2">
              Votre besoin
              <textarea
                name="message"
                rows={5}
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
                placeholder="Type de sacs, quantite, dimensions, delais..."
              />
            </label>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
              {status === 'loading' ? 'Envoi...' : 'Envoyer la demande'}
            </button>
            {status === 'success' ? <p className="text-sm text-emerald-700">Demande envoyee avec succes.</p> : null}
            {status === 'error' ? <p className="text-sm text-red-700">Une erreur est survenue. Merci de reessayer.</p> : null}
          </div>
        </form>
      </div>

      <div className="section-shell p-3 md:p-4 mt-8">
        <iframe
          title="Riadh Pack - Z.I BELHACEL, Relizane"
          src="https://www.google.com/maps?q=Z.I+BELHACEL,+Relizane&output=embed"
          loading="lazy"
          className="w-full h-[360px] rounded-xl border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
