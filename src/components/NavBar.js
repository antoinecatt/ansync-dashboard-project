import React from 'react';
import '../App.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand color="light" className="logo" href="/">
        Radial Inc.
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Menu
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Welcome Antoine!</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <Link to="/">Dashboard</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/settings">Settings</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
