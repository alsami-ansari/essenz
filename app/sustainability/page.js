import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Recycle, TreePine } from "lucide-react"

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-6 text-center">Our Commitment to Sustainability</h1>
        
        <div className="mb-8">
          <p className="text-amber-700 mb-4">
            At Essenz, we believe that luxury and sustainability can go hand in hand. We're committed to creating 
            products that not only enhance your living space but also minimize our impact on the environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Leaf className="w-12 h-12 text-amber-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-amber-800">Eco-Friendly Materials</h2>
              <p className="text-center text-amber-700">
                We use 100% soy wax, which is renewable, biodegradable, and burns cleaner than paraffin wax.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Recycle className="w-12 h-12 text-amber-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-amber-800">Recyclable Packaging</h2>
              <p className="text-center text-amber-700">
                Our packaging is made from recycled materials and is fully recyclable to minimize waste.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <TreePine className="w-12 h-12 text-amber-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-amber-800">Reforestation Efforts</h2>
              <p className="text-center text-amber-700">
                For every candle sold, we plant a tree through our partnership with global reforestation projects.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-amber-200 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-amber-900 mb-4">Our Sustainability Goals</h2>
          <ul className="list-disc list-inside text-amber-700 space-y-2">
            <li>Achieve carbon neutrality in our operations by 2025</li>
            <li>Use 100% renewable energy in our production facility by 2024</li>
            <li>Eliminate all single-use plastics from our packaging by 2023</li>
            <li>Increase our use of organic and locally-sourced ingredients to 80% by 2026</li>
          </ul>
        </div>
      </main>
    </div>
  )
}