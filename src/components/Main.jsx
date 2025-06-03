import React from "react";
export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const ingredientList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredient(formData) {
    
    const newingredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newingredient]);
  }

  return (
    <main className="container">
      <form
        action={addIngredient}
        className="m-5 d-flex justify-content-center"
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
      <ul className="ms-5">{ingredientList}</ul>
    </main>
  );
}
