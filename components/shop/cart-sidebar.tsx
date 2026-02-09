"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingCart, Minus, Plus, Trash2, X, MessageCircle, User } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart()
  const [customerName, setCustomerName] = useState("")
  const [showNameError, setShowNameError] = useState(false)

  const generateWhatsAppMessage = (name: string) => {
    if (items.length === 0) return ""

    let message = `Hola, buenos días, me llamo ${name} y me gustaría realizar esta orden:\n`

    items.forEach((item) => {
      message += `- ${item.name}: $${(item.price * item.quantity).toFixed(2)}\n`
    })

    message += `\nTotal: $${totalPrice.toFixed(2)}`

    return encodeURIComponent(message)
  }

  const handleWhatsAppOrder = () => {
    if (!customerName.trim()) {
      setShowNameError(true)
      return
    }
    setShowNameError(false)
    const message = generateWhatsAppMessage(customerName.trim())
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=57xxxxxxxxxx&text=${message}&type=phone_number&app_absent=0`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/50 z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-background shadow-xl z-50 transform transition-transform duration-300 dark:shadow-[-8px_0_16px_var(--neu-shadow-dark)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Carrito de compras"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              <h2 className="font-serif text-xl font-semibold">Tu Carrito</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} aria-label="Cerrar carrito">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                <ShoppingCart className="h-12 w-12 mb-4" />
                <p>Tu carrito esta vacio</p>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex gap-4 p-3 bg-secondary rounded-lg dark:shadow-[inset_2px_2px_4px_var(--neu-shadow-dark),inset_-2px_-2px_4px_var(--neu-shadow-light)]"
                  >
                    <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate">
                        {item.name}
                      </h3>
                      <p className="text-primary font-medium">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 bg-transparent dark:shadow-[2px_2px_4px_var(--neu-shadow-dark),-2px_-2px_4px_var(--neu-shadow-light)]"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Disminuir cantidad"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 bg-transparent dark:shadow-[2px_2px_4px_var(--neu-shadow-dark),-2px_-2px_4px_var(--neu-shadow-light)]"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 ml-auto text-destructive hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                          aria-label="Eliminar producto"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-4 border-t border-border space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-primary">${totalPrice.toFixed(2)}</span>
              </div>
              
              {/* Customer Name Input */}
              <div className="space-y-2">
                <Label htmlFor="customer-name" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Tu nombre
                </Label>
                <Input
                  id="customer-name"
                  type="text"
                  placeholder="Ingresa tu nombre"
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value)
                    if (showNameError) setShowNameError(false)
                  }}
                  className={showNameError ? "border-destructive" : ""}
                />
                {showNameError && (
                  <p className="text-sm text-destructive">Por favor ingresa tu nombre para continuar</p>
                )}
              </div>

              <Button
                className="w-full dark:shadow-[4px_4px_8px_var(--neu-shadow-dark),-4px_-4px_8px_var(--neu-shadow-light)]"
                size="lg"
                onClick={handleWhatsAppOrder}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Ordenar por WhatsApp
              </Button>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={clearCart}
              >
                Vaciar Carrito
              </Button>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}
