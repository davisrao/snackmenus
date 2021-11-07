import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

/**
 * Component for NavBar
 * 
 * props:
 * - none
 * 
 * state:
 * - none
 * 
 * context:
 * - none
 * 
 * App => NavBar
 */

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          This is the cafe name
        </NavLink>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/snacks">Snacks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/drinks">Drinks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/add">Add to Menu!</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
