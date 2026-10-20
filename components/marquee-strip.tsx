const items = [
  "Ship Broking",
  "Ship Chartering",
  "Bulk Cargo",
  "FOB & CIF",
  "Rail Tracks & Billets",
  "Marine Insurance",
  "Asia, PG, AG, Fareast",
  "Safe · Secure · Sustainable",
]

export function MarqueeStrip() {
  const row = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-border bg-navy py-4">
      <div className="flex w-max animate-marquee items-center gap-10">
        {row.map((label, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
              {label}
            </span>
            <span className="size-1.5 rounded-full bg-ocean" />
          </div>
        ))}
      </div>
    </div>
  )
}
