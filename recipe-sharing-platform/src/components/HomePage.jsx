import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        🍽️ Recipe Sharing Platform
      </h1>
<div className="flex justify-end mb-6">
  <Link
    to="/add-recipe"
    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
  >
    + Add New Recipe
  </Link>
</div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div
              className="bg-white rounded-xl shadow-md overflow-hidden
                         hover:shadow-xl hover:scale-105
                         transition duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-600 text-sm">{recipe.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
