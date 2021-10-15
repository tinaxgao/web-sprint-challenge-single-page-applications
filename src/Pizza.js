import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid";
import * as yup from "yup";
import schema from "./validation/formSchema";
import Form from "./OrderForm";

// INITIAL STATES
const initialFormValues = {
  name: "",
  size: "",
  onions: false,
  tomatoes: false,
  mushrooms: false,
  arugula: false,
//   glutenfree: false,
  special: "",
};
const initialFormErrors = {
  name: "",
  size: "",
  onions: false,
  tomatoes: false,
  mushrooms: false,
  arugula: false,
//   glutenfree: false,
  special: "",
};
const initialOrder = [];
const initialDisabled = true;

export default function Pizza() {
  // STATES
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [order, setOrder] = useState(initialOrder);
  const [disabled, setDisabled] = useState(initialDisabled);

  // HELPERS - GET & POST DATA
  // get user data from api https://reqres.in/api/orders
  const getOrders = () => {
    axios
      .get("https://reqres.in/api/orders")
      .then((res) => {
        console.log(res);
        setOrder(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }; //use in side effect

  const postNewUser = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        console.log(res);
        setOrder([res.data, ...order]);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  // EVENT HANDLERS
  // >> declare validation using yup
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" })) //remove error msg if valid
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] })); //if err, displays them
  };

  // >> input change, run validation, display what's typed in
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // >> submit form
  const formSubmit = () => {
    const newOrder = {
      id: uuid(),
      name: formValues.name.trim(),
      size: formValues.size,

      toppings: ["onions", "tomatoes", "mushrooms", "arugula"].filter(
        (topping) => !!formValues[topping]),

    //   onions: formValues.onions,
    //   tomatoes: formValues.tomatoes,
    //   mushrooms: formValues.mushrooms,
    //   arugula: formValues.arugula,
    //   glutenfree: formValues.gf,
      special: formValues.special.trim(),
    };
    postNewUser(newOrder);
  };

  // SIDE EFFECTS
  useEffect(() => {
    getOrders();
  }, []); // executes axios get users once

  // enables submit button if form is valid
  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="form-container">
      <section className="hero">
        <h1>Order Pizza</h1>
      </section>

      <Form
        values={formValues}
        submit={formSubmit}
        disabled={disabled}
        change={inputChange}
        errors={formErrors}
        id="pizza-form"
      />

      {order
        .filter((u) => u.id.length > 6)
        .map((u) => {
          const { id, name, size, special, toppings } = u;
          return (
              
            <div key={id}>
                <h1>Your order in on the way</h1>
              <div>confirmation number: {id}
              <h3> {name}</h3> 
              <p>Size: {size}</p>
              <p>Special Instructions: {special} </p></div>
              <div>Toppings: { toppings.map(t => {return <p>{t}</p>}) }</div>
            </div>
          );
        })}
    </div>
  );
}
