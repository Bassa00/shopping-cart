import React, { Component } from "react";
import { Link } from "react-router-dom";
import navLogo from "./logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "../styles/Button";
import { Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark  px-sm-5">
        <Link to="/">
          <img
            src={navLogo}
            style={{ width: "5rem", height: "5rem" }}
            alt="store"
            className="navbar-brand"
          />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              <b>KENTAURS</b>
            </Link>
          </li>
        </ul>
        <Link to="../pages/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" /> My Cart
            </span>
          </ButtonContainer>
        </Link>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--lightBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem; //1rem == 20px
    text-transform: capitalize;
  }
`;
