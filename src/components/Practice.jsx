import React from "react";

export default function Practice() {
  const [myFavouriteThings, setMyFavouriteThings] = React.useState([]);
  const allFavouriteThings = ["😀", "🔥", "🚀", "🎉", "❤️"];

  function addFavouriteThings() {
    setMyFavouriteThings((prevThings) => [...prevThings, allFavouriteThings[prevThings.length]]);
  }

  const thingsElements = myFavouriteThings.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  return (
    <article className="container">
      <button
        onClick={addFavouriteThings}
        className="btn btn-outline-success rounded-5"
      >
        Add Items
      </button>
      <section className="m-3 bg-warning text-center fs-3 rounded-5" aria-live="polite">{thingsElements}</section>
    </article>
  );
}
