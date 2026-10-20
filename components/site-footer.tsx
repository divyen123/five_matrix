import Image from "next/image"

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Trading", href: "#trading" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <span className="flex size-14 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-border overflow-hidden">
              <Image
                src="/fivematrix-logo.jpg"
                alt="Five Matrix Shipping Pte Ltd logo"
                width={56}
                height={56}
                className="size-[80%] object-contain rounded-full"
              />
            </span>
            <div>
              <div className="font-heading text-lg font-extrabold text-foreground">
                FIVE MATRIX SHIPPING PTE LTD
              </div>
              <div className="text-sm text-muted-foreground">
                Safe · Secure · Sustainable Shipping — Singapore
              </div>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© 2023 Five Matrix Shipping Pte Ltd. All rights reserved.</p>
         
        </div>
      </div>
    </footer>
  )
}
