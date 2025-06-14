import React from "react";
export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  let ingredientsAdded = ingredients.length > 0 ? true : false;
  const ingredientsList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

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
      {ingredientsAdded && (
        <section>
          <h2 className="ms-4 fw-bold">Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsList}
          </ul>
          {ingredients.length > 4 && (
            <div
              className="container m-5 p-4 rounded-3 d-flex justify-content-between"
              style={{ background: "#faedcd" }}
            >
              <div>
                <h3 className="fw-bold fs-4">Ready for a recipe?</h3>
                <p className="fs-6 pt-4">
                  Generate a recipe from your list of ingredients.
                </p>
              </div>
              <button
                className="btn btn-sm fs-3 fw-bold rounded-3 m-3"
                style={{ background: "#ffaa00", color: "#FAFAF8" }}
                onClick={() => setRecipeShown(true)}
              >
                Get a recipe
              </button>
            </div>
          )}
        </section>
      )}
      {recipeShown && (
        <section>
          <h2>Chef Claude Recommends:</h2>
          <article className="suggested-recipe-container" aria-live="polite">
            <p>
              Based on the ingredients you have available, I would recommend
              making a simple a delicious <strong>Beef Bolognese Pasta</strong>.
              Here is the recipe:
            </p>
            <h3>Beef Bolognese Pasta</h3>
            <strong>Ingredients:</strong>
            <ul>
              <li>1 lb. ground beef</li>
              <li>1 onion, diced</li>
              <li>3 cloves garlic, minced</li>
              <li>2 tablespoons tomato paste</li>
              <li>1 (28 oz) can crushed tomatoes</li>
              <li>1 cup beef broth</li>
              <li>1 teaspoon dried oregano</li>
              <li>1 teaspoon dried basil</li>
              <li>Salt and pepper to taste</li>
              <li>
                8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
              </li>
            </ul>
            <strong>Instructions:</strong>
            <ol>
              <li>
                Bring a large pot of salted water to a boil for the pasta.
              </li>
              <li>
                In a large skillet or Dutch oven, cook the ground beef over
                medium-high heat, breaking it up with a wooden spoon, until
                browned and cooked through, about 5-7 minutes.
              </li>
              <li>
                Add the diced onion and minced garlic to the skillet and cook
                for 2-3 minutes, until the onion is translucent.
              </li>
              <li>Stir in the tomato paste and cook for 1 minute.</li>
              <li>
                Add the crushed tomatoes, beef broth, oregano, and basil. Season
                with salt and pepper to taste.
              </li>
              <li>
                Reduce the heat to low and let the sauce simmer for 15-20
                minutes, stirring occasionally, to allow the flavors to meld.
              </li>
              <li>
                While the sauce is simmering, cook the pasta according to the
                package instructions. Drain the pasta and return it to the pot.
              </li>
              <li>
                Add the Bolognese sauce to the cooked pasta and toss to combine.
              </li>
              <li>
                Serve hot, garnished with additional fresh basil or grated
                Parmesan cheese if desired.
              </li>
            </ol>
          </article>
        </section>
      )}
    </main>
  );
}
