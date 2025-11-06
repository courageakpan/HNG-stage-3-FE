"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import OrderSuccessModal from "@/components/OrderSuccessModal";

// 🧱 Reusable Input Component (Audiophile Spec)
function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  error,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  error?: string;
  placeholder?: string;
}) {
  const hasError = Boolean(error);
  return (
    <div className="flex flex-col space-y-1 relative w-full">
      <div className="flex justify-between items-center">
        <label htmlFor={name} className="text-xs font-semibold text-black tracking-tight">
          {label}
        </label>
        {hasError && <span className="text-xs text-red-500 font-medium">{error}</span>}
      </div>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`border rounded-md px-4 py-3 text-sm font-medium outline-none transition-all duration-200
          ${hasError ? "border-red-500 focus:border-red-500" : "border-gray-300 hover:border-[#D87D4A] focus:border-[#D87D4A]"}`}
      />
    </div>
  );
}

// 🎯 Radio Option (Audiophile Spec)
function RadioOption({
  name,
  value,
  checked,
  label,
  onChange,
}: {
  name: string;
  value: string;
  checked: boolean;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label
      className={`flex items-center border rounded-md px-4 py-3 cursor-pointer transition-all duration-200 ${
        checked ? "border-[#D87D4A] bg-[#FFF8F5]" : "border-gray-300 hover:border-[#D87D4A]"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mr-4 accent-[#D87D4A] w-4 h-4"
      />
      <span className="font-semibold text-sm">{label}</span>
    </label>
  );
}

export default function CheckoutPage() {
  const { items: cart, clearCart } = useCartStore(); // ✅ get cart from Zustand (items renamed to cart)
  const router = useRouter();
  const createOrder = useMutation(api.orders.createOrderWithConfirmation);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderGrandTotal, setOrderGrandTotal] = useState(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    payment: "eMoney",
    eMoneyNumber: "",
    eMoneyPIN: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Compute totals from cartStore
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 50;
  const vat = Math.round(subtotal * 0.2);
  const grandTotal = subtotal + shipping + vat;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    
    // Phone validation
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\+\(\)]+$/.test(form.phone)) {
      newErrors.phone = "Invalid phone number format";
    } else if (form.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }
    
    // Address validation
    if (!form.address.trim()) {
      newErrors.address = "Address is required";
    } else if (form.address.trim().length < 5) {
      newErrors.address = "Please enter a complete address";
    }
    
    // ZIP validation
    if (!form.zip.trim()) {
      newErrors.zip = "ZIP code is required";
    } else if (!/^[a-zA-Z0-9\s\-]+$/.test(form.zip)) {
      newErrors.zip = "Invalid ZIP code format";
    }
    
    // City validation
    if (!form.city.trim()) {
      newErrors.city = "City is required";
    } else if (form.city.trim().length < 2) {
      newErrors.city = "Please enter a valid city name";
    }
    
    // Country validation
    if (!form.country.trim()) {
      newErrors.country = "Country is required";
    } else if (form.country.trim().length < 2) {
      newErrors.country = "Please enter a valid country name";
    }
    
    // Payment method validation
    if (form.payment === "eMoney") {
      if (!form.eMoneyNumber.trim()) {
        newErrors.eMoneyNumber = "e-Money number is required";
      } else if (!/^[0-9]+$/.test(form.eMoneyNumber)) {
        newErrors.eMoneyNumber = "e-Money number must contain only digits";
      }
      
      if (!form.eMoneyPIN.trim()) {
        newErrors.eMoneyPIN = "e-Money PIN is required";
      } else if (!/^[0-9]{4}$/.test(form.eMoneyPIN)) {
        newErrors.eMoneyPIN = "e-Money PIN must be exactly 4 digits";
      }
    }
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items before checkout.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const orderData = {
        customerName: form.name.trim(),
        customerEmail: form.email.trim().toLowerCase(),
        customerPhone: form.phone.trim(),
        shippingAddress: form.address.trim(),
        shippingCity: form.city.trim(),
        shippingZip: form.zip.trim(),
        shippingCountry: form.country.trim(),
        paymentMethod: form.payment,
        eMoneyNumber: form.payment === "eMoney" ? form.eMoneyNumber.trim() : undefined,
        eMoneyPIN: form.payment === "eMoney" ? form.eMoneyPIN.trim() : undefined,
        items: cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),
        subtotal,
        shipping,
        vat,
        grandTotal,
      };
      
      const result = await createOrder(orderData);
      
      // Store grand total for success modal
      setOrderGrandTotal(grandTotal);
      
      // Clear cart after successful order
      clearCart();
      
      // Show success modal instead of redirecting
      setShowSuccessModal(true);
      
    } catch (error) {
      console.error("Error creating order:", error);
      alert("There was an error processing your order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    router.push('/');
  };

  return (
    <>
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <Link href="/" className="text-sm text-black/60 hover:text-black transition">
          Go Back
        </Link>

        <form
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-[2fr_1fr] gap-12 mt-8 items-start"
        >
          {/* LEFT SIDE FORM */}
          <section className="bg-white rounded-lg p-8 space-y-10 shadow-sm">
            <h1 className="text-2xl font-bold uppercase tracking-wide mb-4">Checkout</h1>

            {/* Billing Details */}
            <div className="space-y-6">
              <h2 className="text-[#D87D4A] font-bold uppercase text-sm tracking-widest">
                Billing Details
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <InputField label="Name" name="name" value={form.name} onChange={handleChange} error={errors.name} placeholder="Insert your name" />
                <InputField label="Email Address" name="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="alexei@mail.com" />
                <InputField label="Phone Number" name="phone" value={form.phone} onChange={handleChange} error={errors.phone} placeholder="+1 202-555-0136" />
              </div>
            </div>

            {/* Shipping Info */}
            <div className="space-y-6">
              <h2 className="text-[#D87D4A] font-bold uppercase text-sm tracking-widest">
                Shipping Info
              </h2>
              <InputField label="Address" name="address" value={form.address} onChange={handleChange} error={errors.address} placeholder="1137 Williams Avenue" />
              <div className="grid md:grid-cols-3 gap-6">
                <InputField label="ZIP Code" name="zip" value={form.zip} onChange={handleChange} error={errors.zip} placeholder="10001" />
                <InputField label="City" name="city" value={form.city} onChange={handleChange} error={errors.city} placeholder="New York" />
                <InputField label="Country" name="country" value={form.country} onChange={handleChange} error={errors.country} placeholder="United States" />
              </div>
            </div>

            {/* Payment Details */}
            <div className="space-y-6">
              <h2 className="text-[#D87D4A] font-bold uppercase text-sm tracking-widest">
                Payment Details
              </h2>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <p className="text-xs font-semibold tracking-tight text-black mt-2">Payment Method</p>
                <div className="space-y-3">
                  <RadioOption name="payment" value="eMoney" checked={form.payment === "eMoney"} label="e-Money" onChange={handleChange} />
                  <RadioOption name="payment" value="cash" checked={form.payment === "cash"} label="Cash on Delivery" onChange={handleChange} />
                </div>
              </div>

              {form.payment === "eMoney" && (
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField label="e-Money Number" name="eMoneyNumber" value={form.eMoneyNumber} onChange={handleChange} error={errors.eMoneyNumber} placeholder="238521993" />
                  <InputField label="e-Money PIN" name="eMoneyPIN" value={form.eMoneyPIN} onChange={handleChange} error={errors.eMoneyPIN} placeholder="6891" />
                </div>
              )}
            </div>
          </section>

          {/* RIGHT SIDE SUMMARY */}
          <aside className="bg-white rounded-lg p-8 space-y-6 shadow-sm h-fit">
            <h2 className="text-lg font-bold uppercase tracking-wide">Summary</h2>

            {cart.length === 0 ? (
              <p className="text-black/60 text-sm">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-md bg-[#F1F1F1]">
                        <Image
                          src={item.image || "/placeholder.png"}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p className="text-black/60 text-sm">${item.price}</p>
                      </div>
                    </div>
                    <p className="text-black/60 font-bold text-sm">x{item.quantity}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-black/60">
                <span>Total</span>
                <span className="text-black font-bold">${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-black/60">
                <span>Shipping</span>
                <span className="text-black font-bold">${shipping}</span>
              </div>
              <div className="flex justify-between text-black/60">
                <span>VAT (included)</span>
                <span className="text-black font-bold">${vat.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex justify-between text-lg font-bold mt-4">
              <span>Grand Total</span>
              <span className="text-[#D87D4A]">${grandTotal.toLocaleString()}</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || cart.length === 0}
              className="w-full bg-[#D87D4A] text-white uppercase text-sm font-semibold tracking-wide py-3 hover:bg-[#FBAF85] transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Processing..." : "Continue & Pay"}
            </button>
          </aside>
        </form>
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <OrderSuccessModal
          grandTotal={orderGrandTotal}
          onClose={handleCloseSuccessModal}
        />
      )}
    </>
  );
}
