export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: "breads" | "pastries" | "cakes" | "cookies"
  image: string
}

export const products: Product[] = [
  {
    id: "sourdough-loaf",
    name: "Pan de Masa Madre",
    description: "Masa madre tradicional fermentada 24 horas con corteza crujiente",
    price: 8.50,
    category: "breads",
    image: "https://images.unsplash.com/photo-1620921592619-652411a0d01a?w=400&h=400&fit=crop",
  },
  {
    id: "baguette",
    name: "Baguette Francesa",
    description: "Clasica baguette francesa con exterior dorado y crujiente",
    price: 4.00,
    category: "breads",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=400&fit=crop",
  },
  {
    id: "ciabatta",
    name: "Ciabatta",
    description: "Pan italiano con textura aireada y aceite de oliva",
    price: 5.50,
    category: "breads",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
  },
  {
    id: "croissant",
    name: "Croissant de Mantequilla",
    description: "Capas hojaldradas y con mantequilla, perfeccion francesa",
    price: 3.50,
    category: "pastries",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop",
  },
  {
    id: "pain-au-chocolat",
    name: "Pain au Chocolat",
    description: "Masa de croissant con mantequilla rellena de chocolate oscuro",
    price: 4.00,
    category: "pastries",
    image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&h=400&fit=crop",
  },
  {
    id: "danish",
    name: "Danish de Frutas",
    description: "Hojaldre con frutas de temporada y crema",
    price: 4.50,
    category: "pastries",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&h=400&fit=crop",
  },
  {
    id: "chocolate-cake",
    name: "Torta de Chocolate",
    description: "Bizcocho de chocolate con glaseado de ganache aterciopelado",
    price: 45.00,
    category: "cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
  },
  {
    id: "carrot-cake",
    name: "Torta de Zanahoria",
    description: "Torta especiada y humeda con glaseado de queso crema",
    price: 38.00,
    category: "cakes",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=400&fit=crop",
  },
  {
    id: "cheesecake",
    name: "Cheesecake New York",
    description: "Clasico cheesecake cremoso con base de galleta graham",
    price: 42.00,
    category: "cakes",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop",
  },
  {
    id: "chocolate-chip",
    name: "Galletas con Chispas de Chocolate",
    description: "Galletas clasicas cargadas de chispas de chocolate (paquete de 6)",
    price: 12.00,
    category: "cookies",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop",
  },
  {
    id: "macarons",
    name: "Macarons Franceses",
    description: "Delicadas galletas de almendra en sabores surtidos (paquete de 12)",
    price: 24.00,
    category: "cookies",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&h=400&fit=crop",
  },
  {
    id: "oatmeal-raisin",
    name: "Galletas de Avena con Pasas",
    description: "Galletas masticables de avena con pasas jugosas (paquete de 6)",
    price: 10.00,
    category: "cookies",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop",
  },
]

export const categories = [
  { id: "breads", name: "Panes", description: "Horneados frescos diariamente" },
  { id: "pastries", name: "Pasteleria", description: "Hojaldrados y deliciosos" },
  { id: "cakes", name: "Tortas", description: "Para ocasiones especiales" },
  { id: "cookies", name: "Galletas", description: "Dulces tentaciones" },
] as const
