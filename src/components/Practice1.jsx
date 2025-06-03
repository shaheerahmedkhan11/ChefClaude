import React from "react";

export default function Practice1() {
    function signUp(formData){
        
        const email = formData.get("email");
        const password = formData.get("password");
        console.log("Email:", email);
        console.log("Password:", password);
    }
  return (
    <section className="bg-info text-center p-5 rounded-5">
      <h1>Signup Form</h1>
      <form action={signUp}>
        <label htmlFor="email"></label>
        <input id="email" className="form-control-lg m-3 px-5 rounded-5" type="email" name="email" placeholder="abc@gmail.com" />
        <br />
        <label htmlFor="password"></label>
        <input id="password" className="form-control-lg m-3 px-5 rounded-5" type="password" name="password" placeholder="********" />
        <br />
        <button className="btn btn-outline-danger rounded-5 m-3 p-1">Submit</button>
      </form>
    </section>
  );
}
