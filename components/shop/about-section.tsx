export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-muted-foreground text-sm tracking-widest uppercase">
              Nuestra Historia
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Una Tradicion Familiar Desde 1985
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Dulce Corteza fue fundada por la familia Martinez con una
                misión simple: traer el auténtico sabor de la panadería
                tradicional europea a nuestra comunidad.
              </p>
              <p>
                Cada mañana a las 4 AM, nuestros panaderos comienzan su oficio,
                usando recetas transmitidas a través de tres generaciones.
                Obtenemos solo la mejor harina, mantequilla e ingredientes
                de temporada para asegurar que cada bocado cuente nuestra historia.
              </p>
              <p>
                Desde nuestro pan de masa madre insignia hasta nuestros delicados
                pasteles franceses, creemos que el buen pan une a las personas.
                Gracias por ser parte de nuestra familia.
              </p>
            </div>
          </div>
          <div className="relative">
            <div
              className="aspect-[4/3] rounded-lg bg-cover bg-center dark:shadow-[8px_8px_16px_var(--neu-shadow-dark),-8px_-8px_16px_var(--neu-shadow-light)]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&h=600&fit=crop')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
