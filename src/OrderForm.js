import React from "react";

export default function Form(props) {
  const { values, submit, disabled, change, errors } = props; //add change later

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target; //pull those values from evt.target
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse); //inputChange using the inputted name & value
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit(); //executes the formSubmit func passed in through props
  };

  return (
    <div className="form-container" onSubmit={onSubmit}>
      <h1>Build your pizza</h1>

      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.tos}</div>
      </div>
      <label>
        <div className="option">
          <p>What is your name?</p> <p>required</p>
        </div>
        <input type="text" value={values.name} id="name" name="name" />
      </label>

      <label>
        <div className="option">
          <p>Choose a size:</p> <p>required</p>
        </div>
        <select
          onChange={onChange}
          value={values.size}
          id="size-dropdown"
          name="size"
        >
          <option value="">-Select a size-</option>
          <option value="small">Small 12"</option>
          <option value="medium">Medium 14"</option>
          <option value="large">Large 16"</option>
        </select>
      </label>
      <div className="option">
        <p>Select your toppings:</p>
      </div>
      <label>
        Onions
        <input type="checkbox" name="onions" onChange={onChange} checked={values.onions} />
      </label>
      <label>
        Tomatoes
        <input type="checkbox" name="tomatoes" onChange={onChange} checked={values.tomatoes}
        />
      </label>

      <label>
        Mushrooms
        <input type="checkbox" name="mushrooms" onChange={onChange} checked={values.mushrooms}
        />
      </label>

      <label>
        <div className="option">
          <p>Special Instructions:</p>
        </div>
        <input type="text" value={values.special} id="special-text" name="special" />
      </label>

      <button disabled={disabled}>Submit</button>
    </div>
  );
}
