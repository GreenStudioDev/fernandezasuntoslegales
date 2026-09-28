type Props = {
  /** Sin src se dibuja el placeholder. Al llegar la foto real, solo se pasa el import. */
  src?: string
  alt: string
  /** CSS aspect-ratio, p. ej. "4/5", "3/2", "1/1". Reserva el espacio y evita CLS. */
  ratio: string
  /** Descripcion de la foto que va en este hueco. Visible solo en el placeholder. */
  label: string
  /** Solo para el retrato del hero: carga prioritaria en vez de lazy. */
  priority?: boolean
  className?: string
}

export function ImageSlot({ src, alt, ratio, label, priority = false, className = '' }: Props) {
  const style = { aspectRatio: ratio }

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        style={style}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
        className={`w-full rounded-[2px] object-cover ${className}`}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      style={style}
      className={`flex w-full items-center justify-center rounded-[2px] border border-line bg-surface p-6 ${className}`}
    >
      <span className="max-w-[28ch] text-center text-xs leading-relaxed text-muted">{label}</span>
    </div>
  )
}
