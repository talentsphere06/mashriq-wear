"use client"
import React, { useEffect, useState } from 'react'
import { Product } from '@/sanity/lib/type'
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions'
import Swal from 'sweetalert2'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { useRouter } from 'next/navigation'
// import AuthGuard from '@/components/AuthGuard'
import { Button } from '@/components/ui/button'
// import { toast } from 'react-toastify'

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [discountCode, setDiscountCode] = useState<string>('')
  const [isDiscountApplied, setIsDiscountApplied] = useState<boolean>(false)
  const [discount, setDiscount] = useState<number>(0)

  useEffect(() => {
    setCartItems(getCartItems())
    const savedDiscount = localStorage.getItem('appliedDiscount')
    if (savedDiscount) {
      setIsDiscountApplied(true)
      setDiscount(Number(savedDiscount))
    }
  }, [])

  const handleRemoveFromCart = (productId: string) => {
    // toast.success('Item removed from cart')
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this item from cart?", 
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!"
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(productId)
        setCartItems(getCartItems())
        Swal.fire("Removed!", "Item has been removed.", "success")
      }
    })
  }

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity)
    setCartItems(getCartItems())
  }

  const handleIncrement = (id: string) => {
    const product = cartItems.find(item => item._id === id)
    if (product) {
      handleQuantityChange(id, product.stock + 1)
    }
  }

  const handleDecrement = (id: string) => {
    const product = cartItems.find(item => item._id === id)
    if (product && product.stock > 1) {
      handleQuantityChange(id, product.stock - 1)
    }
  }

  const calculatedTotal = () => {
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.stock, 0)
    return isDiscountApplied ? subtotal - 50 : subtotal
  }

  const router = useRouter();

  const handleProcessing = () => {
    Swal.fire({
      title: "Proceed To checkout",
      text: "Please review your cart before checkout?",
      icon: "question", 
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!"
    }).then((result) => {
      if (result.isConfirmed) {
        router.push('/checkout')
        setCartItems([])
        Swal.fire("Success", "Your Order has been successfully processed", "success")
      }
    })
  }

  const handleDiscountCode = () => {
    if(discountCode === 'inde') {
      setIsDiscountApplied(true)
      setDiscount(50)
      localStorage.setItem('appliedDiscount', '50')
      Swal.fire("Success", "$50 discount applied!", "success")
    } else {
      setIsDiscountApplied(false)
      setDiscount(0)
      localStorage.removeItem('appliedDiscount')
      Swal.fire("Error", "Invalid discount code!", "error")
    }
  }

  return (
    // <AuthGuard> {/* </AuthGuard> */}
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item._id} className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-xl shadow-md">
                <div className="flex items-center space-x-4 w-full md:w-auto">
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="object-cover rounded-xl w-28 h-28"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mt-4 md:mt-0">
                  <button
                    className="bg-gray-200 text-xl px-3 py-1 rounded-lg cursor-pointer"
                    onClick={() => handleDecrement(item._id)}
                  >−</button>
                  <span className="px-4">{item.stock}</span>
                  <button
                    className="bg-gray-200 text-xl px-3 py-1 rounded-lg cursor-pointer"
                    onClick={() => handleIncrement(item._id)}
                  >+</button>
                </div>

                <div className="mt-4 md:mt-0">
                  <button
                    onClick={() => handleRemoveFromCart(item._id)}
                    className="text-red-600 hover:underline cursor-pointer"
                  >Remove</button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white p-6 rounded-xl shadow-md h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Items:</span>
              <span>{cartItems.reduce((total, item) => total + item.stock, 0)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Sub Total:</span>
              <span className="font-semibold">${cartItems.reduce((total, item) => total + item.price * item.stock, 0).toFixed(2)}</span>
            </div>
            <div className="mb-4 flex gap-3">
              <input
                type="text"
                placeholder="Enter discount code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className="w-full p-2 border rounded-lg mb-2"
              />
              <Button className='bg-blue-500 cursor-pointer' onClick={handleDiscountCode}>Apply Coupon</Button>
            </div>
              {isDiscountApplied && (
                <p className="text-green-600 text-md">${discount} discount applied!</p>
              )}
            <div className="flex justify-between mb-4 mt-4">
              <span>Total:</span>
              <span className="font-semibold">${calculatedTotal().toFixed(2)}</span>
            </div>
            <button
              onClick={handleProcessing}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-300 cursor-pointer"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
    
  )
}

export default Cart