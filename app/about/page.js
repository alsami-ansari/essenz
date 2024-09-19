import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-6 text-center">About Essenz</h1>
        
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <img
              src="https://raw.githubusercontent.com/samiansari01/calculator/refs/heads/main/1.jpg"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
          <h2 className="text-2xl font-semibold text-amber-800 mb-4 text-center sm:text-left">Our Story</h2>

            <p className="text-amber-700 mb-4">
              Essenz was born out of a passion for creating harmonious living spaces through the power of scent. 
              Founded in 2024, we've dedicated ourselves to crafting premium, eco-friendly candles that not only fill your 
              home with delightful fragrances but also contribute to a sustainable future.
            </p>
            <p className="text-amber-700 mb-4">
              Our journey began in a small kitchen, experimenting with different wax blends and essential oils. Today, 
              we're proud to offer a wide range of scents that cater to every mood and occasion, all while maintaining 
              our commitment to quality and sustainability.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Mission</h2>
          <p className="text-amber-700 mb-4">
            At Essenz, our mission is to enhance everyday moments through the art of fragrance. We believe that 
            a well-crafted scent has the power to uplift, calm, and transform any space. Our goal is to provide you with 
            candles that not only smell amazing but also align with your values of sustainability and quality.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Commitment</h2>
          <p className="text-amber-700 mb-6">
            We're committed to using only the finest, sustainably sourced ingredients in our candles. From our 100% soy 
            wax to our lead-free cotton wicks, every component is chosen with care for both you and the environment.
          </p>
       <Link href="/products">   <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
            Explore Our Products
          </Button> </Link>
        </div>
      </main>
    </div>
  )
}