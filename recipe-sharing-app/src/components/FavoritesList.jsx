import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';

const FavoritesList = () => {
  // Map favorite IDs to actual recipe objects
  const favorites = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((recipe) => recipe.id === id))
      .filter(Boolean) // remove any undefined if recipe is deleted
  );

  // Optional: toggle favorite from this list
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>You have no favorite recipes yet.</p>
      ) : (
        <div style={{ display: 'grid', gap: '15px' }}>
          {favorites.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                background: '#fff3f3',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
              }}
            >
              <h3>
                <Link
                  to={`/recipes/${recipe.id}`}
                  style={{ textDecoration: 'none', color: '#333' }}
                >
                  {recipe.title}
                </Link>
              </h3>
              <p>{recipe.description}</p>
              <button
                onClick={() => toggleFavorite(recipe.id)}
                style={{
                  padding: '5px 10px',
                  borderRadius: '5px',
                  border: 'none',
                  background: '#ff6b6b',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                Remove Favorite
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
