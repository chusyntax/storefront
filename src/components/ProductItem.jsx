import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Card, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success(
      <div>
        <img
          src={product.image}
          alt={product.title}
          style={{ height: "50px", width: "50px", marginRight: "10px" }}
        />
        {product.title} has been added to cart
      </div>
    );
  };

  return (
    <Card style={{ width: "18rem", marginBottom: "30px" }}>
      <div
        className="d-flex justify-content-center"
        style={{ height: "150px", width: "150px", margin: "auto" }}
      >
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
