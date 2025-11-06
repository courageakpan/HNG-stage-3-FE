"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function OrderSuccessModal({
  grandTotal,
  onClose,
}: {
  grandTotal: number;
  onClose: () => void;
}) {
  const { items, clearCart } = useCartStore();

  const firstItem = items[0];
  const remainingCount = items.length - 1;

  const handleBackHome = () => {
    clearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full space-y-6 text-center shadow-lg">
        <div className="flex items-center justify-center bg-[#D87D4A] w-12 h-12 rounded-full mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="white"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <h2 className="text-2xl font-bold uppercase">Thank you<br />for your order</h2>
        <p className="text-black/60 text-sm">
          You will receive an email confirmation shortly.
        </p>

        {/* Order Summary Card */}
        <div className="bg-[#F1F1F1] rounded-lg overflow-hidden text-left">
          <div className="flex items-center gap-4 px-6 py-4 border-b border-black/10">
            {firstItem && (
              <>
                <div className="relative w-12 h-12 bg-white rounded-md">
                  <Image
                    src={firstItem.image || "/placeholder.png"}
                    alt={firstItem.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{firstItem.name}</p>
                  <p className="text-black/60 text-sm">${firstItem.price}</p>
                </div>
                <p className="text-black/60 font-bold text-sm">
                  x{firstItem.quantity}
                </p>
              </>
            )}
          </div>

          {remainingCount > 0 && (
            <p className="text-center text-black/60 text-xs py-3 border-t border-black/10">
              and {remainingCount} other item{remainingCount > 1 && "s"}
            </p>
          )}
        </div>

        {/* Grand Total Section */}
        <div className="bg-black text-white rounded-lg p-4 flex justify-between items-center">
          <p className="uppercase text-sm text-white/70">Grand Total</p>
          <p className="text-lg font-bold">${grandTotal.toLocaleString()}</p>
        </div>

        <Link
          href="/"
          onClick={handleBackHome}
          className="block w-full bg-[#D87D4A] text-white uppercase text-sm font-semibold tracking-wide py-3 rounded-md hover:bg-[#FBAF85] transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}