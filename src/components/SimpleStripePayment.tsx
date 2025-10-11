// src/components/SimpleStripePayment.tsx
'use client';

import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

function PaymentForm({ amount, onPaymentSuccessAction }: { amount: number; onPaymentSuccessAction?: () => void }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    try {
      // Create payment intent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });

  await response.json();

      // Confirm payment
      const paymentResult = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment/success`,
        },
      });

      if (paymentResult.error) {
        alert('Payment failed: ' + paymentResult.error.message);
      } else {
        // Payment successful - clear cart immediately
        localStorage.removeItem('cart');
        localStorage.removeItem('appliedDiscount');
        onPaymentSuccessAction?.();
      }
    } catch (error) {
      console.log(error)
      alert('Payment error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || isLoading}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? 'Processing...' : `Pay Rs ${amount.toFixed(2)}`}
      </button>
    </form>
  );
}

export default function SimpleStripePayment({ 
  amount, 
  onPaymentSuccessAction 
}: { 
  amount: number; 
  onPaymentSuccessAction?: () => void;
}) {
  const [clientSecret, setClientSecret] = useState<string>('');

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe' as const,
    },
  };

  if (!clientSecret) {
    return <div>Loading payment form...</div>;
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm amount={amount} onPaymentSuccessAction={onPaymentSuccessAction} />
    </Elements>
  );
}