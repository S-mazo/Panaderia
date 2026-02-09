"use client"

import { useState, Suspense } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ShopHeader } from "@/components/shop/shop-header"
import { ProductGrid } from "@/components/shop/product-grid"
import { CartSidebar } from "@/components/shop/cart-sidebar"
import { AboutSection } from "@/components/shop/about-section"

function ShopContent() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
      <Navbar />
      <main>
        <ShopHeader onCartClick={() => setIsCartOpen(true)} />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <Suspense fallback={<div>Loading products...</div>}>
              <ProductGrid />
            </Suspense>
          </div>
        </section>

        <AboutSection />
      </main>
      <Footer />

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

export default function ShopPage() {
  return <ShopContent />
}
