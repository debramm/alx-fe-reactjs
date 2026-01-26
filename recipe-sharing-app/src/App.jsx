

import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import './App.css'

function App() {
  
  return (
    <>
    <h1>Recipe App</h1>
      <AddRecipeForm />
      <RecipeList />
      <DeleteRecipeButton/>
      <RecipeDetails/>
      <EditRecipeForm/>
    
      
    </>
  )
}

export default App
