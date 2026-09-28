# DESIGN.md · fernandezasuntoslegales.com

Fuente de contenido: brochure de Carlos Andrés Fernández Sánchez (2 páginas). Skill: taste-skill.

## 1. Lectura del brief

**Reading this as:** landing one-page de servicios profesionales para personas y servidores públicos que enfrentan un problema jurídico serio (disciplinario, familia, laboral, convalidaciones), con un lenguaje **institucional-editorial sobrio**, que transmite rigor y cercanía sin parecer bufete corporativo de plantilla.

- Audiencia: servidor público con proceso disciplinario, profesional con título extranjero, familia en divorcio/sucesión, empresa pequeña con cartera o conflicto laboral. Llegan preocupados; buscan confianza y un siguiente paso claro.
- Restricción silenciosa: servicio regulado (abogacía). Nada de promesas de resultado, nada de cifras inventadas. Solo los datos del brochure.
- Conversión única: **agendar una sesión de diagnóstico** (WhatsApp).

## 2. Diales

| Dial | Valor | Por qué |
|---|---|---|
| DESIGN_VARIANCE | 6 | Asimetría editorial controlada; confianza antes que experimento |
| MOTION_INTENSITY | 4 | Movimiento solo para jerarquía y secuencia (método). Nada decorativo |
| VISUAL_DENSITY | 4 | Mucho contenido legal real; aire suficiente para que se lea tranquilo |

## 3. Sistema visual

### Tipografía
- **Display:** EB Garamond (500 / 500 italic). Justificación: la abogacía es una tradición de texto impreso (códigos, sentencias, gacetas); una garalda clásica comunica esa herencia sin caer en el cliché dorado de bufete. Énfasis con itálica de la misma familia.
- **Texto / UI:** Geist (400/500/600). Números y referencias normativas (Ley 1952 de 2019) en Geist con `tabular-nums`, no mono.
- Self-host con `@fontsource/eb-garamond` y `@fontsource-variable/geist`.
- Escala: H1 `text-4xl md:text-5xl lg:text-6xl leading-[1.1]`; H2 `text-3xl md:text-4xl`; cuerpo `text-base md:text-[17px] leading-relaxed max-w-[65ch]`.

### Color (un solo acento: verde bosque)
| Token | Claro | Oscuro |
|---|---|---|
| `--bg` | `#F3F4F1` | `#0E1311` |
| `--surface` | `#E7EAE5` | `#161D1A` |
| `--ink` | `#15191A` | `#E6EBE8` |
| `--muted` | `#4F5856` | `#9AA6A1` |
| `--line` | `#C9CFCB` | `#2A3430` |
| `--accent` | `#1D4A3A` | `#7FB39A` |
| `--accent-ink` (texto sobre acento) | `#F3F4F1` | `#0E1311` |

Nada de azul marino + dorado (el cliché del sector) ni beige + latón. Tema automático por `prefers-color-scheme`, sin cambios de tema entre secciones.

### Forma
- Radio único: **2px** en botones, imágenes, inputs y paneles. Sin píldoras.
- Sombras: ninguna por defecto. Jerarquía con líneas `--line` y espacio.

### Iconos
`@phosphor-icons/react`, peso `light`, uso mínimo (WhatsApp, correo, flecha, ubicación).

## 4. Estructura de la página (9 bloques, 7 familias de layout)

**CTA en toda la página:** par fijo, siempre el mismo par, siempre las mismas etiquetas.
1. Primario: "Agendar diagnóstico" → `https://wa.me/573043788679?text=...` (mensaje prellenado).
2. Secundario: "Llamar" → `tel:+573043788679`.

Decisión (2026-09-28): se añade el botón de llamada porque la mitad del tráfico de un
sitio jurídico local llega desde celular y con una urgencia (término que vence, citación)
donde marcar es más rápido que escribir. En desktop el `tel:` sigue siendo válido: el
número se muestra como texto junto al botón para quien llama desde otro aparato.

El ancla "Ver áreas" del hero es un enlace de texto, no un tercer botón.

Eyebrows permitidos: 3 máximo → Hero, Áreas, Contacto.

1. **Nav** (72px, una línea, sticky con fondo al hacer scroll)
   Wordmark "Fernández" + "Asuntos Legales" en Geist pequeño · Áreas · Método · Perfil · Contacto · botón "Agendar diagnóstico". Móvil: menú hamburguesa en panel a pantalla completa.

