"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"

interface ShopHeaderProps {
  onCartClick: () => void
}

export function ShopHeader({ onCartClick }: ShopHeaderProps) {
  const { totalItems, totalPrice } = useCart()

  return (
    <section className="bg-primary text-primary-foreground py-16 dark:bg-card dark:text-card-foreground dark:shadow-[inset_0_-8px_16px_var(--neu-shadow-dark)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-primary-foreground/70 dark:text-card-foreground/70 text-sm tracking-widest uppercase">
              Explora Nuestra Seleccion
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2">
              Nuestros Productos
            </h1>
            <p className="text-primary-foreground/80 dark:text-card-foreground/80 mt-4 max-w-xl leading-relaxed">
              Todo se hornea fresco diariamente usando recetas tradicionales y
              los mejores ingredientes. Ordena ahora y lo prepararemos solo para ti.
            </p>
          </div>

          {totalItems > 0 && (
            <Button
              onClick={onCartClick}
              size="lg"
              variant="secondary"
              className="self-start md:self-auto dark:shadow-[4px_4px_8px_var(--neu-shadow-dark),-4px_-4px_8px_var(--neu-shadow-light)]"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Carrito ({totalItems}) - ${totalPrice.toFixed(2)}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
