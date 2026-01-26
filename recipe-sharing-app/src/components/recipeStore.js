import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
 deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

     updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  setRecipes: (recipes) =>
    set(() => ({
      recipes,
    })),


searchTerm: '',
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // automatically update filteredRecipes when searchTerm changes
  },

  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.ingredients?.some((ing) =>
            ing.toLowerCase().includes(state.searchTerm.toLowerCase())
          ) ||
          (recipe.prepTime &&
            recipe.prepTime.toString().includes(state.searchTerm))
      ),
    })),
    favorites: [],

  addFavorite: (recipeId) => {
    set((state) => {
      if (!state.favorites.includes(recipeId)) {
        return { favorites: [...state.favorites, recipeId] };
      }
      return {};
    });
  },

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  toggleFavorite: (recipeId) => {
    const favorites = get().favorites;
    if (favorites.includes(recipeId)) {
      get().removeFavorite(recipeId);
    } else {
      get().addFavorite(recipeId);
    }
  },

  // --- Recommendations ---
  recommendations: [],

  generateRecommendations: () => {
    const state = get();
    //  recommendation logic: recipes not in favorites but similar to favorite titles
    const recommended = state.recipes.filter(
      (recipe) =>
        !state.favorites.includes(recipe.id) &&
        state.favorites.some((favId) => {
          const favRecipe = state.recipes.find((r) => r.id === favId);
          return favRecipe && recipe.title.includes(favRecipe.title.split(' ')[0]); // basic match on first word
        })
    );
    set({ recommendations: recommended });
  },
}));

export default useRecipeStore;
