import React from "react";
import { ListGroup, Button, Form } from "react-bootstrap";

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <ListGroup.Item>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5>{item.title}</h5>
          <p>${item.price}</p>
        </div>
        <div>
          <Form.Control
            type="number"
            value={item.quantity}
            onChange={(e) => onQuantityChange(item.id, e.target.value)}
            style={{
              width: "60px",
              display: "inline-block",
              marginRight: "10px",
            }}
          />
          <Button variant="danger" onClick={() => onRemove(item.id)}>
            Remove
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default CartItem;
