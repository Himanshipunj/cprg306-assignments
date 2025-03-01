"use client";
import Item from "./item.js";
import itemsData from "./items.json"; // Import the JSON data
import { useState } from "react";

export default function ItemList() {
  // State to manage the sorting preference
  const [sortBy, setSortBy] = useState("name");

  // Sort the items based on the sortBy state
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name); // Sort by name
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category); // Sort by category
    }
    return 0; // Default: no sorting
  });

  // Group items by category and sort them
  const groupedItems = itemsData.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  // Sort categories alphabetically
  const sortedCategories = Object.keys(groupedItems).sort();

  // Sort items within each category alphabetically
  sortedCategories.forEach((category) => {
    groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
  });

  return (
    <main className="m-4 bg-white p-6 rounded-lg shadow-lg">
      {/* Sort Buttons */}
      <div className="mb-6">
        <span className="mr-2 font-bold text-purple-700">Sort by:</span>
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 mr-2 rounded transition-colors duration-300 ${
            sortBy === "name"
              ? "bg-purple-500 text-white"
              : "bg-pink-200 text-purple-900"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 mr-2 rounded transition-colors duration-300 ${
            sortBy === "category"
              ? "bg-purple-500 text-white"
              : "bg-pink-200 text-purple-900"
          }`}
        >
          Category
        </button>
        <button
          onClick={() => setSortBy("groupedCategory")}
          className={`px-4 py-2 rounded transition-colors duration-300 ${
            sortBy === "groupedCategory"
              ? "bg-purple-500 text-white"
              : "bg-pink-200 text-purple-900"
          }`}
        >
          Group by Category
        </button>
      </div>

      {/* Display Sorted Items */}
      {sortBy !== "groupedCategory" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedItems.map((item) => (
            <Item
              key={item.id} // Use the unique ID as the key
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </div>
      ) : (
        // Display Grouped Items
        <div>
          {sortedCategories.map((category) => (
            <div key={category} className="mb-6">
              <h3 className="text-xl font-bold capitalize mb-2 text-purple-700 border-b-2 border-pink-300 pb-1">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {groupedItems[category].map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
