import React, { useEffect } from 'react';
import useRecipeStore from '../stores/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
 
  useEffect(() => {
    filterRecipes();
  }, [recipes, searchTerm, filterRecipes]);

const recipesToDisplay = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      {recipesToDisplay.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipesToDisplay.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
