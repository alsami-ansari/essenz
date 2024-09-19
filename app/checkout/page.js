import Link from 'next/link'
import { ShoppingCart, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CheckoutPage() {
  return (
    <div className="">
     

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required />
                </div>
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" required />
                </div>
                <div>
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input id="postalCode" required />
                </div>
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Select>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ind">India</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>

            <h2 className="text-xl font-semibold mt-8 mb-4">Payment Method</h2>
            <RadioGroup defaultValue="card">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card">Credit Card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal">PayPal</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="rounded-lg shadow-md p-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>2097.0</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹100.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>₹55.00</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>₹2252.00</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-amber-600 text-white hover:bg-amber-700 hover:text-white">Place Order</Button>
            </div>
          </div>
        </div>
      </main>

    
    </div>
  )
}