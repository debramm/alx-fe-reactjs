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
}));

export default useRecipeStore;
