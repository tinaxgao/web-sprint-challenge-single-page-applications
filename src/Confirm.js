import React, {useState} from "react";

// get order by the UUID of the just-submitted order


export default function Confirm() {
    const [newOrder, setNewOrder] = useState([]);

       // get user data from api https://reqres.in/api/orders
  const getOrders = () => {
    axios
      .get("https://reqres.in/api/orders")
      .then((res) => {
        console.log(res);
        setNewOrder(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };



return <div><h1>Your order is on the way</h1>
{order.name}
  </div>
}