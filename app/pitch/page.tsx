import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code2, 
  Layers, 
  Palette, 
  Zap, 
  Users, 
  Target, 
  CheckCircle2,
  ArrowRight,
  Repeat,
  MessageSquare,
  Calendar,
  TrendingUp
} from "lucide-react"

export default function PitchPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">Documentacion Tecnica</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Stack Tecnologico y Metodologia
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Conoce las tecnologias y metodologias utilizadas para desarrollar Dulce Corteza, 
            nuestra plataforma de pedidos para panaderia.
          </p>
        </div>

        {/* Tech Stack Section */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Code2 className="h-8 w-8 text-primary" />
            Stack Tecnologico
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Next.js */}
            <Card className="dark:shadow-[6px_6px_12px_var(--neu-shadow-dark),-6px_-6px_12px_var(--neu-shadow-light)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Next.js 16
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Framework de React para produccion con renderizado hibrido, 
                  App Router y Server Components.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">App Router</Badge>
                  <Badge variant="outline">RSC</Badge>
                  <Badge variant="outline">Turbopack</Badge>
                </div>
              </CardContent>
            </Card>

            {/* React */}
            <Card className="dark:shadow-[6px_6px_12px_var(--neu-shadow-dark),-6px_-6px_12px_var(--neu-shadow-light)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  React 19
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Biblioteca para construir interfaces de usuario con componentes 
                  reutilizables y estado reactivo.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Hooks</Badge>
                  <Badge variant="outline">Context API</Badge>
                  <Badge variant="outline">Client Components</Badge>
                </div>
              </CardContent>
            </Card>

            {/* TypeScript */}
            <Card className="dark:shadow-[6px_6px_12px_var(--neu-shadow-dark),-6px_-6px_12px_var(--neu-shadow-light)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  TypeScript
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Superset de JavaScript con tipado estatico para mayor 
                  seguridad y mejor experiencia de desarrollo.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Type Safety</Badge>
                  <Badge variant="outline">IntelliSense</Badge>
                  <Badge variant="outline">Interfaces</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Tailwind CSS */}
            <Card className="dark:shadow-[6px_6px_12px_var(--neu-shadow-dark),-6px_-6px_12px_var(--neu-shadow-light)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  Tailwind CSS v4
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Framework CSS utility-first para diseño rapido y consistente 
                  con soporte para temas oscuros.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Utility-First</Badge>
                  <Badge variant="outline">Dark Mode</Badge>
                  <Badge variant="outline">Responsive</Badge>
                </div>
              </CardContent>
            </Card>

            {/* shadcn/ui */}
            <Card className="dark:shadow-[6px_6px_12px_var(--neu-shadow-dark),-6px_-6px_12px_var(--neu-shadow-light)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  shadcn/ui
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Coleccion de componentes reutilizables construidos con 
                  Radix UI y Tailwind CSS.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Accesibilidad</Badge>
                  <Badge variant="outline">Customizable</Badge>
                  <Badge variant="outline">Radix UI</Badge>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp API */}
            <Card className="dark:shadow-[6px_6px_12px_var(--neu-shadow-dark),-6px_-6px_12px_var(--neu-shadow-light)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  WhatsApp API
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Integracion con WhatsApp para enviar pedidos directamente 
                  al negocio via mensaje pre-formateado.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Click-to-Chat</Badge>
                  <Badge variant="outline">URL Scheme</Badge>
                  <Badge variant="outline">Pre-filled</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Layers className="h-8 w-8 text-primary" />
            Arquitectura del Proyecto
          </h2>
          
          <Card className="dark:shadow-[6px_6px_12px_var(--neu-shadow-dark),-6px_-6px_12px_var(--neu-shadow-light)]">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Estructura de Carpetas</h3>
                  <div className="bg-secondary/50 rounded-lg p-4 font-mono text-sm">
                    <pre className="text-foreground">{`/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Inicio)
│   ├── shop/page.tsx (Tienda)
│   └── pitch/page.tsx (PITCH)
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── home/
│   │   ├── hero.tsx
│   │   ├── featured-products.tsx
│   │   ├── categories-section.tsx
│   │   └── testimonials.tsx
│   ├── shop/
│   │   ├── product-card.tsx
│   │   ├── product-grid.tsx
│   │   ├── cart-sidebar.tsx
│   │   └── ...
│   └── ui/ (shadcn)
├── context/
│   ├── cart-context.tsx
│   └── theme-context.tsx
└── lib/
    ├── types.ts
    └── utils.ts`}</pre>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Patrones Utilizados</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span><strong>Context API</strong> para estado global (carrito, tema)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span><strong>Composicion de componentes</strong> para reutilizabilidad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span><strong>Server/Client Components</strong> separados apropiadamente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span><strong>Design Tokens</strong> via CSS variables para temas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span><strong>Neumorfismo</strong> en modo oscuro con sombras CSS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span><strong>Responsive Design</strong> mobile-first</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* SCRUM Section */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Repeat className="h-8 w-8 text-primary" />
            Metodologia SCRUM
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="dark:shadow-[6px_6px_12px_var(--neu-shadow-dark),-6px_-6px_12px_var(--neu-shadow-light)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Que es SCRUM?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SCRUM es un marco de trabajo agil para desarrollo de software que permite 
                  entregar productos de alto valor de forma iterativa e incremental. 
                  Se basa en sprints cortos, roles definidos y ceremonias regulares 
                  para maximizar la productividad y adaptabilidad.
                </p>
              </CardContent>
            </Card>

            <Card className="dark:shadow-[6px_6px_12px_var(--neu-shadow-dark),-6px_-6px_12px_var(--neu-shadow-light)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Roles del Equipo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Product Owner:</strong> Define requisitos y prioridades</li>
                  <li><strong className="text-foreground">Scrum Master:</strong> Facilita el proceso y remueve obstaculos</li>
                  <li><strong className="text-foreground">Dev Team:</strong> Desarrolla el producto incrementalmente</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sprint Timeline */}
          <Card className="dark:shadow-[6px_6px_12px_var(--neu-shadow-dark),-6px_-6px_12px_var(--neu-shadow-light)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Sprints del Proyecto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Sprint 1 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                    <div className="w-0.5 h-full bg-border mt-2" />
                  </div>
                  <div className="pb-6">
                    <h4 className="font-semibold text-lg">Sprint 1: Configuracion y Estructura</h4>
                    <p className="text-muted-foreground mb-2">Duracion: 1 dia</p>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Configuracion del proyecto Next.js
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Definicion de tema y colores
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Estructura de carpetas y componentes base
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Sprint 2 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                    <div className="w-0.5 h-full bg-border mt-2" />
                  </div>
                  <div className="pb-6">
                    <h4 className="font-semibold text-lg">Sprint 2: Homepage y Navegacion</h4>
                    <p className="text-muted-foreground mb-2">Duracion: 1 dia</p>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Hero section con CTA
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Productos destacados
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Categorias y testimonios
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Sprint 3 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                    <div className="w-0.5 h-full bg-border mt-2" />
                  </div>
                  <div className="pb-6">
                    <h4 className="font-semibold text-lg">Sprint 3: Tienda y Carrito</h4>
                    <p className="text-muted-foreground mb-2">Duracion: 1 dia</p>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Catalogo de productos con filtros
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Carrito de compras con Context API
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Integracion con WhatsApp API
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Sprint 4 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Sprint 4: Mejoras y Localizacion</h4>
                    <p className="text-muted-foreground mb-2">Duracion: 1 dia</p>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Traduccion al espanol
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Modo oscuro neumorfrico
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Documentacion PITCH
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Benefits Section */}
        <section>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <TrendingUp className="h-8 w-8 text-primary" />
            Beneficios del Stack
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Rendimiento", desc: "SSR y optimizacion automatica con Next.js" },
              { title: "Mantenibilidad", desc: "Codigo organizado y tipado con TypeScript" },
              { title: "Escalabilidad", desc: "Arquitectura modular y componentes reutilizables" },
              { title: "UX Moderna", desc: "Interfaz responsiva con modo oscuro" },
            ].map((benefit, i) => (
              <Card key={i} className="text-center dark:shadow-[6px_6px_12px_var(--neu-shadow-dark),-6px_-6px_12px_var(--neu-shadow-light)]">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
