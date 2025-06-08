"use client"

import { useState } from "react"
import { ShoppingBag, ShoppingCart, User, Plus, Minus } from "lucide-react"
import { Button } from "../components/ui/button"

interface Product {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

interface Customer {
  id: number
  name: string
  email: string
  verified: boolean
}

export default function Component() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Nama produk", price: 35000, quantity: 1, image: "/product-image.png" },
    { id: 2, name: "Nama produk", price: 35000, quantity: 1, image: "/product-image.png" },
    { id: 3, name: "Nama produk", price: 35000, quantity: 1, image: "/product-image.png" },
    { id: 4, name: "Nama produk", price: 35000, quantity: 1, image: "/product-image.png" },
  ])

  const [customers, setCustomers] = useState<Customer[]>([
    { id: 1, name: "jhon sena", email: "jhonsena@gmail.com", verified: false },
    { id: 2, name: "jhon sena", email: "jhonsena@gmail.com", verified: false },
    { id: 3, name: "jhon sena", email: "jhonsena@gmail.com", verified: false },
    { id: 4, name: "jhon sena", email: "jhonsena@gmail.com", verified: false },
  ])

  const updateProductQuantity = (id: number, change: number) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, quantity: Math.max(0, product.quantity + change) } : product,
      ),
    )
  }

  const verifyCustomer = (id: number) => {
    setCustomers(customers.map((customer) => (customer.id === id ? { ...customer, verified: true } : customer)))
  }

  const formatPrice = (price: number) => {
    return `Rp. ${price.toLocaleString("id-ID")}, 00`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-400 text-white p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-400 font-bold text-sm">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Admin</h1>
              <p className="text-sm opacity-90">The Club Eskimo</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:opacity-80 transition-opacity">
              New release
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Latest release
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Categories
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <ShoppingBag className="w-6 h-6 cursor-pointer hover:opacity-80" />
            <ShoppingCart className="w-6 h-6 cursor-pointer hover:opacity-80" />
            <User className="w-6 h-6 cursor-pointer hover:opacity-80" />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Products Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Products Header */}
          <div className="bg-blue-300 text-white p-4">
            <div className="grid grid-cols-4 gap-4">
              <div className="font-medium">product Name</div>
              <div className="font-medium text-center">Price</div>
              <div className="font-medium text-center">Quantity</div>
              <div className="font-medium text-center">Actions</div>
            </div>
          </div>

          {/* Products List */}
          <div className="divide-y divide-gray-200">
            {products.map((product) => (
              <div key={product.id} className="p-4">
                <div className="grid grid-cols-4 gap-4 items-center">
                  {/* Product Info */}
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium text-gray-900">{product.name}</span>
                  </div>

                  {/* Price */}
                  <div className="text-center font-medium text-gray-900">{formatPrice(product.price)}</div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={() => updateProductQuantity(product.id, -1)}
                      className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <input
                      type="number"
                      value={product.quantity}
                      onChange={(e) => {
                        const newQuantity = Number.parseInt(e.target.value) || 0
                        setProducts(products.map((p) => (p.id === product.id ? { ...p, quantity: newQuantity } : p)))
                      }}
                      className="w-12 h-8 text-center border border-gray-300 rounded"
                    />
                    <button
                      onClick={() => updateProductQuantity(product.id, 1)}
                      className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-center space-x-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customers Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Customers Header */}
          <div className="bg-blue-300 text-white p-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="font-medium">Customer Name</div>
              <div className="font-medium text-center">Email</div>
              <div className="font-medium text-center">Verify order</div>
            </div>
          </div>

          {/* Customers List */}
          <div className="divide-y divide-gray-200">
            {customers.map((customer) => (
              <div key={customer.id} className="p-4">
                <div className="grid grid-cols-3 gap-4 items-center">
                  {/* Customer Name */}
                  <div className="font-medium text-gray-900">{customer.name}</div>

                  {/* Email */}
                  <div className="text-center text-gray-900">{customer.email}</div>

                  {/* Verify Button */}
                  <div className="flex justify-center">
                    <Button
                      onClick={() => verifyCustomer(customer.id)}
                      disabled={customer.verified}
                      className={`px-6 py-2 rounded font-medium ${
                        customer.verified
                          ? "bg-gray-400 text-white cursor-not-allowed"
                          : "bg-green-500 hover:bg-green-600 text-white"
                      }`}
                    >
                      {customer.verified ? "Verified" : "Verify"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
