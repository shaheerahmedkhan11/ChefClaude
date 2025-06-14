import React from "react";

export default function Practice1() {
  function signUp(formData) {
    const data = Object.fromEntries(formData);
    const dietaryData = formData.getAll("dietaryRestrictions");
    const allData = {
      ...data,
      dietaryData,
    };
    console.log(allData);
  }
  return (
    <section className="bg-info text-center p-5 rounded-5">
      <h1>Signup Form</h1>
      <form action={signUp}>
        <label htmlFor="email"></label>
        <input
          id="email"
          className="form-control-lg m-3 px-5 rounded-5"
          type="email"
          name="email"
          placeholder="abc@gmail.com"
        />
        <br />
        <label htmlFor="password"></label>
        <input
          id="password"
          className="form-control-lg m-3 px-5 rounded-5"
          type="password"
          name="password"
          placeholder="********"
        />
        <br />

        <br />
        <label htmlFor="description"></label>
        <textarea
          name="description"
          id="description"
          defaultValue="This is a description"
        ></textarea>
        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>
          <br />
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="employmentStatus"
              value="full-time"
              defaultChecked={true}
            />
            Full-time
          </label>
        </fieldset>
        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="Halal" />
            Halal
          </label>
          <br />
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="Vegan" />
            Vegan
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              value="Gluten-free"
              defaultChecked={true}
            />
            Gluten-free
          </label>
        </fieldset>
        <label htmlFor="favColor">What is your favourite color?</label>
        <br />
        <select name="favColor" id="favColor" defaultValue="blue" required>
          <option value="" disabled>
            -- Choose a color --
          </option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        <br />
        <button className="btn btn-outline-danger rounded-5 m-3 p-1">
          Submit
        </button>
      </form>
    </section>
  );
}
