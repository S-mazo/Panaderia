"use client"

import Link from "next/link"
import { ShoppingCart, Menu, X, Moon, Sun } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/context/cart-context"
import { useTheme } from "@/context/theme-context"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { totalItems } = useCart()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold text-primary">
          Dulce Corteza
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/shop"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Tienda
          </Link>
          <Link
            href="/shop#about"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Nosotros
          </Link>
          <Link
            href="/pitch"
            className="text-foreground/80 hover:text-foreground transition-colors font-semibold"
          >
            PITCH
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
            className="dark:shadow-[inset_2px_2px_4px_var(--neu-shadow-dark),inset_-2px_-2px_4px_var(--neu-shadow-light)] dark:bg-secondary"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          <Link href="/shop" className="relative">
            <Button variant="ghost" size="icon" aria-label="Carrito de compras">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/shop"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Tienda
            </Link>
            <Link
              href="/shop#about"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/pitch"
              className="text-foreground/80 hover:text-foreground transition-colors py-2 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              PITCH
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
