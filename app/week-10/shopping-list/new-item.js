"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36),
      name,
      quantity,
      category,
    };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="bg-pink-200 p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-6">
      <h1 className="text-center text-xl font-bold text-purple-800">
        Add New Item
      </h1>

      {/* Quantity Control */}
      <div className="flex justify-center items-center mt-4 space-x-3">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`py-2 px-3 rounded-md font-bold text-white ${
            quantity === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-500"
          }`}
        >
          -
        </button>
        <span className="text-lg font-semibold">{quantity}</span>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`py-2 px-3 rounded-md font-bold text-white ${
            quantity === 20
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-500"
          }`}
        >
          +
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-4">
        {/* Name Input */}
        <div className="mb-4">
          <label
            className="block text-purple-900 font-semibold mb-1"
            htmlFor="name"
          >
            Item Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Category Dropdown */}
        <div className="mb-4">
          <label
            className="block text-purple-900 font-semibold mb-1"
            htmlFor="category"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen-foods">Frozen Foods</option>
            <option value="canned-goods">Canned Goods</option>
            <option value="dry-goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-400 text-white font-bold py-1 px-3 rounded-md shadow-md"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
