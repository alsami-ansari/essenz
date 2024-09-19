import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-6 text-center">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-amber-700">Name</label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-700">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-amber-700">Message</label>
                <Textarea id="message" placeholder="Your message here..." className="h-32" />
              </div>
              <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">Send Message</Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Contact Information</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-amber-600 mr-2" />
                <p className="text-amber-700">
                84/247, Sector 8, Pratap Nagar, Jaipur, Rajasthan 302033</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-amber-600 mr-2" />
                <p className="text-amber-700">7877599226</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-amber-600 mr-2" />
                <p className="text-amber-700">essenz@gmail.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Find Us</h3>
              <div className="rounded-lg">
                {/* Replace this div with an actual map component */}
                <iframe className="h-72 rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.171876071656!2d75.8136296752204!3d26.802655376712938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc98da8369fab%3A0x85c6bf78522b97bd!2s84%2F247%2C%20Sector%208%2C%20Sector%209%2C%20Pratap%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302033!5e0!3m2!1sen!2sin!4v1726757519876!5m2!1sen!2sin"  loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}