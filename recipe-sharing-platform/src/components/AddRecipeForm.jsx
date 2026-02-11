import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim() || ingredients.split("\n").length < 2)
      newErrors.ingredients = "At least two ingredients are required";
    if (!instructions.trim() || instructions.split("\n").length < 2)
      newErrors.instructions = "At least two steps are required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Normally, you'd send data to an API or update state
      console.log("Recipe submitted:", { title, ingredients, instructions });
      alert("Recipe submitted successfully!");

      // Clear form
      setTitle("");
      setIngredients("");
      setInstructions("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-md p-6 w-full max-w-lg"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h1>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Recipe Title</label>
          <input
            type="text"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Ingredients (one per line)</label>
          <textarea
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            rows="5"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Preparation Steps (one per line)</label>
          <textarea
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.instructions ? "border-red-500" : "border-gray-300"
            }`}
            rows="5"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
          {errors.instructions && (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
