import React from "react";

export default function Confirm({order}) {
    if (!order) {
        return <h3>Loading order details...</h3>
      }
return <div><h1>Your order is on the way</h1>
{order.name}
  </div>
}