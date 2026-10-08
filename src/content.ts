// Todo el texto visible del sitio. Fuente: brochure de Carlos Andres Fernandez Sanchez.
// No agregar cifras, testimonios ni clientes: el brochure es la unica fuente.

import disciplinarioImg from './assets/derecho-disciplinario.webp'
import educacionImg from './assets/derecho-educacion.webp'
import civilImg from './assets/derecho-civil.webp'
import familiaImg from './assets/derecho-familia.webp'
import laboralImg from './assets/derecho-laboral.webp'
import constitucionalImg from './assets/derecho-constitucional.webp'

export type Item = { title: string; body: string }

export type Area = Item & {
  id: string
  /** Imagen de ambiente del área (ver DESIGN.md, sección 8). */
  image: string
  imageLabel: string
}

const PHONE_E164 = '+573043788679'
const WHATSAPP_MESSAGE = 'Hola, quisiera agendar una sesión de diagnóstico.'

export const contact = {
  phoneE164: PHONE_E164,
  phoneDisplay: '304 378 86 79',
  phoneHref: `tel:${PHONE_E164}`,
  whatsappHref: `https://wa.me/573043788679?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  email: 'andresfernandez_875@outlook.com',
  emailHref: 'mailto:andresfernandez_875@outlook.com',
  site: 'www.fernandezasuntoslegales.com',
  city: 'Bogotá D.C.',
  coverage: 'Cobertura de litigio y consultoría a nivel nacional en Colombia.',
} as const

/** Crédito del desarrollador, al pie del footer. */
export const credit = {
  lead: 'Sitio desarrollado por',
  name: 'GreenStudioDev',
  href: 'https://greenstudiodev.com',
} as const

export const social = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/fernandezasuntoslegales',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    href: 'https://www.tiktok.com/@fernandezasuntosl',
  },
] as const

/** Par fijo de CTAs. Mismas etiquetas en nav, hero y contacto. */
export const cta = {
  primary: { label: 'Agendar diagnóstico', href: contact.whatsappHref },
  secondary: { label: 'Llamar', href: contact.phoneHref },
} as const

export const person = {
  name: 'Carlos Andrés Fernández Sánchez',
  wordmark: { last: 'Fernández', rest: 'Asuntos Legales' },
  role: 'Abogado litigante y consultor',
  titles: [
    'Abogado',
    'Especialista en Derecho Procesal',
    'Maestrando en Derecho Procesal',
  ],
} as const

export const hero = {
  eyebrow: 'Abogado litigante y consultor',
  headlineStart: 'Cuando el derecho importa, la estrategia hace ',
  headlineEmphasis: 'la diferencia',
  subtitle:
    'Abogado especialista en Derecho Procesal. Más de 14 años en litigio y consultoría, con atención directa en todo el país.',
  anchorLabel: 'Ver áreas',
} as const

export const credentials = [
  'Especialista en Derecho Procesal',
  'Maestrando en Derecho Procesal',
  'Ex sustanciador, Rama Judicial',
  'Consultor del BID',
] as const

export const value = {
  title: 'Confianza que protege su patrimonio, carrera y proyectos.',
  pillars: [
    {
      title: 'Rigor técnico',
      body: 'Formación especializada en Derecho Procesal y actuaciones judiciales y administrativas técnicamente sólidas.',
    },
    {
      title: 'Experiencia integral',
      body: 'Sustanciador en la Rama Judicial, consultor del BID y asesor en entidades públicas y privadas.',
    },
    {
      title: 'Lenguaje claro',
      body: 'Atención personalizada y directa, sin tecnicismos innecesarios. Diagnósticos y estados de proceso claros.',
    },
    {
      title: 'Control de términos',
      body: 'Control estricto de términos procesales y seguimiento riguroso para proteger su patrimonio y derechos.',
    },
  ] satisfies Item[],
} as const

export const areas = {
  eyebrow: 'Portafolio',
  title: 'Soluciones jurídicas por área de práctica.',
  items: [
    {
      id: 'disciplinario',
      title: 'Derecho disciplinario',
      body: 'Defensa técnica de servidores públicos, exfuncionarios y contratistas (Ley 1952 de 2019 y Ley 2094 de 2021); defensa de abogados en procesos disciplinarios (Ley 1123 de 2007); formulación e impulso de denuncias.',
      image: disciplinarioImg,
      imageLabel: 'Ambiente: expedientes disciplinarios sobre escritorio',
    },
    {
      id: 'educacion',
      title: 'Educación superior y convalidaciones',
      body: 'Convalidación de títulos extranjeros (Res. 10687 de 2019), recursos de reposición y apelación, Registro Calificado, acreditación y creación de IES.',
      image: educacionImg,
      imageLabel: 'Ambiente: diplomas y sellos de apostilla',
    },
    {
      id: 'civil',
      title: 'Civil, comercial y propiedad horizontal',
      body: 'Contratos, litigios declarativos y ejecutivos, cobro de cartera, restituciones, conflictos societarios, impugnación de actas y trámites notariales.',
      image: civilImg,
      imageLabel: 'Ambiente: contratos firmados y códigos civiles',
    },
    {
      id: 'familia',
      title: 'Derecho de familia y alimentos',
      body: 'Divorcios, declaración de unión marital de hecho, liquidación de sociedad conyugal, sucesiones, custodia y filiación; procesos ejecutivos de alimentos y trámites notariales.',
      image: familiaImg,
      imageLabel: 'Ambiente: mesa de notaría con documentos',
    },
    {
      id: 'laboral',
      title: 'Derecho laboral',
      body: 'Asesoría y representación en conflictos laborales: contratos de trabajo, despidos y reintegros, liquidación de prestaciones e indemnizaciones, acoso laboral y procesos ordinarios laborales.',
      image: laboralImg,
      imageLabel: 'Ambiente: código sustantivo del trabajo sobre archivador',
    },
    {
      id: 'constitucional',
      title: 'Acciones constitucionales',
      body: 'Tutelas, acciones populares, acciones de grupo y acciones de cumplimiento para la protección de derechos fundamentales y colectivos.',
      image: constitucionalImg,
      imageLabel: 'Ambiente: Constitución Política abierta en sala vacía',
    },
  ] satisfies Area[],
} as const

export const method = {
  title: 'De la consulta a la estrategia jurídica.',
  steps: [
    {
      title: 'Diagnóstico inicial',
      body: 'Análisis de antecedentes, pruebas y marco normativo para determinar la viabilidad real.',
    },
    {
      title: 'Estrategia a medida',
      body: 'Hoja de ruta procesal, alternativas, tiempos estimados y honorarios transparentes.',
    },
    {
      title: 'Ejecución activa',
      body: 'Radicación de demandas, recursos o actuaciones; audiencias e impulso permanente.',
    },
    {
      title: 'Control y seguimiento',
      body: 'Control de términos e informes periódicos hasta la resolución del encargo.',
    },
  ] satisfies Item[],
} as const

export const profile = {
  title: 'Asumo personalmente cada caso.',
  bio: 'Soy especialista en Derecho Procesal, con más de 14 años de experiencia dentro y fuera de los estrados: desde la Rama Judicial hasta la consultoría internacional. Asumo personalmente cada caso, para proteger su patrimonio, su trayectoria y sus derechos en todo el país.',
  track: [
    'Sustanciador en la Rama Judicial',
    'Consultor del BID',
    'Asesor en entidades públicas y privadas',
  ],
} as const

/** Reels de Instagram. Para cambiar un video basta con el código de la URL (/p/<id>/). */
export const videos = {
  title: 'Respuestas breves a preguntas frecuentes.',
  moreLabel: 'Ver más en Instagram',
  moreHref: 'https://www.instagram.com/fernandezasuntoslegales',
  items: [
    { id: 'DeEzsZEAKW4', title: 'Sucesiones sin testamento' },
    { id: 'DeC8R_9gqtz', title: 'Unión marital de hecho' },
    { id: 'DeCxcciAOAk', title: 'Cálculo de la cuota de alimentos' },
  ],
} as const

export const closing = {
  eyebrow: 'Sesión de diagnóstico',
  title: 'Agende una sesión de diagnóstico.',
  subtitle: 'Presencial o virtual. Atención directa por el abogado titular.',
} as const

export const nav = [
  { label: 'Áreas', href: '#areas' },
  { label: 'Método', href: '#metodo' },
  { label: 'Perfil', href: '#perfil' },
  { label: 'Contacto', href: '#contacto' },
] as const
