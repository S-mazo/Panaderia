import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&h=1080&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="inline-block text-background/90 text-sm tracking-widest uppercase mb-6">
          Panaderia Artesanal Desde 1985
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-background mb-6 text-balance">
          Horneado con Amor,
          <br />
          Servido con Carino
        </h1>
        <p className="text-lg md:text-xl text-background/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Descubre nuestros panes, pasteles y tortas artesanales hechos frescos
          cada manana con los mejores ingredientes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-base px-8">
            <Link href="/shop">
              Ordenar Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-base px-8 border-background text-background hover:bg-background hover:text-foreground bg-transparent"
          >
            <Link href="/shop#about">Nuestra Historia</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
