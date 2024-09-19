import Link from 'next/link'
import { ShoppingCart, Menu, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const cartItems = [
  { id: 1, name: "Lavender Dreams", price: 699.00, quantity: 2, image: "https://raw.githubusercontent.com/samiansari01/calculator/refs/heads/main/lavender.jpg" },
  { id: 2, name: "Vanilla Bliss", price: 699.00, quantity: 1, image: "https://raw.githubusercontent.com/samiansari01/calculator/refs/heads/main/4.jpg" },
]

export default function CartPage() {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  return (
    <div>
     

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-black">Your Cart</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <Table className="text-black">
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Total</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="flex text-black items-center">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                      <span>{item.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Input type="number" defaultValue={item.quantity} className="w-16 text-black text-center" />
                  </TableCell>
                  <TableCell>₹{item.price.toFixed(2)}</TableCell>
                  <TableCell>₹{(item.price * item.quantity).toFixed(2)}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4 text-black" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-6 flex justify-end">
            <div className="w-1/3 text-black">
              <div className="text-black flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="flex  justify-between font-semibold">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div> 
            <Link href="/checkout"> <Button className="w-full mt-4 bg-amber-600 md:text-white text-black hover:bg-amber-700 hover:text-white">Proceed to Checkout</Button> </Link>
            </div>
          </div>
        </div>
      </main>

    
    </div>
  )
}