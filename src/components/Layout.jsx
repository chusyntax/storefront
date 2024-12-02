import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavigationBar from "./Navbar";

const Layout = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <NavigationBar onSearch={setSearchQuery} />
      <Container>{React.cloneElement(children, { searchQuery })}</Container>
    </>
  );
};

export default Layout;
