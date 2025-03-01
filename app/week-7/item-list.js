import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  } else if (sortBy === "groupedCategory") {
    const grouped = sortedItems.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});

    sortedItems = Object.keys(grouped)
      .sort()
      .map((category) => ({ category, items: grouped[category] }));
  }

  return (
    <main className="p-6 bg-pink-300 min-h-screen">
      <h1 className="text-2xl font-bold text-center text-purple-900 mb-6">
        Shopping List
      </h1>

      {/* Sorting Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setSortBy("name")}
          className={`py-2 px-4 font-bold rounded-lg transition-all ${
            sortBy === "name"
              ? "bg-purple-700 text-white"
              : "bg-gray-300 text-black hover:bg-purple-400"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`py-2 px-4 font-bold rounded-lg transition-all ${
            sortBy === "category"
              ? "bg-purple-700 text-white"
              : "bg-gray-300 text-black hover:bg-purple-400"
          }`}
        >
          Category
        </button>
        <button
          onClick={() => setSortBy("groupedCategory")}
          className={`py-2 px-4 font-bold rounded-lg transition-all ${
            sortBy === "groupedCategory"
              ? "bg-purple-700 text-white"
              : "bg-gray-300 text-black hover:bg-purple-400"
          }`}
        >
          Group by Category
        </button>
      </div>

      {/* Items Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sortBy === "groupedCategory"
          ? sortedItems.map((group) => (
              <div key={group.category} className="col-span-3">
                <h2 className="text-lg font-semibold text-purple-900 border-b-2 border-purple-500 mb-2">
                  {group.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {group.items.map((item, index) => (
                    <Item key={index} {...item} />
                  ))}
                </div>
              </div>
            ))
          : sortedItems.map((item, index) => <Item key={index} {...item} />)}
      </div>
    </main>
  );
}
