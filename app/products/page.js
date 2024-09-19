import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  { id: 1, name: "Ethereal Lavender", price: 599, description: "Calming lavender scent for relaxation", image: "https://raw.githubusercontent.com/samiansari01/calculator/refs/heads/main/3.jpg" },
  { id: 2, name: "Bergamot Breeze", price: 599, description: "Energizing blend of Bergamot fragrances", image:"https://raw.githubusercontent.com/samiansari01/calculator/refs/heads/main/bergamot.jpg" },
  { id: 3, name: "Vanilla Noir", price: 599, description: "Warm and comforting vanilla aroma", image:"https://raw.githubusercontent.com/samiansari01/calculator/refs/heads/main/4.jpg" },
  { id: 4, name: "Brewed Harmony", price: 599, description: "Fresh scent of Bergamot ", image:"https://raw.githubusercontent.com/samiansari01/calculator/refs/heads/main/5.jpg" },
  { id: 5, name: "Ocean Breeze", price: 599, description: "Refreshing seaside fragrance", image:"https://raw.githubusercontent.com/samiansari01/calculator/refs/heads/main/6.jpg" },
  { id: 6, name: "Cinnamon Spice", price: 599, description: "Warm and spicy cinnamon scent", image:"https://raw.githubusercontent.com/samiansari01/calculator/refs/heads/main/1.jpg" },
]

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-6 text-center">Our Products</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain mb-4 rounded"
                />
                <h2 className="text-xl font-semibold mb-2 text-amber-800">{product.name}</h2>
                <p className="text-amber-700 mb-2">{product.description}</p>
                <p className="text-lg font-bold text-amber-900 mb-4">₹{product.price.toFixed(2)}</p>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">Add to Cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}