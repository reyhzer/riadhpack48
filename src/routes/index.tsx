import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: RiadhPackHome,
})

// ─── Icons ──────────────────────────────────────────────
function IconBag() { /* ... your icon code ... */ }
function IconWheat() { /* ... */ }
function IconFood() { /* ... */ }
function IconValve() { /* ... */ }
function IconCustom() { /* ... */ }
function IconAgri() { /* ... */ }
function IconIndustry() { /* ... */ }
function IconExport() { /* ... */ }
function IconQuality() { /* ... */ }
function IconPrice() { /* ... */ }
function IconDelay() { /* ... */ }
function IconPrint() { /* ... */ }
function IconScale() { /* ... */ }
function IconPhone() { /* ... */ }
function IconEmail() { /* ... */ }
function IconLocation() { /* ... */ }
function IconClock() { /* ... */ }

function IconWhatsApp() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  )
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await fetch('/contact-form.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...fields }),
    })
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-9 h-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">Message envoyé !</h3>
        <p className="text-gray-400">Nous reviendrons vers vous rapidement.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-2">Nom complet</label>
        <input type="text" name="name" required value={fields.name} onChange={handleChange}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white focus:border-red-600 outline-none" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-2">Adresse email</label>
        <input type="email" name="email" required value={fields.email} onChange={handleChange}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white focus:border-red-600 outline-none" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
        <textarea name="message" required rows={6} value={fields.message} onChange={handleChange}
          placeholder="Décrivez votre besoin (quantité, type de sac, impression...)"
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white focus:border-red-600 outline-none resize-none" />
      </div>
      <button type="submit" disabled={loading}
        className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl text-white font-bold tracking-widest uppercase transition-all">
        {loading ? 'Envoi en cours...' : 'Envoyer le message'}
      </button>
    </form>
  )
}

