"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Menu, X, Flame, ShoppingBag, Leaf, Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      
      {/* <header className="p-4 bg-amber-200">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-800">Scented Bliss</h1>
          <Button variant="ghost">Shop Now</Button>
        </nav>
      </header> */}

     

      {/*  */}

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Illuminate Your Senses</h2>
          <p className="text-lg text-amber-700 mb-6">Handcrafted scented candles for every mood and occasion</p>
        <Link href="/products">  <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
            Explore Collection
          </Button> </Link>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Flame className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Long-lasting Burn</h3>
              <p className="text-center text-amber-700">Our candles burn for up to 50 hours, filling your space with delightful scents.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <ShoppingBag className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eco-friendly Packaging</h3>
              <p className="text-center text-amber-700">We use recyclable materials to ensure our products are kind to the environment.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Leaf className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Natural Ingredients</h3>
              <p className="text-center text-amber-700">Our candles are made from 100% soy wax and essential oils for a clean burn.</p>
            </CardContent>
          </Card>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Featured Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3,4,5,6].map((i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <img
                    src={`https://raw.githubusercontent.com/samiansari01/calculator/refs/heads/main/1.jpg`}
                    alt={`Candle ${i}`}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 className="text-xl font-semibold mb-2">Scented Candle {i}</h3>
                  <p className="text-amber-700 mb-4">A delightful blend of fragrances to enhance your space.</p>
                  <Button variant="outline" className="w-full bg-amber-600 text-white hover:bg-amber-700 hover:text-white">Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

  
    </div>
  )
}