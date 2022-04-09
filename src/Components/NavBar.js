import React from "react";
import { Container, Navbar,Nav} from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="/"><h3>textY</h3></Navbar.Brand>
          <Nav.Link style={{color: "white"}} href="/notes">My Notes</Nav.Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
