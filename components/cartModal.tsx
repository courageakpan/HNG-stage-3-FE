"use client";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";

export default function CartModal() {
  const {
    items,
    isOpen,
    closeCart,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
  } = useCartStore();

  if (!isOpen) return null;

  const total = items.reduce((acc, i) => acc + i.price * i.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black/50 z-40 flex justify-center items-start md:items-start md:justify-end">
      {/* Overlay background for mobile */}
      <div
        className="absolute inset-0"
        onClick={closeCart}
      />

      {/* Cart Modal */}
      <div
        className="
          relative bg-white w-[90%] max-w-md md:w-[377px]
          rounded-lg p-6 mt-28 mx-auto md:mx-6
          z-50
        "
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wide">
            Cart ({items.length})
          </h2>
          <button
            onClick={() => clearCart()}
            className="text-black/60 hover:text-black text-sm"
          >
            Remove all
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <p className="text-black/60 text-center py-8">Your cart is empty.</p>
        ) : (
          <div className="space-y-4 max-h-64 overflow-auto pr-2">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="relative w-16 h-16 bg-[#F1F1F1] rounded-lg flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">{item.name}</p>
                  <p className="text-black/60 text-sm">$ {item.price}</p>
                </div>
                <div className="bg-[#F1F1F1] flex items-center px-2 gap-3 rounded-md">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="text-black/60 hover:text-black font-bold"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm">{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="text-black/60 hover:text-black font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Total */}
        <div className="flex justify-between mt-6 mb-4">
          <p className="uppercase text-black/60 text-sm tracking-wide">
            Total
          </p>
          <p className="font-bold text-lg">$ {total.toLocaleString()}</p>
        </div>

        {/* Checkout Button */}
        {items.length > 0 && (
          <Link
            href="/checkout"
            onClick={closeCart}
            className="block bg-[#D87D4A] text-white text-center py-3 rounded-md uppercase text-sm font-semibold tracking-wide hover:bg-[#FBAF85] transition"
          >
            Checkout
          </Link>
        )}
      </div>
    </div>
  );
}
