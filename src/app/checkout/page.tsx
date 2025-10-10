"use client";
import React, { useEffect, useState } from "react";
import { getCartItems } from "../actions/actions";
import { Product } from "@/sanity/lib/type";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import SimpleStripePayment from "@/components/SimpleStripePayment";

const Page = () => {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [discount, setDiscount] = useState<number>(0)
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cod'>('card')
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
  })

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  })

  useEffect(() => {
    setCartItems(getCartItems())
    const appliedDiscount = localStorage.getItem('appliedDiscount')
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount))
    }
  }, [])

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.stock,
    0
  )

  const total = Number((subTotal - discount).toFixed(2))

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    })
  }

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    }
    setFormErrors(errors)
    return Object.values(errors).every((error) => !error)
  }

  const updateProductStock = async (productId: string, soldQuantity: number) => {
    // Get current product
    const product = await client.getDocument(productId)
    // Calculate new stock
    const newStock = product?.stock - soldQuantity
    // Update product stock
    await client
      .patch(productId)
      .set({stock: newStock})
      .commit()
  }

  const handlePlaceOrder = async () => {
    // Check if cart is empty
    if (cartItems.length === 0) {
      Swal.fire("Error", "Your cart is empty! Please add items to cart first.", "error")
      return
    }

    // For COD, validate shipping form
    if (paymentMethod === 'cod') {
    if (!validateForm()) return
    }

    const orderData = {
      _type : 'order',
      firstName : formValues.firstName,
      lastName : formValues.lastName,
      email : formValues.email,
      phone : formValues.phone,
      address : formValues.address,
      zipCode : formValues.zipCode,
      city : formValues.city,
      paymentMethod: paymentMethod,
      cartItems : cartItems.map((item) => ({
        _type : 'reference',
        _ref : item._id
      })),
      total : total,
      discount : discount,
      orderDate : new Date().toISOString()
    }

    try {
      await client.create(orderData)
      
      // Update stock for each product
      for (const item of cartItems) {
        await updateProductStock(item._id, item.stock)
      }
      
      // Clear cart and discount
      localStorage.removeItem('appliedDiscount')
      localStorage.removeItem('cart')
      setCartItems([])
      setDiscount(0)
      
      Swal.fire("Success", "Order placed successfully!", "success")
    } 
    catch(error){
      console.error("error creating order", error)
      Swal.fire("Error", "Failed to place order", "error")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
        <nav className="mb-6 text-sm flex items-center">
          <Link href="/cart" className="">
            Cart
          </Link>{' '}
          <ChevronRight className='text-slate-500'/>
           <span className="text-gray-700">Checkout</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
          <div>
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center gap-4 border p-4 rounded-md bg-white shadow-sm"
                  >
                    <div className="w-24 h-24">
                      {item.image && (
                        <Image
                          src={urlFor(item.image).url()}
                          alt={item.name}
                          width={100}
                          height={100}
                          className="object-cover w-full h-full rounded"
                        />
                    
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.stock}
                      </p>
                      <p className="font-medium">
                        USD {(item.price * item.stock).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="mt-4 border-t pt-4">
                  <p className="flex justify-between">
                    <span>Subtotal</span>
                    <span>Rs {subTotal.toFixed(2)}</span>
                  </p>
                  <p className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>− Rs {discount.toFixed(2)}</span>
                  </p>
                  <p className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>Rs {total}</span>
                  </p>
                </div>
              </div>
            ) : (
              <p>No items in the cart</p>
            )}
          </div>

          {/* RIGHT: Payment Method & Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
            
            {/* Payment Method Selection */}
            <div className="space-y-4 mb-6">
              <label className="flex items-center gap-3 cursor-pointer p-4 border rounded-lg hover:bg-gray-50">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value as 'card')}
                  className="w-4 h-4"
                />
                <div>
                  <span className="font-medium">Pay with Card (Stripe)</span>
                  <p className="text-sm text-gray-600">Secure payment with credit/debit card</p>
                </div>
              </label>
              
              <label className="flex items-center gap-3 cursor-pointer p-4 border rounded-lg hover:bg-gray-50">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={(e) => setPaymentMethod(e.target.value as 'cod')}
                  className="w-4 h-4"
                />
          <div>
                  <span className="font-medium">Cash on Delivery</span>
                  <p className="text-sm text-gray-600">Pay when you receive your order</p>
                </div>
              </label>
            </div>

            {/* Show Shipping Form only for COD */}
            {paymentMethod === 'cod' && (
              <div className="mb-6 border-1 border-black rounded-2xl p-4">
                <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
            <div className="space-y-4">
              {Object.entries(formValues).map(([key, value]) => (
                <div key={key}>
                  <input
                    id={key}
                    type="text"
                    placeholder={key.replace(/([A-Z])/g, ' $1')}
                    value={value}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded ${
                      formErrors[key as keyof typeof formErrors]
                        ? 'border-red-500'
                        : 'border-gray-300'
                    }`}
                  />
                  {formErrors[key as keyof typeof formErrors] && (
                    <p className="text-red-500 text-sm mt-1">
                      This field is required.
                    </p>
                  )}
                </div>
              ))}
            </div>
              </div>
            )}

            {/* Payment Button */}
            {paymentMethod === 'card' ? (
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Card Payment</h3>
                {cartItems.length > 0 ? (
                  <SimpleStripePayment 
                    amount={total} 
                    onPaymentSuccessAction={() => {
                      setCartItems([])
                      setDiscount(0)
                    }}
                  />
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-4">Your cart is empty</p>
                    <Link 
                      href="/cart"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Go to Cart
                    </Link>
                  </div>
                )}
              </div>
            ) : (
            <button
              onClick={handlePlaceOrder}
                className="w-full bg-green-600 cursor-pointer hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg">
                Place Order (Cash on Delivery) - Rs {total.toFixed(2)}
            </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page


