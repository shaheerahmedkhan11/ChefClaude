export default function IngredientsList(props){
      const ingredientsList = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

    return(
        <section>
          <h2 className="ms-4 fw-bold">Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsList}
          </ul>
          {props.ingredients.length > 4 && (
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
                onClick={() => props.showRecipe(true)}
              >
                Get a recipe
              </button>
            </div>
          )}
        </section>
    )
}