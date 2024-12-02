import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import { ListGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    const item = cart.find((product) => product.id === id);
    dispatch(removeFromCart({ id }));
    toast.error(
      <div>
        <img
          src={item.image}
          alt={item.title}
          style={{ height: "50px", width: "50px", marginRight: "10px" }}
        />
        {item.title} has been removed from cart
      </div>
    );
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(quantity) }));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <h1 className="text-center" style={{ marginTop: "20%" }}>
        No items in cart. Go to the{" "}
        <Link to="/" style={{ textDecoration: "underline" }}>
          Products
        </Link>{" "}
        page and add a few items to cart.
      </h1>
    );
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ListGroup>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={handleRemove}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </ListGroup>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
