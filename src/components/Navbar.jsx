import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";

const NavigationBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
    console.log("Search Query:", e.target.value); // Debugging log
  };

  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Navbar.Brand href="/">Wamly Storefront</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Cart
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
