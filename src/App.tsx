import {
  ArrowRight,
  CaretDown,
  EnvelopeSimple,
  List,
  MapPin,
  Phone,
  WhatsappLogo,
  X,
} from '@phosphor-icons/react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'motion/react'
import { useEffect, useState, type ReactNode } from 'react'
import { ImageSlot } from './components/ImageSlot'
import {
  areas,
  closing,
  contact,
  credentials,
  cta,
  hero,
  method,
  nav,
  person,
  profile,
  value,
} from './content'

const EASE = [0.22, 1, 0.36, 1] as const

/** Props de aparicion al entrar en viewport. Con reduced motion no anima nada. */
function reveal(reduced: boolean | null, delay = 0) {
  if (reduced) return {}
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6, delay, ease: EASE },
  } as const
}

function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>{children}</div>
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">{children}</p>
}

/** Par fijo de CTAs: WhatsApp primario, llamada secundaria. Mismas etiquetas en todo el sitio. */
function CtaPair({ large = false, className = '' }: { large?: boolean; className?: string }) {
  const pad = large ? 'px-7 py-4 text-base' : 'px-5 py-3 text-sm'
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}>
      <a
        href={cta.primary.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-[2px] bg-accent font-medium text-accent-ink transition-opacity hover:opacity-90 ${pad}`}
      >
        <WhatsappLogo weight="light" aria-hidden className="size-5" />
        {cta.primary.label}
      </a>
      <a
        href={cta.secondary.href}
        className={`inline-flex items-center justify-center gap-2 rounded-[2px] border border-line font-medium text-ink transition-colors hover:border-accent ${pad}`}
      >
        <Phone weight="light" aria-hidden className="size-5" />
        {cta.secondary.label}
      </a>
    </div>
  )
}

function Nav() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 8))

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled ? 'border-line bg-bg/95 backdrop-blur' : 'border-transparent'
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <a href="#inicio" className="flex items-baseline gap-2 whitespace-nowrap">
          <span className="font-display text-xl leading-none text-ink">{person.wordmark.last}</span>
          <span className="text-xs uppercase tracking-[0.16em] text-muted">
            {person.wordmark.rest}
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={cta.primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[2px] bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
          >
            {cta.primary.label}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={open}
          className="rounded-[2px] p-1 text-ink lg:hidden"
        >
          <List weight="light" className="size-7" />
        </button>
      </Container>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-bg lg:hidden">
          <Container className="flex h-[72px] shrink-0 items-center justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="rounded-[2px] p-1 text-ink"
            >
              <X weight="light" className="size-7" />
            </button>
          </Container>
          <Container className="flex flex-1 flex-col justify-center gap-10 pb-24">
            <nav aria-label="Principal, versión móvil" className="flex flex-col gap-6">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="w-fit font-display text-3xl text-ink"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <CtaPair />
          </Container>
        </div>
      )}
    </header>
  )
}

function Hero() {
  const reduced = useReducedMotion()
  const step = (i: number) =>
    reduced
      ? {}
      : ({
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: i * 0.08, ease: EASE },
        } as const)

  return (
    <section id="inicio" className="flex min-h-[100dvh] items-center pb-12 pt-24">
      <Container className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
        {/* Móvil: retrato primero y cuadrado. Desktop: columna derecha 4:5. */}
        <div className="order-1 lg:order-2 lg:col-span-5">
          <motion.div {...step(0)} className="mx-auto w-[min(52vw,11rem)] lg:hidden">
            {/* TODO: reemplazar por portrait-hero.jpg, mínimo 1600px de alto (4:5) */}
            <ImageSlot
              ratio="1/1"
              priority
              alt="Retrato profesional de Carlos Andrés Fernández Sánchez"
              label="Retrato profesional del abogado, recorte limpio, fondo neutro"
            />
          </motion.div>
          <motion.div {...step(0)} className="hidden lg:block">
            {/* TODO: reemplazar por portrait-hero.jpg, mínimo 1600px de alto (4:5) */}
            <ImageSlot
              ratio="4/5"
              priority
              alt="Retrato profesional de Carlos Andrés Fernández Sánchez"
              label="Retrato profesional del abogado, vertical 4:5, recorte limpio, fondo neutro"
            />
          </motion.div>
        </div>

        <div className="order-2 lg:order-1 lg:col-span-7">
          <motion.div {...step(1)}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </motion.div>
          <motion.h1
            {...step(2)}
            className="mt-6 font-display text-4xl leading-[1.1] text-ink md:text-5xl lg:text-6xl"
          >
            {hero.headlineStart}
            <em className="italic">{hero.headlineEmphasis}</em>.
          </motion.h1>
          <motion.p
            {...step(3)}
            className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted md:text-[17px]"
          >
            {hero.subtitle}
          </motion.p>
          <motion.div {...step(4)} className="mt-8 flex flex-col gap-4">
            <CtaPair large />
            <a
              href="#areas"
              className="inline-flex w-fit items-center gap-2 text-sm text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              {hero.anchorLabel}
              <ArrowRight weight="light" aria-hidden className="size-4" />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function Credentials() {
  const reduced = useReducedMotion()
  return (
    <section className="border-y border-line">
      <Container className="py-10">
        {/* Móvil: 2x2. Desktop: 4 columnas. */}
        <motion.ul
          {...reveal(reduced)}
          className="grid grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-4"
        >
          {credentials.map((item) => (
            <li key={item} className="text-sm leading-snug text-muted">
              {item}
            </li>
          ))}
        </motion.ul>
      </Container>
    </section>
  )
}

function Value() {
  const reduced = useReducedMotion()
  return (
    <section className="py-24 md:py-32">
      {/* Móvil: pila simple. Desktop: título sticky a la izquierda. */}
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl lg:sticky lg:top-28">
            {value.title}
          </h2>
        </div>
        <ul className="lg:col-span-7">
          {value.pillars.map((pillar, i) => (
            <motion.li
              key={pillar.title}
              {...reveal(reduced, i * 0.05)}
              className="border-t border-line py-8 first:border-t-0 first:pt-0"
            >
              <h3 className="font-display text-2xl text-ink">{pillar.title}</h3>
              <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-muted">{pillar.body}</p>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

function Areas() {
  const [activeId, setActiveId] = useState<string>(areas.items[0].id)
  const active = areas.items.find((a) => a.id === activeId) ?? areas.items[0]
  const reduced = useReducedMotion()

  return (
    <section id="areas" className="py-24 md:py-32">
      <Container>
        <motion.div {...reveal(reduced)}>
          <Eyebrow>{areas.eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-[20ch] font-display text-3xl leading-tight text-ink md:text-4xl">
            {areas.title}
          </h2>
        </motion.div>

        {/* Desktop: lista seleccionable + panel. Móvil: acordeón nativo (bloque de abajo). */}
        <div className="mt-14 hidden gap-14 lg:grid lg:grid-cols-12">
          <ul className="lg:col-span-6">
            {areas.items.map((area) => (
              <li key={area.id} className="border-t border-line last:border-b">
                <button
                  type="button"
                  onClick={() => setActiveId(area.id)}
                  aria-pressed={area.id === activeId}
                  className={`w-full py-5 text-left font-display text-2xl transition-colors ${
                    area.id === activeId ? 'text-accent' : 'text-ink hover:text-accent'
                  }`}
                >
                  {area.title}
                </button>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-6">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.id}
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduced ? undefined : { opacity: 0 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                {/* TODO: reemplazar por src/assets/area-*.jpg, mínimo 1200x800px (3:2) */}
                <ImageSlot
                  ratio="3/2"
                  alt={`Imagen de ambiente del área de ${active.title}`}
                  label={active.imageLabel}
                />
                <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted tabular-nums">
                  {active.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 lg:hidden">
          {areas.items.map((area) => (
            <details key={area.id} className="group border-t border-line last:border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-xl text-ink [&::-webkit-details-marker]:hidden">
                {area.title}
                <CaretDown
                  weight="light"
                  aria-hidden
                  className="size-5 shrink-0 text-muted transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="pb-8">
                {/* TODO: reemplazar por src/assets/area-*.jpg, mínimo 1200x800px (3:2) */}
                <ImageSlot
                  ratio="3/2"
                  alt={`Imagen de ambiente del área de ${area.title}`}
                  label={area.imageLabel}
                />
                <p className="mt-5 text-base leading-relaxed text-muted tabular-nums">{area.body}</p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Method() {
  const reduced = useReducedMotion()
  return (
    <section id="metodo" className="border-t border-line py-24 md:py-32">
      <Container>
        <motion.h2
          {...reveal(reduced)}
          className="max-w-[18ch] font-display text-3xl leading-tight text-ink md:text-4xl"
        >
          {method.title}
        </motion.h2>

        <motion.div
          className="mt-14 h-px origin-left bg-line"
          initial={reduced ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: EASE }}
        />

        {/* Móvil: pila vertical. Desktop: 4 columnas sobre la línea. */}
        <ol className="grid gap-10 pt-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {method.steps.map((step, i) => (
            <motion.li key={step.title} {...reveal(reduced, i * 0.08)}>
              <span className="text-xs tabular-nums text-accent">0{i + 1}</span>
              <h3 className="mt-3 font-display text-2xl text-ink">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{step.body}</p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

function Profile() {
  const reduced = useReducedMotion()
  return (
    <section id="perfil" className="border-t border-line">
      {/* Móvil: foto arriba, texto debajo. Desktop: foto a sangre a la izquierda. */}
      <div className="grid lg:grid-cols-2">
        {/* TODO: reemplazar por portrait-profile.jpg, mínimo 1800x1200px (3:2) */}
        <ImageSlot
          ratio="3/2"
          alt="Carlos Andrés Fernández Sánchez en su despacho"
          label="Segunda foto: despacho, escritorio o sala de audiencias"
          className="h-full rounded-none border-x-0 border-t-0"
        />
        <motion.div {...reveal(reduced)} className="px-6 py-16 md:px-10 md:py-24 lg:px-14">
          <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
            {profile.title}
          </h2>
          <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted md:text-[17px]">
            {profile.bio}
          </p>
          <ul className="mt-10 border-t border-line">
            {profile.track.map((item) => (
              <li key={item} className="border-b border-line py-4 text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">{person.titles.join(' · ')}</p>
        </motion.div>
      </div>
    </section>
  )
}

function Closing() {
  const reduced = useReducedMotion()
  return (
    <section id="contacto" className="border-t border-line bg-surface py-24 md:py-32">
      <Container>
        <motion.div {...reveal(reduced)}>
          <Eyebrow>{closing.eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-[16ch] font-display text-3xl leading-tight text-ink md:text-5xl">
            {closing.title}
          </h2>
          <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-muted md:text-[17px]">
            {closing.subtitle}
          </p>

          <CtaPair large className="mt-10" />

          {/* Móvil: pila. Desktop: dos columnas. */}
          <dl className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">Correo</dt>
              <dd className="mt-2">
                <a
                  href={contact.emailHref}
                  className="inline-flex items-center gap-2 text-base text-ink underline-offset-4 hover:underline"
                >
                  <EnvelopeSimple weight="light" aria-hidden className="size-5" />
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                WhatsApp y teléfono
              </dt>
              <dd className="mt-2">
                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center gap-2 text-base tabular-nums text-ink underline-offset-4 hover:underline"
                >
                  <Phone weight="light" aria-hidden className="size-5" />
                  {contact.phoneDisplay}
                </a>
              </dd>
            </div>
          </dl>
        </motion.div>
      </Container>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-line py-12">
      {/* Móvil: pila. Desktop: fila. */}
      <Container className="flex flex-col gap-6 text-sm text-muted md:flex-row md:items-start md:justify-between">
        <p className="flex max-w-[40ch] items-start gap-2">
          <MapPin weight="light" aria-hidden className="mt-0.5 size-4 shrink-0" />
          <span>
            {contact.city}. {contact.coverage}
          </span>
        </p>
        <ul className="flex flex-col gap-2 md:text-right">
          <li>
            <a
              href={contact.emailHref}
              className="underline-offset-4 hover:text-ink hover:underline"
            >
              {contact.email}
            </a>
          </li>
          <li>
            <a
              href={cta.primary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="tabular-nums underline-offset-4 hover:text-ink hover:underline"
            >
              WhatsApp {contact.phoneDisplay}
            </a>
          </li>
          <li className="tabular-nums">
            © {new Date().getFullYear()} {person.name}
          </li>
          <li>{contact.site}</li>
        </ul>
      </Container>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Credentials />
        <Value />
        <Areas />
        <Method />
        <Profile />
        <Closing />
      </main>
      <Footer />
    </>
  )
}