2. **Hero · split asimétrico 7/5** (`min-h-[100dvh]`, `pt-24` máx.)
   - Eyebrow: `Abogado litigante y consultor`
   - H1: "Cuando el derecho importa, la estrategia hace *la diferencia*."
   - Sub (20 palabras): "Abogado especialista en Derecho Procesal. Más de 14 años en litigio y consultoría, con atención directa en todo el país."
   - CTAs: Agendar diagnóstico / Ver áreas
   - Derecha: **retrato profesional de Carlos** (4:5), recorte limpio, sin etiquetas encima.
   - Móvil: foto arriba recortada 1:1, texto debajo.

3. **Franja de credenciales** (fila tipográfica, sin tarjetas, bajo el hero)
   Especialista en Derecho Procesal · Maestrando en Derecho Procesal · Ex sustanciador, Rama Judicial · Consultor del BID. 4 columnas desktop, 2x2 móvil.

4. **Propuesta de valor · sticky lateral**
   Izquierda fija: "Confianza que protege su patrimonio, carrera y proyectos." Derecha: los 4 pilares en scroll (Rigor técnico, Experiencia integral, Lenguaje claro, Control de términos), cada uno título Garamond + 1 frase. Móvil: pila simple.

5. **Áreas de práctica · lista interactiva + panel** (eyebrow `Portafolio`)
   H2: "Soluciones jurídicas por área de práctica."
   Izquierda: las 6 áreas como lista grande seleccionable. Derecha: panel con descripción completa del brochure + imagen de ambiente por área. Móvil: acordeón nativo (`<details>`).

6. **Metodología · línea de tiempo horizontal**
   H2: "De la consulta a la estrategia jurídica." 4 pasos con el verbo como título: Diagnóstico inicial, Estrategia a medida, Ejecución activa, Control y seguimiento. Una línea horizontal se dibuja al entrar en viewport (comunica secuencia). Móvil: vertical.

7. **Perfil · bloque editorial a ancho completo**
   Foto secundaria de Carlos (despacho o audiencia) a sangre en un lado, texto largo en el otro: "Asumo personalmente cada caso, para proteger su patrimonio, su trayectoria y sus derechos en todo el país." + trayectoria (Rama Judicial, BID, entidades públicas y privadas).

8. **Contacto / cierre** (eyebrow `Sesión de diagnóstico`)
   H2: "Agende una sesión de diagnóstico." Sub: "Presencial o virtual. Atención directa por el abogado titular." Botón WhatsApp grande + correo `andresfernandez_875@outlook.com` + teléfono 304 378 86 79. Fondo `--surface`, mismo tema.

9. **Footer**
   Bogotá D.C. · Cobertura de litigio y consultoría a nivel nacional. Correo, WhatsApp, © año. Enlace a política de tratamiento de datos (Ley 1581) cuando exista.

## 5. Movimiento (motion/react)
- Hero: entrada escalonada de texto + foto (opacity/translateY, una vez).
- Secciones 4, 5, 6: `whileInView` suave, `once: true`.
- Áreas: crossfade del panel al cambiar de área.
- Metodología: dibujo de la línea con `scaleX` al entrar.
- Todo colapsa a estático con `useReducedMotion()`. Sin listeners de scroll.

## 6. Stack de implementación
```
npm i tailwindcss @tailwindcss/vite motion @phosphor-icons/react @fontsource/eb-garamond @fontsource-variable/geist
```
Tailwind v4 vía plugin de Vite, tokens como variables CSS. Contenido en un solo `src/content.ts`.

## 7. SEO básico
`<title>`, meta description, Open Graph, `lang="es-CO"`, JSON-LD `LegalService` / `Attorney` con área de servicio Colombia y dirección Bogotá.

## 8. Activos pendientes

Decisión (2026-09-28): las fotos de Carlos las consigue Andrés. Se programa con slots
reales en `src/assets/` y un `<img>` apuntando a un placeholder de tamaño correcto, para
que el reemplazo sea cambiar el archivo y nada más. Nada de caras generadas por IA:
en el sitio de un abogado real, un retrato inventado es un problema de credibilidad.

- [ ] `portrait-hero.jpg` — retrato profesional, vertical 4:5, mínimo 1600px de alto.
- [ ] `portrait-profile.jpg` — segunda foto: despacho, escritorio o audiencia. 3:2 horizontal.
- [ ] Logo, si existe. Si no, wordmark tipográfico (ya cubierto por el diseño).
- [ ] Imágenes de ambiente por área (6): generables con IA, solo texturas y objetos
      (expedientes, códigos, sello, toga, sala vacía). Sin personas.
