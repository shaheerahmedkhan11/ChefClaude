export default function Main() {
  const ingredients = ["oregano", "basil", "parsley", "thyme", "cilantro"];
  const ingredientList = ingredients.map(ingredient =>(<li key={ingredient}>{ingredient}</li>));

function handleSubmit(event){
  event.preventDefault();
  console.log("Form submitted");
  const formData = new FormData(event.currentTarget);
  const ingredient = formData.get("ingredient");
  console.log(ingredient);
  ingredients.push(ingredient);
  console.log(ingredients);
}

  return (
    <main className="container">
      <form onSubmit={handleSubmit} className="m-5 d-flex justify-content-center">
        <input
          type="text"
          className="form-control p-2 me-2"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button className="btn btn-dark">+ Add Ingredients</button>
      </form>
      <ul className="ms-5">
        {ingredientList}
      </ul>
    </main>
  );
}
