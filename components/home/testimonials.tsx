import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Maria Garcia",
    text: "El mejor pan de masa madre que he probado! La corteza esta perfectamente crujiente y por dentro es muy suave. Ahora pido cada semana.",
  },
  {
    id: 2,
    name: "Carlos Rodriguez",
    text: "Sus croissants son increiblemente buenos. Hojaldrados, con mantequilla y se derriten en la boca. Me recuerda a Paris!",
  },
  {
    id: 3,
    name: "Ana Martinez",
    text: "Pedi un pastel de cumpleanos y supero todas mis expectativas. Hermosa presentacion y un sabor increible.",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-primary text-primary-foreground dark:bg-card dark:text-card-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary-foreground/70 dark:text-card-foreground/70 text-sm tracking-widest uppercase">
            Reconocimiento
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2">
            Lo Que Dicen Nuestros Clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-primary-foreground/10 dark:bg-secondary rounded-lg p-8 dark:shadow-[inset_4px_4px_8px_var(--neu-shadow-dark),inset_-4px_-4px_8px_var(--neu-shadow-light)]"
            >
              <Quote className="h-8 w-8 text-primary-foreground/50 dark:text-card-foreground/50 mb-4" />
              <p className="text-primary-foreground/90 dark:text-card-foreground/90 leading-relaxed mb-6">
                {testimonial.text}
              </p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
