import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  const routeToOrder = () => {
    history.push("/pizza");
  };

  return (
    <div className="home-wrapper">
      
      
      <section className="hero">
        <p>Your favorite food delivered while you code!</p>
        <button onClick={routeToOrder} className="md-button shop-button">
        Shop now!
      </button>
      </section>

      
    </div>
  );
}
