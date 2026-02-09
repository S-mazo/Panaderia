import Link from "next/link"
import { categories } from "@/lib/types"

const categoryImages: Record<string, string> = {
  breads:
    "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&h=400&fit=crop",
  pastries:
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=400&fit=crop",
  cakes:
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
  cookies:
    "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=400&fit=crop",
}

export function CategoriesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-muted-foreground text-sm tracking-widest uppercase">
            Explorar
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
            Nuestras Categorias
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/shop?category=${category.id}`}
              className="group relative h-64 rounded-lg overflow-hidden dark:shadow-[6px_6px_12px_var(--neu-shadow-dark),-6px_-6px_12px_var(--neu-shadow-light)]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${categoryImages[category.id]}')` }}
              />
              <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/50 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-background">
                <h3 className="font-serif text-3xl font-bold mb-2">
                  {category.name}
                </h3>
                <p className="text-background/90">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
