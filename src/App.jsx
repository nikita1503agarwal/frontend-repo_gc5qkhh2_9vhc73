import React, { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import {
  Menu,
  X,
  ArrowRight,
  Briefcase,
  Rocket,
  Users,
  Building2,
  Cpu,
  Zap,
  TrendingUp,
  Instagram,
  Linkedin,
} from 'lucide-react'

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-6')
            entry.target.classList.add('opacity-100', 'translate-y-0')
          }
        })
      },
      { threshold: 0.15 }
    )

    const els = document.querySelectorAll('[data-reveal]')
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

const navLinks = [
  { label: 'Studio', href: '#studio' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Model', href: '#model' },
  { label: 'Founders', href: '#founders' },
  { label: 'Contact', href: '#contact' },
]

function Tag({ children }) {
  return (
    <span className="text-xs md:text-[11px] rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-slate-300">
      {children}
    </span>
  )
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-slate-300 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-teal-400" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-300/90 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default function App() {
  useReveal()
  const [open, setOpen] = useState(false)
  const year = new Date().getFullYear()
  const heroRef = useRef(null)

  useEffect(() => {
    const closeOnHash = () => setOpen(false)
    window.addEventListener('hashchange', closeOnHash)
    return () => window.removeEventListener('hashchange', closeOnHash)
  }, [])

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white selection:bg-fuchsia-500/30 selection:text-white">
      {/* Backdrop gradient */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[60vh] w-[80vw] rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-fuchsia-700/40 via-purple-700/30 to-teal-600/30" />
      </div>

      {/* SECTION: Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0b0f14]/70 bg-[#0b0f14]/60 border-b border-white/5">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-white text-sm sm:text-base">
            M3rcury <span className="text-white/70">Ventures</span>
          </a>
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-teal-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:shadow-fuchsia-600/20 hover:scale-[1.02] active:scale-[0.99] transition-all"
            >
              Talk to the studio <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/5 bg-[#0b0f14]/95">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-slate-200 hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-teal-500 px-4 py-2 text-sm font-medium text-white shadow-sm"
              >
                Talk to the studio <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* SECTION: Hero */}
        <section ref={heroRef} id="studio" className="relative">
          <div className="relative h-[72vh] sm:h-[78vh] lg:h-[86vh] overflow-hidden">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="relative z-10 h-full bg-gradient-to-t from-[#0b0f14] via-[#0b0f14]/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 z-20">
              <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="max-w-2xl">
                  <h1
                    className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                    data-reveal
                  >
                    We build and scale cash flow machines.
                  </h1>
                  <p className="mt-5 text-slate-200/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl opacity-0 translate-y-6 transition-all duration-700" data-reveal>
                    M3rcury Ventures is a venture studio that turns local services and AI products into durable, compounding businesses.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 translate-y-6 transition-all duration-700" data-reveal>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#0b0f14] hover:bg-slate-100 active:scale-[0.99] px-6 py-3 text-sm font-semibold shadow-lg shadow-black/20 transition-all"
                    >
                      Book an intro call <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="#portfolio"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 active:scale-[0.99] px-6 py-3 text-sm font-semibold text-white transition-all"
                    >
                      View our portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Systems tiles overlay */}
          <div className="relative z-30 -mt-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 opacity-0 translate-y-6 transition-all duration-700" data-reveal>
                {[
                  { icon: <Building2 className='h-5 w-5 text-teal-300' />, label: 'Local services' },
                  { icon: <Cpu className='h-5 w-5 text-fuchsia-300' />, label: 'AI products' },
                  { icon: <Users className='h-5 w-5 text-teal-300' />, label: 'Operators' },
                  { icon: <TrendingUp className='h-5 w-5 text-fuchsia-300' />, label: 'Capital' },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] backdrop-blur-sm p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-white/5 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <p className="text-slate-200 text-sm font-medium">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: How the studio works */}
        <section className="relative py-20 sm:py-24 lg:py-28" id="how">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="How the studio works"
              title="A precision engine for launching and scaling"
              subtitle="We blend disciplined operations with product thinking to compound cash flow and capability."
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  Icon: Briefcase,
                  title: 'We find or create the opportunity',
                  text: 'We start with market research, small paid tests, and a ruthless focus on unit economics. We only build what pencils. ',
                },
                {
                  Icon: Rocket,
                  title: 'We build the operating system',
                  text: 'Brand, site, CRM, automations, and playbooks. Every venture plugs into common infrastructure so it gets compound advantages from day one.',
                },
                {
                  Icon: Users,
                  title: 'We recruit and empower operators',
                  text: 'Operators run the business with systems and weekly scoreboards. We align incentives with profit share and clear KPIs.',
                },
              ].map(({ Icon, title, text }, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] opacity-0 translate-y-6"
                  data-reveal
                >
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-fuchsia-600/30 to-teal-500/30 border border-white/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: Portfolio */}
        <section id="portfolio" className="relative py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Portfolio"
              title="A mix of local services and AI products, all built to compound"
              subtitle="We build for cash flow and control. Some are live, others in development."
            />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  name: 'Precision Detail',
                  desc: 'Luxury mobile auto detailing.',
                  tags: ['Local service', 'Live'],
                },
                {
                  name: 'M3rcury Window Cleaning',
                  desc: 'Residential and small commercial.',
                  tags: ['Local service', 'In development'],
                },
                {
                  name: 'Brandzy.ai',
                  desc: 'Automated weekly video marketing for local businesses.',
                  tags: ['AI product', 'In development'],
                },
                {
                  name: 'BeatAcne.ai',
                  desc: 'AI powered skincare companion.',
                  tags: ['AI product', 'In development'],
                },
                {
                  name: 'M3rcury Agent',
                  desc: 'AI receptionist platform.',
                  tags: ['AI product', 'Prototype'],
                },
                {
                  name: 'More coming',
                  desc: 'Reserved slots for new ventures.',
                  tags: ['Portfolio'],
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href="#contact"
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_25px_45px_rgba(0,0,0,0.4)] focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40 opacity-0 translate-y-6"
                  data-reveal
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                      <p className="text-slate-300 text-sm mt-1">{item.desc}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-white/70 transition-transform group-hover:translate-x-1" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: The M3rcury model */}
        <section id="model" className="relative py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="opacity-0 translate-y-6 transition-all duration-700" data-reveal>
                <SectionHeader
                  eyebrow="The M3rcury model"
                  title="Services fund software. Software powers services."
                  subtitle="We cycle cash into capability. Every dollar of profit makes the next product cheaper to build and easier to distribute."
                />
                <ol className="mt-8 space-y-5">
                  {[
                    'Launch or acquire a local service business with strong margins.',
                    'Build internal tools and AI products to automate operations.',
                    'Spin those tools into standalone products and new ventures.',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 border border-white/10 text-sm text-white/90">{i + 1}</span>
                      <p className="text-slate-300 leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Diagram */}
              <div className="opacity-0 translate-y-6 transition-all duration-700" data-reveal>
                <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-fuchsia-600/10 to-teal-500/10 blur-2xl" />
                  <div className="relative grid grid-cols-2 gap-6">
                    {[
                      { Icon: Building2, label: 'Local services' },
                      { Icon: Zap, label: 'Cash flow' },
                      { Icon: Cpu, label: 'Product builds' },
                      { Icon: Rocket, label: 'Shared infrastructure' },
                    ].map(({ Icon, label }, i) => (
                      <div key={i} className="relative rounded-xl border border-white/10 bg-[#0f141a]/80 p-4">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <p className="text-slate-200 text-sm">{label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Arrows */}
                  <div className="relative mt-6 grid grid-cols-4 gap-2 text-center text-[11px] text-slate-400">
                    <span>Local services</span>
                    <span>→ Cash flow</span>
                    <span>→ Product builds</span>
                    <span>→ Shared infrastructure → more services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: For operators and partners */}
        <section className="relative py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Work with us"
              title="For operators and partners"
              subtitle="Whether you want to run a business or back the model, we structure relationships so everyone wins."
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Operators */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] opacity-0 translate-y-6 transition-all duration-700" data-reveal>
                <h3 className="text-xl font-semibold text-white">Operators</h3>
                <p className="text-slate-300 mt-2">
                  People who want to run a business with systems and support.
                </p>
                <ul className="mt-4 space-y-3 text-slate-300">
                  <li className="flex gap-2"><span className="text-teal-300">•</span> Run a local service or product as the operating partner.</li>
                  <li className="flex gap-2"><span className="text-teal-300">•</span> Backed by playbooks, capital, and tech.</li>
                  <li className="flex gap-2"><span className="text-teal-300">•</span> Equity or profit share based on performance.</li>
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition">
                  Apply as an operator <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Partners */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] opacity-0 translate-y-6 transition-all duration-700" data-reveal>
                <h3 className="text-xl font-semibold text-white">Partners</h3>
                <p className="text-slate-300 mt-2">
                  Investors and advisors who want exposure to the studio model.
                </p>
                <ul className="mt-4 space-y-3 text-slate-300">
                  <li className="flex gap-2"><span className="text-fuchsia-300">•</span> Transparent dashboards and KPIs.</li>
                  <li className="flex gap-2"><span className="text-fuchsia-300">•</span> Exposure to a portfolio of real businesses.</li>
                  <li className="flex gap-2"><span className="text-fuchsia-300">•</span> Long term compounding mindset.</li>
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition">
                  Talk about partnering <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Founders */}
        <section id="founders" className="relative py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Founders"
              title="Built by operators, not theorists."
              subtitle="We prioritize shipping, customer outcomes, and durable systems over hype."
            />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Darius card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] opacity-0 translate-y-6 transition-all duration-700" data-reveal>
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-tr from-fuchsia-600/40 to-teal-500/40 border border-white/10" />
                  <div>
                    <h3 className="text-white font-semibold">Darius Tabatabai – Founder</h3>
                    <p className="text-slate-400 text-sm">Santa Cruz, California</p>
                  </div>
                </div>
                <p className="text-slate-300 mt-4 text-sm leading-relaxed">
                  Student founder running multiple service businesses and AI projects in Santa Cruz, focused on execution, systems, and long-term wealth building.
                </p>
                <div className="mt-4 flex items-center gap-3 text-slate-300">
                  <a href="#" className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10 transition">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                  <a href="#" className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10 transition">
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                </div>
              </div>

              {/* Placeholders */}
              {[1, 2].map((i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm opacity-0 translate-y-6 transition-all duration-700" data-reveal>
                  <div className="h-14 w-14 rounded-xl bg-white/5 border border-white/10" />
                  <h3 className="mt-4 text-white/80 font-semibold">Future partner</h3>
                  <p className="text-slate-400 text-sm">Coming soon</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: Contact & Footer */}
        <section id="contact" className="relative py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Contact block */}
              <div className="opacity-0 translate-y-6 transition-all duration-700" data-reveal>
                <h3 className="text-3xl md:text-4xl font-semibold text-white">Start a conversation.</h3>
                <p className="text-slate-300 mt-3 max-w-xl">
                  Interested in operating a business, partnering on a product, or having us build your next system?
                </p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      alert('Thanks — your message has been recorded for this preview.')
                    }}
                    className="grid grid-cols-1 gap-4"
                  >
                    <div>
                      <label className="block text-sm text-slate-300 mb-1">Name</label>
                      <input required className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-300 mb-1">Email</label>
                      <input type="email" required className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500/40" placeholder="you@company.com" />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-300 mb-1">What are you interested in?</label>
                      <select className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-fuchsia-500/40">
                        <option>Operating</option>
                        <option>Investing</option>
                        <option>Having you build for us</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-slate-300 mb-1">Message</label>
                      <textarea rows={5} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500/40" placeholder="Tell us a bit about your goals" />
                    </div>
                    <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-teal-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:shadow-fuchsia-600/20 hover:scale-[1.01] active:scale-95 transition-all">
                      Send to the studio
                    </button>
                  </form>
                </div>
              </div>

              {/* Aside content */}
              <div className="opacity-0 translate-y-6 transition-all duration-700" data-reveal>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                  <h4 className="text-white font-semibold">What to expect</h4>
                  <ul className="mt-3 space-y-2 text-slate-300 text-sm">
                    <li>• A quick email to align on your goals.</li>
                    <li>• If there’s a fit, we’ll schedule a 20-minute intro call.</li>
                    <li>• Clear next steps after every conversation.</li>
                  </ul>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-slate-400 text-xs">Focus</p>
                    <p className="text-slate-200 mt-1 text-sm">Local services, AI products</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-slate-400 text-xs">Mindset</p>
                    <p className="text-slate-200 mt-1 text-sm">Compounding and control</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-20 border-t border-white/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
              <p>© {year} M3rcury Ventures. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#contact" className="hover:text-white transition-colors">Email</a>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  )
}
