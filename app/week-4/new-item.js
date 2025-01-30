"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);

  return (
    <div className="flex flex-col items-center p-4 bg-pink-100 rounded-lg shadow-lg w-64 mx-auto">
      <p className="text-2xl font-bold text-gray-800">{quantity}</p>
      <div className="flex gap-4 mt-4">
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400"
        >
          +
        </button>
        <button
          onClick={decrement}
          disabled={quantity <= 1}
          className="px-4 py-2 bg-red-500 text-white rounded-lg disabled:bg-gray-400"
        >
          -
        </button>
      </div>
    </div>
  );
}
