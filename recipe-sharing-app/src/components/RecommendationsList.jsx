import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  // Generate recommendations when component mounts
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Add some favorites to see suggestions!</p>
      ) : (
        <div style={{ display: 'grid', gap: '15px' }}>
          {recommendations.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                background: '#f0f9ff',
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationsList;
