import React from "react";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";
export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  let ingredientsAdded = ingredients.length > 0 ? true : false;

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  const [recipeShown, setRecipeShown] = React.useState(false);

  return (
    <main className="container">
      <form
        action={addIngredient}
        className="m-4 mb-4 d-flex justify-content-center"
      >
        <input
          type="text"
          className="form-control p-2 me-2"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button className="btn btn-dark">+ Add Ingredients</button>
      </form>
      {ingredientsAdded && <IngredientsList ingredients ={ingredients} showRecipe={setRecipeShown} />}
      {recipeShown && <Recipe />}
    </main>
  );
}
