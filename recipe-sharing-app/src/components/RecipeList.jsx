import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore.js';

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
    <div style={{ display: 'grid', gap: '15px' }}>
      {recipesToDisplay.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipesToDisplay.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              background: '#fafafa',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
            }}
          >
            {/* Make recipe title clickable using Link */}
            <h3 style={{ margin: '0 0 10px 0' }}>
              <Link
                to={`/recipes/${recipe.id}`}
                style={{ textDecoration: 'none', color: '#333' }}
              >
                {recipe.title}
              </Link>
            </h3>
            <p style={{ margin: 0 }}>{recipe.description}</p>
            {recipe.prepTime && <p>Prep Time: {recipe.prepTime} mins</p>}
            {recipe.ingredients && (
              <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
