import { useCallback } from 'react';

declare global {
  interface Window {
    Razorpay: RazorpayConstructor;
  }
}

interface RazorpayConstructor {
  new (options: RazorpayOptions): RazorpayInstance;
}

interface RazorpayInstance {
  open(): void;
  on(event: string, callback: (response: unknown) => void): void;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    product_id: string;
    product_name: string;
  };
  theme: {
    color: string;
  };
  modal: {
    ondismiss: () => void;
  };
}

interface PaymentData {
  amount: number;
  productName: string;
  productId: string;
  customerEmail?: string;
  customerPhone?: string;
  customerName?: string;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export const useRazorpay = () => {
  const initiatePayment = useCallback(async (paymentData: PaymentData) => {
    if (!window.Razorpay) {
      alert('Razorpay SDK failed to load. Please check your internet connection.');
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: paymentData.amount * 100, // Convert to paise (multiply by 100)
      currency: 'INR',
      name: 'AgroVision',
      description: `Payment for ${paymentData.productName}`,
      image: '/favicon.ico',
      handler: function (response: RazorpayResponse) {
        // Payment successful
        alert(`Order placed successfully! Payment ID: ${response.razorpay_payment_id}`);
        
        // You can add more success handling here like:
        // - API call to save order details
        // - Redirect to success page
        // - Update local state
        console.log('Payment successful:', response);
      },
      prefill: {
        name: paymentData.customerName || 'Customer',
        email: paymentData.customerEmail || 'customer@example.com',
        contact: paymentData.customerPhone || '9999999999'
      },
      notes: {
        product_id: paymentData.productId,
        product_name: paymentData.productName
      },
      theme: {
        color: '#22c55e' // Green color matching AgroVision theme
      },
      modal: {
        ondismiss: function() {
          console.log('Payment modal closed');
        }
      }
    };

    const rzp = new window.Razorpay(options);
    
    rzp.on('payment.failed', function (response: { error: { description: string } }) {
      alert(`Payment failed: ${response.error.description}`);
      console.error('Payment failed:', response.error);
    });

    rzp.open();
  }, []);

  return { initiatePayment };
};