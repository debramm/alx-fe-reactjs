
import { Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import DeleteRecipeButton from "./components/DeleteRecipeButton";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import "./App.css";

function App() {
  return (
    <>
      <h1>Recipe App</h1>

      {/* always visible UI */}
      <AddRecipeForm />
      <FavoritesList />
      <RecommendationsList />

      <Routes>
        <Route path="/" element={<RecipeList />} />
        

        {/* Details Page */}
        <Route path="/recipes/:id" element={<RecipeDetails />} />

        {/* Edit Page */}
        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
      </Routes>
    </>
  );
}

export default App;
