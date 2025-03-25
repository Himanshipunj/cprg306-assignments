"use client";

import { useState, useEffect } from "react";

// Function to fetch meal ideas based on ingredient
async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || []; // Returns an array of meals or an empty array if no meals are found
}

// Function to fetch full meal details (including ingredients & quantities)
async function fetchMealDetails(mealId) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
  const data = await response.json();
  return data.meals ? data.meals[0] : null; // Return meal details or null if not found
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    const loadMealIdeas = async () => {
      if (!ingredient) return;
      const mealData = await fetchMealIdeas(ingredient);
      setMeals(mealData);
      setSelectedMeal(null); // Reset when ingredient changes
    };

    loadMealIdeas();
  }, [ingredient]);

  // Handle clicking a meal to show ingredients
  const handleMealClick = async (mealId) => {
    if (selectedMeal && selectedMeal.idMeal === mealId) {
      setSelectedMeal(null); // Collapse if already selected
    } else {
      const mealDetails = await fetchMealDetails(mealId);
      setSelectedMeal(mealDetails);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#fde4f2", // Light pink background
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#b80066" }}>Meal Ideas</h2>
      {!ingredient ? (
        <p>Select an item to see meal ideas</p>
      ) : meals.length > 0 ? (
        <>
          <p>
            Here are some meal ideas using <strong>{ingredient}</strong>:
          </p>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {meals.map((meal) => (
              <li key={meal.idMeal} style={{ marginBottom: "10px" }}>
                <button
                  onClick={() => handleMealClick(meal.idMeal)}
                  style={{
                    backgroundColor: "#fff",
                    color: "#b80066",
                    padding: "12px",
                    width: "100%",
                    textAlign: "left",
                    border: "2px solid #b80066",
                    fontSize: "16px",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                  }}
                >
                  {meal.strMeal}
                </button>
                {selectedMeal && selectedMeal.idMeal === meal.idMeal && (
                  <div
                    style={{
                      padding: "15px",
                      background: "linear-gradient(135deg, #ff99cc, #ff66b2)",
                      color: "#fff",
                      borderRadius: "8px",
                      marginTop: "5px",
                      textAlign: "left",
                    }}
                  >
                    <h4>Ingredients needed:</h4>
                    <ul style={{ paddingLeft: "20px" }}>
                      {Object.entries(selectedMeal)
                        .filter(
                          ([key, value]) =>
                            key.startsWith("strIngredient") && value
                        )
                        .map(([key, value], index) => {
                          const measureKey = `strMeasure${key.replace(
                            "strIngredient",
                            ""
                          )}`;
                          return (
                            <li key={index} style={{ marginBottom: "5px" }}>
                              {value} ({selectedMeal[measureKey]})
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>
          No meal ideas found for <strong>{ingredient}</strong>
        </p>
      )}
    </div>
  );
}
