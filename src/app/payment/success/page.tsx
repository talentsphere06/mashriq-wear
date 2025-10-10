'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const [paymentIntent, setPaymentIntent] = useState<{ id: string } | null>(null);

  useEffect(() => {
    const paymentIntentId = searchParams.get('payment_intent');
    if (paymentIntentId) {
      // You can fetch payment details here if needed
      setPaymentIntent({ id: paymentIntentId });
      
      // Clear cart after successful payment
      localStorage.removeItem('cart');
      localStorage.removeItem('appliedDiscount');
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <div className="text-green-500 text-6xl mb-4">✓</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-4">
          Thank you for your purchase. Your order has been confirmed.
        </p>
        {paymentIntent && (
          <p className="text-sm text-gray-500">
            Payment ID: {paymentIntent.id}
          </p>
        )}
        <button
          onClick={() => window.location.href = '/'}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}