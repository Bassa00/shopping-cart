import React, { Component } from "react";
import { Link } from "react-router-dom";
import navLogo from "./logo.svg";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="primary" expand="lg" variant="dark">
        <Link to="/">
          <img
            src={navLogo}
            style={{ width: "5rem", height: "5rem" }}
            alt="store"
            className="navbar-brand"
          />
        </Link>
        <Navbar.Brand href="./">Kentaurs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <NavDropdown title="Rider" id="basic-nav-dropdown">
              <NavDropdown.Item href="../pages/rider/Kits">Kits</NavDropdown.Item>
              <NavDropdown.Item href="../pages/rider/Protectors">Body protectors</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="../pages/rider/Accessories">Accessories</NavDropdown.Item>
          </NavDropdown>

            <NavDropdown title="Horse" id="basic-nav-dropdown">
              <NavDropdown.Item href="../pages/horse/Kits">Kits</NavDropdown.Item>
              <NavDropdown.Item href="../pages/horse/Protectors">Body protectors</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="../pages/horse/Accessories">Accessories</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="../pages/Grooming">Grooming</Nav.Link>
            <Nav.Link href="../pages/Souvenirs">Souvenirs</Nav.Link>
            <Nav.Link href="../pages/cart">My Cart</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
