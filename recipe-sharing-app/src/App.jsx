
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import './App.css'

function App() {
  
  return (

    <Router> 
    <h1>Recipe App</h1>
      <AddRecipeForm />
      <RecipeList />
      <DeleteRecipeButton/>
      <RecipeDetails/>
      <EditRecipeForm/>
    <FavoritesList />
    <RecommendationsList />
       <Routes>
        {/* Home page: add recipes + list */}
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />

        {/* Recipe details page: view, edit, delete */}
        <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
      </Routes>
    </Router>
  )
}

export default App
