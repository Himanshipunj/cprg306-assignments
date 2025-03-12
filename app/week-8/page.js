"use client";
import { useState } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import MealIdeas from "./meal-ideas.js";
import items from "./items.json";

export default function Page() {
  const [shoppingItems, setShoppingItems] = useState(items);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (itemName) => {
    const cleanName = itemName
      .split(",")[0] // Remove quantity part
      .replace(/[\uD800-\uDFFF]./g, "") // Remove emoji
      .trim();

    setSelectedItemName(cleanName);
  };

  const handleAddItem = (newItem) => {
    setShoppingItems([...shoppingItems, newItem]);
  };

  return (
    <div className="flex p-6 space-x-6">
      <div className="w-2/3">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={shoppingItems} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/3">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}
