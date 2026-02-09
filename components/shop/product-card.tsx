"use client"

import Image from "next/image"
import { Plus } from "lucide-react"
import type { Product } from "@/lib/types"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow dark:shadow-[6px_6px_12px_var(--neu-shadow-dark),-6px_-6px_12px_var(--neu-shadow-light)] dark:hover:shadow-[8px_8px_16px_var(--neu-shadow-dark),-8px_-8px_16px_var(--neu-shadow-light)]">
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start gap-2">
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {product.description}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-primary font-bold text-lg">
            ${product.price.toFixed(2)}
          </p>
          <Button
            size="sm"
            onClick={handleAddToCart}
            aria-label={`Agregar ${product.name} al carrito`}
            className="dark:shadow-[3px_3px_6px_var(--neu-shadow-dark),-3px_-3px_6px_var(--neu-shadow-light)]"
          >
            <Plus className="h-4 w-4 mr-1" />
            Agregar
          </Button>
        </div>
      </div>
    </div>
  )
}
