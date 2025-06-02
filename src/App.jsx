import Header from "./components/Header";
import Main from "./components/Main";
import React from "react";

export default function App() {

  const [response,setResponse] = React.useState("Yes!");

  function handleClick() {
    setResponse("Definitely!");
  }

  return (
    <>
      <Header />
      <Main />
      <div className="container m-5">
        <button onClick={handleClick} className="btn btn-outline-primary">{response}</button>
      </div>
    </>
  );
}