// ─── Main Component ──────────────────────────────────────────────────────────
function RiadhPackHome() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#produits', label: 'Produits' },
    { href: '#apropos', label: 'À propos' },
    { href: '#contact', label: 'Contact' },
  ]

  const products = [
    { icon: <IconBag />, title: 'Sacs tissés en polypropylène', desc: 'Sacs standard haute résistance pour charges lourdes.', use: 'Tous secteurs industriels', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
    { icon: <IconWheat />, title: 'Sacs agricoles', desc: 'Pour graines, engrais, compost. Résistants aux UV et humidité.', use: 'Agriculture & Élevage', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80' },
    { icon: <IconFood />, title: 'Sacs alimentaires', desc: 'Pour farine, sucre, semoule. Conformes aux normes alimentaires.', use: 'Agroalimentaire', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80' },
    { icon: <IconValve />, title: 'Sacs à valve', desc: 'Pour ciment, chaux, plâtre et poudres industrielles.', use: 'BTP & Industrie', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
    { icon: <IconCustom />, title: 'Sacs personnalisés', desc: 'Impression flexo jusqu\'à 6 couleurs avec votre logo.', use: 'Marques & Exportateurs', image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=600&q=80' },
    { icon: <IconScale />, title: 'Commandes en gros', desc: 'Grande capacité de production pour volumes importants.', use: 'Grossistes & Industriels', image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b8?w=600&q=80' },
  ]

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: 'Open Sans, sans-serif' }}>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-[1000] bg-black/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          
          {/* LOGO */}
          <a href="#accueil">
            <img src="/logo_riadhpack.png" alt="Riadh Pack" className="h-16" />
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                className="text-white/80 hover:text-white text-sm font-semibold tracking-widest uppercase">
                {link.label}
              </a>
            ))}

            <a href="#contact"
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl text-xs font-bold uppercase">
              DEMANDER UN DEVIS
            </a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-white text-3xl z-[1100]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-black border-t border-white/10 transition-all duration-300 overflow-hidden z-[999]
          ${menuOpen ? 'max-h-[400px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}
        >
          <div className="flex flex-col items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-red-600 px-6 py-3 rounded-xl font-bold"
            >
              DEMANDER UN DEVIS
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        id="accueil"
        className="relative flex items-center justify-center min-h-screen pt-20 z-0"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden z-0">
          
          {/* VIDEO (FIXED CLICK ISSUE) */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover pointer-events-none"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90 pointer-events-none" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-red-400 text-sm tracking-[3px] uppercase mb-6 font-semibold">
            FABRICANT ALGÉRIEN • DEPUIS 2015
          </p>

          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6">
            EMBALLAGE INDUSTRIEL<br />D'EXCELLENCE
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-10">
            Sacs en polypropylène tissé de haute qualité pour l'agriculture,
            l'agroalimentaire et l'industrie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-black px-10 py-4 font-bold rounded-xl"
            >
              OBTENIR UN DEVIS
            </a>

            <a
              href="https://wa.me/213560042526"
              className="border border-white px-10 py-4 rounded-xl"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* À PROPOS */}
      <section id="apropos" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="slideshow">
            <img src="/bg1.jpg" alt="" />
            <img src="/bg2.jpg" alt="" />
            <img src="/bg3.jpg" alt="" />
            <img src="/bg4.jpg" alt="" />
            <img src="/bg5.jpg" alt="" />
            <img src="/bg6.jpg" alt="" />
          </div>
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <p className="text-red-400 text-sm tracking-[0.2em] uppercase font-semibold mb-4">À PROPOS DE RIADH PACK</p>
                <h2 className="text-white text-5xl md:text-6xl font-bold leading-none">Un fabricant algérien<br />de confiance</h2>
              </div>
              <div className="max-w-lg text-white/90 text-lg leading-relaxed space-y-6">
                <p>Riadh Pack est spécialisée dans la fabrication de sacs en polypropylène tissé pour les secteurs agricole, alimentaire et industriel.</p>
                <p>Implantés à Relizane dans la zone industrielle Belhacel, nous combinons technologie moderne et savoir-faire local pour offrir des solutions de haute qualité à des prix compétitifs.</p>
              </div>
              <div className="flex gap-8">
                <div className="flex items-center gap-2"><span className="text-red-400 text-2xl">★</span> <span className="text-white">Qualité industrielle</span></div>
                <div className="flex items-center gap-2"><span className="text-red-400 text-2xl">★</span> <span className="text-white">Production locale</span></div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
                <img src="riadh pack 1.png" alt="Riadh Pack Usine" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white text-black px-8 py-5 rounded-2xl shadow-xl">
                <div className="font-bold text-2xl">Relizane</div>
                <div className="text-sm text-gray-600">Zone Industrielle Belhacel</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="produits" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-400 text-sm tracking-widest uppercase mb-3">NOTRE GAMME</p>
            <h2 className="text-white text-5xl font-bold">Nos Produits</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden group hover:border-red-600/50 transition-all">
                <div className="h-64 overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="text-red-500">{product.icon}</div>
                    <h3 className="text-white text-xl font-bold">{product.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{product.desc}</p>
                  <p className="text-red-400 text-xs tracking-widest mt-6 uppercase">{product.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo_riadhpack.png" alt="Riadh Pack" className="h-12 w-auto" />
                <div className="text-2xl font-bold tracking-wider">RIADH <span className="font-light text-gray-400">PACK</span></div>
              </div>
              <p className="text-gray-400">Fabricant algérien de sacs en polypropylène tissé de haute qualité.</p>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Liens Rapides</h4>
              <ul className="space-y-3 text-gray-400">
                {navLinks.map(l => <li key={l.href}><a href={l.href} className="hover:text-white">{l.label}</a></li>)}
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Contact</h4>
              <p className="text-gray-400">+213 560 04 25 26<br />
              riadh48000@hotmail.com<br />
              Zone Industrielle Belhacel, Relizane</p>
            </div>
          </div>

          <div className="text-center text-gray-500 text-xs mt-16">
            © 2026 Riadh Pack - Tous droits réservés
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/213560042526" target="_blank" rel="noopener noreferrer" 
         className="fixed bottom-6 right-6 bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform">
        <IconWhatsApp />
      </a>
    </div>
  )
}
