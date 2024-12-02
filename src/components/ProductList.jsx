import React, { memo } from "react";
import { useProducts } from "../api/products";
import ProductItem from "./ProductItem";
import { Container, Row, Col } from "react-bootstrap";

const ProductList = memo(({ searchQuery = "" }) => {
  const { data, error, isLoading } = useProducts();

  if (isLoading) return <div>Loading available products...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log("Search Query in ProductList:", searchQuery); // Debugging log

  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredProducts.length === 0) {
    return <div className="text-center">Product Not Found</div>;
  }

  return (
    <Container>
      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
});

export default ProductList;
