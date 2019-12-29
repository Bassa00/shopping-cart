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
      <Navbar className="navbar navbar-expand-lg navbar-light main_box fixed-top" expand="lg" variant="dark" bg="dark">
        <Link to="/">
          <img
            src={navLogo}
            style={{ width: "3rem", height: "3rem" }}
            alt="store"
            className="navbar-brand"
          />
        </Link>
        <Link to="/">
          <Navbar.Brand >Kentaurs</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <NavDropdown title="Rider" id="basic-nav-dropdown">
            
            <Link to="../pages/RKits">
              <NavDropdown.Item href="../pages/RKits">Kits</NavDropdown.Item>
            </Link>

            <Link to="../pages/RProtectors">
              <NavDropdown.Item href="../pages/RProtectors">Body protectors</NavDropdown.Item>
            </Link>

            <NavDropdown.Divider />

            <Link to="../pages/RAccessories">
              <NavDropdown.Item href="../pages/RAccessories">Accessories</NavDropdown.Item>
            </Link>

          </NavDropdown>

            <NavDropdown title="Horse" id="basic-nav-dropdown">
              <Link to="../pages/HKits">
                <NavDropdown.Item href="../pages/HKits">Kits</NavDropdown.Item>
              </Link>

              <Link to="../pages/HProtectors">
                <NavDropdown.Item href="../pages/HProtectors">Body protectors</NavDropdown.Item>
              </Link>

              <NavDropdown.Divider />

              <Link to="../pages/HAccessories">
                <NavDropdown.Item href="../pages/HAccessories">Accessories</NavDropdown.Item>
              </Link>
            </NavDropdown>
            
            <Link to="../pages/Grooming"><Nav.Link href="../pages/Grooming">Grooming</Nav.Link></Link>
            <Link to="../pages/Souvenirs"><Nav.Link href="../pages/Souvenirs">Souvenirs</Nav.Link></Link>
            
            <Link to="../pages/cart">
              <Nav.Link href="../pages/cart">My Cart</Nav.Link>
            </Link>
            
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light"><i class="fas fa-search"></i></Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
