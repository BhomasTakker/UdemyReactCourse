import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  let items = cartItems.map((it) => {
    return (
      <CartItem
        key={it.id}
        item={{
          id: it.id,
          title: it.title,
          quantity: it.quantity,
          total: it.totalPrice,
          price: it.price,
        }}
      />
    );
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{items}</ul>
    </Card>
  );
};

export default Cart;
