import { Card, CardContent } from "@/components/ui/card"
import { Flame, Scissors, Clock, Wind } from "lucide-react"

const careSteps = [
  {
    icon: Scissors,
    title: "Trim the Wick",
    description: "Before each burn, trim the wick to 1/4 inch. This promotes an even burn and reduces soot."
  },
  {
    icon: Clock,
    title: "Burn Time",
    description: "Allow the candle to burn for 2-3 hours at a time. This ensures the wax melts evenly across the surface."
  },
  {
    icon: Wind,
    title: "Avoid Drafts",
    description: "Keep your candle away from fans, open windows, or heavily trafficked areas to prevent uneven burning."
  },
  {
    icon: Flame,
    title: "Extinguish Properly",
    description: "Use a candle snuffer to extinguish the flame. This prevents hot wax from splattering and reduces smoke."
  }
]

export default function CandleCare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-6 text-center">Candle Care Guide</h1>
        
        <p className="text-amber-700 text-center mb-8 max-w-2xl mx-auto">
          Proper care ensures you get the most out of your Scented Bliss candles. Follow these simple steps to enjoy a 
          clean, long-lasting burn and maximize your candle's fragrance throw.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {careSteps.map((step, index) => (
            <Card key={index}>
              <CardContent className="flex items-start p-6">
                <step.icon className="w-12 h-12 text-amber-600 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-amber-800">{step.title}</h2>
                  <p className="text-amber-700">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-amber-200 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-amber-900 mb-4 text-center">Additional Care Tips</h2>
          <ul className="list-disc list-inside text-amber-700 space-y-2">
            <li>Store your candles in a cool, dry place away from direct sunlight to preserve their fragrance.</li>
            <li>Always place your candle on a heat-resistant surface.</li>
            <li>Never leave a burning candle unattended or within reach of children or pets.</li>
            <li>Discontinue use when only 1/2 inch of wax remains at the bottom of the container.</li>
            <li>To clean the container for reuse, place it in the freezer for a few hours. The remaining wax will easily pop out.</li>
          </ul>
        </div>
      </main>
    </div>
  )
}