import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Truck, BadgeDollarSign } from "lucide-react"

export default function Wholesale() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-6 text-center">Wholesale Inquiries</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-amber-700 mb-6">
              Thank you for your interest in becoming Essenz wholesale partner. We're excited to share our 
              premium candles with your customers. Please fill out the form below, and our team will get back to you 
              within 2 business days.
            </p>

            <form className="space-y-4">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-amber-700">Company Name</label>
                <Input id="company" placeholder="Your Company Name" />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-amber-700">Contact Name</label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-700">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-amber-700">Phone Number</label>
                <Input id="phone" type="tel" placeholder="(123) 456-7890" />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-amber-700">Website</label>
                <Input id="website" type="url" placeholder="https://www.yourwebsite.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-amber-700">Additional Information</label>
                <Textarea id="message" placeholder="Tell us about your business and why you're interested in our products..." className="h-32" />
              </div>
              <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">Submit Inquiry</Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-900 mb-4">Why Partner with Essenz?</h2>
            <div className="grid gap-4">
              <Card>
                <CardContent className="flex items-center p-4">
                  <Building2 className="w-8 h-8 text-amber-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-amber-800">Premium Quality Products</h3>
                    <p className="text-amber-700">Handcrafted candles made with sustainable, high-quality ingredients.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center p-4">
                  <Users className="w-8 h-8 text-amber-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-amber-800">Dedicated Support</h3>
                    <p className="text-amber-700">Our team is here to help you succeed with personalized assistance.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center p-4">
                  <Truck className="w-8 h-8 text-amber-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-amber-800">Flexible Shipping Options</h3>
                    <p className="text-amber-700">We offer various shipping methods to meet your business needs.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center p-4">
                  <BadgeDollarSign className="w-8 h-8 text-amber-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-amber-800">Competitive Pricing</h3>
                    <p className="text-amber-700">Attractive wholesale rates to ensure healthy margins for your business.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}