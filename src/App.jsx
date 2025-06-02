import Header from "./components/Header";
import Main from "./components/Main";
import React from "react";

export default function App() {
  const [isGoingOut,setIsGoingOut] = React.useState(true);

  function handleClick(){
    setIsGoingOut(prevState => !prevState);
  }

  return (
    <>
      <Header />
      <Main />
      <section className="container m-5">
        <h2>Do I feel like going out tonight?</h2>
        <button onClick={handleClick} className="btn btn-outline-info rounded">{isGoingOut?"Yes":"No"}</button>
      </section>
    </>
  );
}
