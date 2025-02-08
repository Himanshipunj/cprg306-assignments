"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = { name, quantity, category };

    console.log(item);

    alert(`Item Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-4 bg-pink-100 rounded-lg shadow-lg w-fit mx-auto"
    >
      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Item Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      {/* Quantity Field */}
      <div className="mb-4 flex items-center">
        <label
          htmlFor="quantity"
          className="block text-gray-700 font-bold mr-2"
        >
          Quantity:
        </label>
        <div className="flex items-center">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity <= 1}
            className="px-3 py-2 bg-gray-300 text-gray-700 rounded-l disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            -
          </button>
          <p className="border border-gray-300 px-4 py-2">{quantity}</p>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="px-3 py-2 bg-gray-300 text-gray-700 rounded-r disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            +
          </button>
        </div>
      </div>

      {/* Category Field */}
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-gray-700 font-bold mb-2"
        >
          Category:
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
      >
        +
      </button>
    </form>
  );
}
