import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Gift, Star, Heart } from "lucide-react"

const giftSets = [
  {
    id: 1,
    name: "Relaxation Retreat",
    description: "A calming collection of lavender, chamomile, and vanilla scented candles.",
    price: 1500.00,
    includes: ["1x Lavender Dreams", "1x Chamomile Comfort", "1x Vanilla Bliss"]
  },
  {
    id: 2,
    name: "Seasonal Sensations",
    description: "Experience the year's best scents with this curated seasonal collection.",
    price: 2000.00,
    includes: ["1x Spring Blossom", "1x Summer Breeze", "1x Autumn Spice", "1x Winter Frost"]
  },
  {
    id: 3,
    name: "Aromatherapy Essentials",
    description: "Enhance your well-being with these essential oil-infused candles.",
    price: 2300.00,
    includes: ["1x Eucalyptus Calm", "1x Peppermint Boost", "1x Lemongrass Clarity"]
  }
]

export default function GiftSets() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-6 text-center">Curated Gift Sets</h1>
        
        <p className="text-amber-700 text-center mb-8 max-w-2xl mx-auto">
          Discover our specially curated gift sets, perfect for treating yourself or someone special. 
          Each set is thoughtfully designed to create a harmonious sensory experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {giftSets.map((set) => (
            <Card key={set.id} className="flex flex-col">
              <CardContent className="flex-grow p-6">
                <div className="flex justify-center mb-4">
                  <Gift className="w-16 h-16 text-amber-600" />
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-amber-800 text-center">{set.name}</h2>
                <p className="text-amber-700 mb-4 text-center">{set.description}</p>
                <p className="text-xl font-bold text-amber-900 mb-4 text-center">₹{set.price.toFixed(2)}</p>
                <h3 className="text-lg font-semibold text-amber-800 mb-2">Includes:</h3>
                <ul className="list-disc list-inside text-amber-700 mb-4">
                  {set.includes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-amber-200 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-amber-900 mb-4 text-center">Why Choose Our Gift Sets?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <Gift className="w-12 h-12 text-amber-600 mb-2" />
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Beautifully Packaged</h3>
              <p className="text-amber-700 text-center">Each set comes in elegant, eco-friendly packaging.</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 text-amber-600 mb-2" />
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Premium Quality</h3>
              <p className="text-amber-700 text-center">Handcrafted candles made with the finest ingredients.</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="w-12 h-12 text-amber-600 mb-2" />
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Perfect for Any Occasion</h3>
              <p className="text-amber-700 text-center">Ideal for birthdays, holidays, or as a treat for yourself.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}