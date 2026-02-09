import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground dark:bg-card dark:text-card-foreground dark:shadow-[8px_8px_16px_var(--neu-shadow-dark),-8px_-8px_16px_var(--neu-shadow-light)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Dulce Corteza</h3>
            <p className="text-primary-foreground/80 dark:text-card-foreground/80 leading-relaxed">
              Productos artesanales horneados frescos diariamente con los mejores
              ingredientes y recetas tradicionales.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Horario</h4>
            <ul className="space-y-2 text-primary-foreground/80 dark:text-card-foreground/80">
              <li>Lunes - Viernes: 7am - 7pm</li>
              <li>Sabado: 8am - 6pm</li>
              <li>Domingo: 8am - 4pm</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-primary-foreground/80 dark:text-card-foreground/80">
              <li>Calle Panadero 123</li>
              <li>Ciudad Pan, CP 12345</li>
              <li>Tel: (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 dark:border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60 dark:text-card-foreground/60">
            &copy; {new Date().getFullYear()} Dulce Corteza Panaderia. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-sm text-primary-foreground/60 dark:text-card-foreground/60 hover:text-primary-foreground dark:hover:text-card-foreground transition-colors"
            >
              Privacidad
            </Link>
            <Link
              href="/"
              className="text-sm text-primary-foreground/60 dark:text-card-foreground/60 hover:text-primary-foreground dark:hover:text-card-foreground transition-colors"
            >
              Terminos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
