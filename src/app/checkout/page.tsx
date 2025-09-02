"use client";
import React, { useEffect, useState } from "react";
import { getCartItems } from "../actions/actions";
import { Product } from "@/sanity/lib/type";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [shipping, setShipping] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: false,
    email: false,
    address: false,
    city: false,
    postalCode: false,
    country: false,
  });

  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.stock,
    0
  );
  const total = Number((subtotal - discount).toFixed(2));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {
      fullName: !shipping.fullName,
      email: !shipping.email,
      address: !shipping.address,
      city: !shipping.city,
      postalCode: !shipping.postalCode,
      country: !shipping.country,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const updateProductStock = async (productId: string, soldQuantity: number) => {
    const product = await client.getDocument(productId);
    const newStock = product?.stock - soldQuantity;
    await client.patch(productId).set({ stock: newStock }).commit();
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;

    const orderData = {
      _type: "order",
      ...shipping,
      paymentMethod,
      cartItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item._id,
      })),
      total,
      discount,
      orderDate: new Date().toISOString(),
    };

    try {
      await client.create(orderData);
      Swal.fire("Success", "Order placed successfully!", "success");

      for (const item of cartItems) {
        await updateProductStock(item._id, item.stock);
      }

      localStorage.removeItem("appliedDiscount");
      localStorage.removeItem("cart");
      setCartItems([]);
      // Swal.fire("Success", "Order placed successfully!", "success");
    } catch (error) {
      console.error("Error creating order", error);
      Swal.fire("Error", "Failed to place order", "error");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-md h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between mb-4"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-500 text-sm">Qty: {item.stock}</p>
                </div>
              </div>
              <span className="font-semibold">
                ${(item.price * item.stock).toFixed(2)}
              </span>
            </div>
          ))}
          <div className="flex justify-between mt-4 border-t pt-4">
            <span className="font-semibold">Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount:</span>
            <span>− ${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </div>

        {/* Shipping + Payment */}
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping Information */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(shipping).map(([key, value]) => (
                <div key={key} className="col-span-1">
                  <input
                    type="text"
                    name={key}
                    placeholder={key.replace(/([A-Z])/g, " $1")}
                    value={value}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded-lg ${
                      formErrors[key as keyof typeof formErrors]
                        ? "border-red-500"
                        : "border-gray-300"
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

          {/* Payment Method */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
            <div className="space-y-3">
              {["credit-card", "paypal", "cod"].map((method) => (
                <label
                  key={method}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  {method === "credit-card"
                    ? "Credit Card"
                    : method === "paypal"
                    ? "PayPal"
                    : "Cash on Delivery"}
                </label>
              ))}
            </div>
          </div>

          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg cursor-pointer"
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;


// 'use client'
// import React, { useEffect, useState } from 'react'
// import { Product } from '@/sanity/lib/type'
// import { getCartItems } from '../actions/actions'
// import Link from 'next/link'
// import Image from 'next/image'
// import { urlFor } from '@/sanity/lib/image'
// import { ChevronRight } from 'lucide-react'
// import Swal from 'sweetalert2'
// import { client } from '@/sanity/lib/client'

// const Page = () => {
//   const [cartItems, setCartItems] = useState<Product[]>([])
//   const [discount, setDiscount] = useState<number>(0)
//   const [formValues, setFormValues] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     address: '',
//     zipCode: '',
//     city: '',
//   })

//   const [formErrors, setFormErrors] = useState({
//     firstName: false,
//     lastName: false,
//     email: false,
//     phone: false,
//     address: false,
//     zipCode: false,
//     city: false,
//   })

//   useEffect(() => {
//     setCartItems(getCartItems())
//     const appliedDiscount = localStorage.getItem('appliedDiscount')
//     if (appliedDiscount) {
//       setDiscount(Number(appliedDiscount))
//     }
//   }, [])

//   const subTotal = cartItems.reduce(
//     (total, item) => total + item.price * item.stock,
//     0
//   )

//   const total = Number((subTotal - discount).toFixed(2))

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormValues({
//       ...formValues,
//       [e.target.id]: e.target.value,
//     })
//   }

//   const validateForm = () => {
//     const errors = {
//       firstName: !formValues.firstName,
//       lastName: !formValues.lastName,
//       email: !formValues.email,
//       phone: !formValues.phone,
//       address: !formValues.address,
//       zipCode: !formValues.zipCode,
//       city: !formValues.city,
//     }
//     setFormErrors(errors)
//     return Object.values(errors).every((error) => !error)
//   }

//   const updateProductStock = async (productId: string, soldQuantity: number) => {
//     // Get current product
//     const product = await client.getDocument(productId)
//     // Calculate new stock
//     const newStock = product?.stock - soldQuantity
//     // Update product stock
//     await client
//       .patch(productId)
//       .set({stock: newStock})
//       .commit()
//   }

//   const handlePlaceOrder = async () => {
//     if (!validateForm()) return

//     const orderData = {
//       _type : 'order',
//       firstName : formValues.firstName,
//       lastName : formValues.lastName,
//       email : formValues.email,
//       phone : formValues.phone,
//       address : formValues.address,
//       zipCode : formValues.zipCode,
//       city : formValues.city,
//       cartItems : cartItems.map((item) => ({
//         _type : 'reference',
//         _ref : item._id
//       })),
//       total : total,
//       discount : discount,
//       orderDate : new Date().toISOString
//     }

//     try {
//       await client.create(orderData)
      
//       // Update stock for each product
//       for (const item of cartItems) {
//         await updateProductStock(item._id, item.stock)
//       }
      
//       localStorage.removeItem('appliedDiscount')
//       localStorage.removeItem('cart')
//       setCartItems([])
//       Swal.fire("Success", "Order placed successfully!", "success")
//     } 
//     catch(error){
//       console.error("error creating order", error)
//       Swal.fire("Error", "Failed to place order", "error")
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         {/* Top Nav */}
//         <nav className="mb-6 text-sm flex items-center">
//           <Link href="/cart" className="">
//             Cart
//           </Link>{' '}
//           <ChevronRight className='text-slate-500'/>
//            <span className="text-gray-700">Checkout</span>
//         </nav>

//         {/* Main Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* LEFT: Cart Items */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
//             {cartItems.length > 0 ? (
//               <div className="space-y-4">
//                 {cartItems.map((item) => (
//                   <div
//                     key={item._id}
//                     className="flex items-center gap-4 border p-4 rounded-md bg-white shadow-sm"
//                   >
//                     <div className="w-24 h-24">
//                       {item.image && (
//                         <Image
//                           src={urlFor(item.image).url()}
//                           alt={item.name}
//                           width={100}
//                           height={100}
//                           className="object-cover w-full h-full rounded"
//                         />
//                       )}
//                     </div>
//                     <div>
//                       <h3 className="font-semibold">{item.name}</h3>
//                       <p className="text-sm text-gray-600">
//                         Quantity: {item.stock}
//                       </p>
//                       <p className="font-medium">
//                         ${(item.price * item.stock).toFixed(2)}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//                 <div className="mt-4 border-t pt-4">
//                   <p className="flex justify-between">
//                     <span>Subtotal</span>
//                     <span>${subTotal.toFixed(2)}</span>
//                   </p>
//                   <p className="flex justify-between text-green-600">
//                     <span>Discount</span>
//                     <span>− ${discount.toFixed(2)}</span>
//                   </p>
//                   <p className="flex justify-between font-bold text-lg">
//                     <span>Total</span>
//                     <span>${total}</span>
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <p>No items in the cart</p>
//             )}
//           </div>

//           {/* RIGHT: Form */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">Shipping Info</h2>
//             <div className="space-y-4">
//               {Object.entries(formValues).map(([key, value]) => (
//                 <div key={key}>
//                   <input
//                     id={key}
//                     type="text"
//                     placeholder={key.replace(/([A-Z])/g, ' $1')}
//                     value={value}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-2 border rounded ${
//                       formErrors[key as keyof typeof formErrors]
//                         ? 'border-red-500'
//                         : 'border-gray-300'
//                     }`}
//                   />
//                   {formErrors[key as keyof typeof formErrors] && (
//                     <p className="text-red-500 text-sm mt-1">
//                       This field is required.
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//             <button
//               onClick={handlePlaceOrder}
//               className="w-full mt-6 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
//               Place Order
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Page